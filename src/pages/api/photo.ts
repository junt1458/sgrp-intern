import S3 from 'aws-sdk/clients/s3';
import { authenticate } from '../../libs/auth';
import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { error, status, pid } = await authenticate(req.headers, ['student']);
  if (error !== undefined) {
    res.status(status).json({ error });
    return;
  }

  const s3 = new S3({
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_ID!,
      secretAccessKey: process.env.R2_ACCESS_SECRET!,
    },
    signatureVersion: 'v4',
    region: 'auto',
  });

  switch (req.method) {
    case 'GET': {
      const url = await s3.getSignedUrlPromise('putObject', {
        Bucket: process.env.R2_BUCKET_NAME,
        Key: `${pid}.png`,
        Expires: 3600,
      });
      res.status(200).json({ url });
      return;
    }
    case 'DELETE': {
      const url = await s3.getSignedUrlPromise('deleteObject', {
        Bucket: process.env.R2_BUCKET_NAME,
        Key: `${pid}.png`,
        Expires: 3600,
      });

      const req = await fetch(url, { method: 'DELETE' });
      res
        .status(req.ok ? 200 : 500)
        .json(req.ok ? {} : { error: 'Delete Failed.' });
      return;
    }
  }

  res.status(400).json({ error: 'No such method' });
};

export default handler;
