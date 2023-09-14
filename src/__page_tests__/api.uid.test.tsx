import { NextApiRequest, NextApiResponse } from 'next';
import handler from '../pages/api/uid';

jest.mock('jsonwebtoken', () => ({
  verify: jest.fn().mockImplementation((token, pem, callback) => {
    if (token === 'invalid') {
      callback({ message: 'invalid token' }, {});
    } else if (token === 'invalid-role') {
      callback(null, {
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['default'],
        },
      });
    } else {
      callback(null, {
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['student'],
        },
      });
    }
  }),
}));

jest.mock('jwk-to-pem', () => ({
  __esModule: true,
  default: jest.fn(),
}));

it('should return permission error', async () => {
  const req = {
    headers: {},
  } as unknown as NextApiRequest;
  const res = {} as unknown as NextApiResponse;

  const jsonMock = jest.fn().mockReturnValue(res);
  const statusMock = jest.fn().mockReturnValue(res);
  res.json = jsonMock;
  res.status = statusMock;

  await handler(req, res);

  expect(statusMock).toHaveBeenCalledTimes(1);
  expect(statusMock).toHaveBeenCalledWith(401);
  expect(jsonMock).toHaveBeenCalledTimes(1);
  expect(jsonMock).toHaveBeenCalledWith({
    error: 'Authorization header is required',
  });
});

it('should call internal server error', async () => {
  window.fetch = jest
    .fn()
    .mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        keys: [{}],
      }),
    })
    .mockResolvedValueOnce({
      ok: false,
      status: 400,
      json: jest.fn().mockResolvedValue({
        access_token: 'dummy',
      }),
    });

  const res = {} as unknown as NextApiResponse;
  const jsonMock = jest.fn().mockReturnValue(res);
  const statusMock = jest.fn().mockReturnValue(res);
  res.json = jsonMock;
  res.status = statusMock;

  expect(window.fetch).toHaveBeenCalledTimes(0);

  const req = {
    headers: {
      authorization: 'Bearer valid',
    },
    body: {
      uid: 'test',
    },
  } as unknown as NextApiRequest;
  await handler(req, res);

  expect(window.fetch).toHaveBeenCalledTimes(2);
  expect(statusMock).toHaveBeenCalledWith(500);
  expect(jsonMock).toHaveBeenCalledWith({ error: 'Internal Server Error' });
});

it('should call w/invalid role', async () => {
  window.fetch = jest
    .fn()
    .mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        keys: [{}],
      }),
    })
    .mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        access_token: 'dummy',
      }),
    })
    .mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        app_metadata: {
          role: 'invalid',
        },
      }),
    });

  const res = {} as unknown as NextApiResponse;
  const jsonMock = jest.fn().mockReturnValue(res);
  const statusMock = jest.fn().mockReturnValue(res);
  res.json = jsonMock;
  res.status = statusMock;

  expect(window.fetch).toHaveBeenCalledTimes(0);

  const req = {
    headers: {
      authorization: 'Bearer valid',
    },
    body: {
      uid: 'test',
    },
  } as unknown as NextApiRequest;
  await handler(req, res);

  expect(window.fetch).toHaveBeenCalledTimes(3);
  expect(statusMock).toHaveBeenCalledWith(400);
  expect(jsonMock).toHaveBeenCalledWith({ error: 'Invalid role provided.' });
});

it('should call w/no profile', async () => {
  window.fetch = jest
    .fn()
    .mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        keys: [{}],
      }),
    })
    .mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        access_token: 'dummy',
      }),
    })
    .mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        app_metadata: {
          role: 'student',
        },
      }),
    })
    .mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        managers: [],
      }),
    });

  const res = {} as unknown as NextApiResponse;
  const jsonMock = jest.fn().mockReturnValue(res);
  const statusMock = jest.fn().mockReturnValue(res);
  res.json = jsonMock;
  res.status = statusMock;

  expect(window.fetch).toHaveBeenCalledTimes(0);

  const req = {
    headers: {
      authorization: 'Bearer valid',
    },
    body: {
      uid: 'test',
    },
  } as unknown as NextApiRequest;
  await handler(req, res);

  expect(window.fetch).toHaveBeenCalledTimes(4);
  expect(statusMock).toHaveBeenCalledWith(400);
  expect(jsonMock).toHaveBeenCalledWith({ error: 'No profile found.' });
});

it('should call w/valid student profile', async () => {
  window.fetch = jest
    .fn()
    .mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        keys: [{}],
      }),
    })
    .mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        access_token: 'dummy',
      }),
    })
    .mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        app_metadata: {
          role: 'student',
        },
      }),
    })
    .mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        managers: [{ manager_id: 'test' }],
      }),
    });

  const res = {} as unknown as NextApiResponse;
  const jsonMock = jest.fn().mockReturnValue(res);
  const statusMock = jest.fn().mockReturnValue(res);
  res.json = jsonMock;
  res.status = statusMock;

  expect(window.fetch).toHaveBeenCalledTimes(0);

  const req = {
    headers: {
      authorization: 'Bearer valid',
    },
    body: {
      uid: 'test',
    },
  } as unknown as NextApiRequest;
  await handler(req, res);

  expect(window.fetch).toHaveBeenCalledTimes(5);
  expect(statusMock).toHaveBeenCalledWith(200);
  expect(jsonMock).toHaveBeenCalledWith({});
});

it('should call w/valid manager profile', async () => {
  window.fetch = jest
    .fn()
    .mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        keys: [{}],
      }),
    })
    .mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        access_token: 'dummy',
      }),
    })
    .mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        app_metadata: {
          role: 'manager',
        },
      }),
    })
    .mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        managers: [{ manager_id: 'test' }],
      }),
    });

  const res = {} as unknown as NextApiResponse;
  const jsonMock = jest.fn().mockReturnValue(res);
  const statusMock = jest.fn().mockReturnValue(res);
  res.json = jsonMock;
  res.status = statusMock;

  expect(window.fetch).toHaveBeenCalledTimes(0);

  const req = {
    headers: {
      authorization: 'Bearer valid',
    },
    body: {
      uid: 'test',
    },
  } as unknown as NextApiRequest;
  await handler(req, res);

  expect(window.fetch).toHaveBeenCalledTimes(5);
  expect(statusMock).toHaveBeenCalledWith(200);
  expect(jsonMock).toHaveBeenCalledWith({});
});

it('should call w/valid partner profile', async () => {
  window.fetch = jest
    .fn()
    .mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        keys: [{}],
      }),
    })
    .mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        access_token: 'dummy',
      }),
    })
    .mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        app_metadata: {
          role: 'partner',
        },
      }),
    })
    .mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        managers: [{ manager_id: 'test' }],
      }),
    });

  const res = {} as unknown as NextApiResponse;
  const jsonMock = jest.fn().mockReturnValue(res);
  const statusMock = jest.fn().mockReturnValue(res);
  res.json = jsonMock;
  res.status = statusMock;

  expect(window.fetch).toHaveBeenCalledTimes(0);

  const req = {
    headers: {
      authorization: 'Bearer valid',
    },
    body: {
      uid: 'test',
    },
  } as unknown as NextApiRequest;
  await handler(req, res);

  expect(window.fetch).toHaveBeenCalledTimes(5);
  expect(statusMock).toHaveBeenCalledWith(200);
  expect(jsonMock).toHaveBeenCalledWith({});
});
