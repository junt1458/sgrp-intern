import { NextApiRequest, NextApiResponse } from 'next';
import { authenticate } from '../../libs/auth';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { error, status, uid } = await authenticate(req.headers, [
    'manager',
    'student',
    'partner',
  ]);
  if (error !== undefined) {
    res.status(status).json({ error });
    return;
  }

  const body = [
    'grant_type=client_credentials',
    'client_id=' +
      encodeURIComponent(process.env.AUTH0_M2M_CLIENT_ID as string),
    'client_secret=' +
      encodeURIComponent(process.env.AUTH0_M2M_CLIENT_SECRET as string),
    'audience=' +
      encodeURIComponent(process.env.NEXT_PUBLIC_AUTH0_AUDIENCE as string),
  ];

  const a0Req = await fetch(
    `https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/oauth/token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.join('&'),
    }
  );

  if (!a0Req.ok) {
    res.status(500).json({ error: 'Internal Server Error' });
    return;
  }

  const token = (await a0Req.json()).access_token;
  const a1Req = await fetch(
    `https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/api/v2/users/${uid}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const a1Res = await a1Req.json();
  const endpoint =
    a1Res.app_metadata.role === 'student'
      ? 'getstudentidfromuid'
      : a1Res.app_metadata.role === 'manager'
      ? 'getmanageridfromuid'
      : a1Res.app_metadata.role === 'partner'
      ? 'getpartneridfromuid'
      : null;

  const key1 =
    a1Res.app_metadata.role === 'student'
      ? 'students'
      : a1Res.app_metadata.role === 'manager'
      ? 'managers'
      : a1Res.app_metadata.role === 'partner'
      ? 'partners'
      : '';

  const key2 =
    a1Res.app_metadata.role === 'student'
      ? 'client_id'
      : a1Res.app_metadata.role === 'manager'
      ? 'manager_id'
      : a1Res.app_metadata.role === 'partner'
      ? 'partner_id'
      : '';

  if (endpoint === null) {
    res.status(400).json({ error: 'Invalid role provided.' });
    return;
  }

  const a2Req = await fetch(
    `${process.env.GRAPHQL_REST_BASE}/${endpoint}/${uid}`,
    {
      headers: {
        'x-hasura-admin-secret': process.env.GRAPHQL_SECRET!,
      },
    }
  );
  const a2Res = await a2Req.json();

  if (
    a2Res[key1] == undefined ||
    a2Res[key1].length == 0 ||
    a2Res[key1][0][key2] != req.body.uid
  ) {
    res.status(400).json({ error: 'No profile found.' });
    return;
  }

  await fetch(
    `https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/api/v2/users/${uid}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        app_metadata: {
          ...a1Res.app_metadata,
          uid: req.body.uid,
        },
      }),
    }
  );

  res.status(200).json({});
};

export default handler;
