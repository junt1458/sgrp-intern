import { NextApiRequest, NextApiResponse } from 'next';
import { authenticate } from '../../libs/auth';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { error, status, uid } = await authenticate(req.headers, ['register']);
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

  let role = undefined;
  switch (req.body.code) {
    case process.env.CODE_STUDENT: {
      role = 'student';
      break;
    }
    case process.env.CODE_MANAGER: {
      role = 'manager';
      break;
    }
    case process.env.CODE_PARTNER: {
      role = 'partner';
      break;
    }
  }

  if (role === undefined) {
    res.status(400).json({ error: 'Invalid registration code.' });
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
          role,
        },
      }),
    }
  );

  res.status(200).json({ role });
};

export default handler;
