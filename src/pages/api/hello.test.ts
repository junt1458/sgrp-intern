import { NextApiRequest, NextApiResponse } from 'next';
import handler from './hello';

it('should call status / json function', () => {
  const req = {
    headers: {},
  } as unknown as NextApiRequest;
  const res = {} as unknown as NextApiResponse;

  const jsonMock = jest.fn().mockReturnValue(res);
  const statusMock = jest.fn().mockReturnValue(res);
  res.json = jsonMock;
  res.status = statusMock;

  handler(req, res);

  expect(statusMock).toHaveBeenCalledTimes(1);
  expect(statusMock).toHaveBeenCalledWith(200);
  expect(jsonMock).toHaveBeenCalledTimes(1);
  expect(jsonMock).toHaveBeenCalledWith({
    name: 'John Doe',
  });
});
