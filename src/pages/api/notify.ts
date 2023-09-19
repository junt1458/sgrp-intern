import { NextApiRequest, NextApiResponse } from 'next';
import { authenticate } from '../../libs/auth';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { error, status } = await authenticate(req.headers, [
    'partner',
    'manager',
  ]);
  if (error !== undefined) {
    res.status(status).json({ error });
    return;
  }

  res.status(200).json({ test: 'aa' });
};

export default handler;
