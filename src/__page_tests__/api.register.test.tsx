import { NextApiRequest, NextApiResponse } from 'next';
import handler from '../pages/api/register';

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
          'x-hasura-allowed-roles': ['register'],
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

describe('should call fetch function', () => {
  const CURRENT_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...CURRENT_ENV };
    process.env.CODE_STUDENT = 'STUDENT';
    process.env.CODE_MANAGER = 'MANAGER';
    process.env.CODE_PARTNER = 'PARTNER';
  });

  afterAll(() => {
    process.env = CURRENT_ENV;
  });

  it('call twice w/internal error', async () => {
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

    const req = {
      headers: {
        authorization: 'Bearer valid',
      },
      body: {
        code: 'invalid',
      },
    } as unknown as NextApiRequest;

    const res = {} as unknown as NextApiResponse;
    const jsonMock = jest.fn().mockReturnValue(res);
    const statusMock = jest.fn().mockReturnValue(res);
    res.json = jsonMock;
    res.status = statusMock;

    expect(window.fetch).toHaveBeenCalledTimes(0);
    await handler(req, res);

    expect(window.fetch).toHaveBeenCalledTimes(2);
    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({ error: 'Internal Server Error' });
  });

  it('call three times w/ invalid', async () => {
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
      });

    const req = {
      headers: {
        authorization: 'Bearer valid',
      },
      body: {
        code: 'invalid',
      },
    } as unknown as NextApiRequest;

    const res = {} as unknown as NextApiResponse;
    const jsonMock = jest.fn().mockReturnValue(res);
    const statusMock = jest.fn().mockReturnValue(res);
    res.json = jsonMock;
    res.status = statusMock;

    expect(window.fetch).toHaveBeenCalledTimes(0);
    await handler(req, res);

    expect(window.fetch).toHaveBeenCalledTimes(2);
    expect(statusMock).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith({
      error: 'Invalid registration code.',
    });
  });

  it('call three times w/ student', async () => {
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
      });

    const req = {
      headers: {
        authorization: 'Bearer valid',
      },
      body: {
        code: 'STUDENT',
      },
    } as unknown as NextApiRequest;

    const res = {} as unknown as NextApiResponse;
    const jsonMock = jest.fn().mockReturnValue(res);
    const statusMock = jest.fn().mockReturnValue(res);
    res.json = jsonMock;
    res.status = statusMock;

    expect(window.fetch).toHaveBeenCalledTimes(0);
    await handler(req, res);

    expect(window.fetch).toHaveBeenCalledTimes(3);
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({
      role: 'student',
    });
  });

  it('call three times w/ student', async () => {
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
      });

    const req = {
      headers: {
        authorization: 'Bearer valid',
      },
      body: {
        code: 'MANAGER',
      },
    } as unknown as NextApiRequest;

    const res = {} as unknown as NextApiResponse;
    const jsonMock = jest.fn().mockReturnValue(res);
    const statusMock = jest.fn().mockReturnValue(res);
    res.json = jsonMock;
    res.status = statusMock;

    expect(window.fetch).toHaveBeenCalledTimes(0);
    await handler(req, res);

    expect(window.fetch).toHaveBeenCalledTimes(3);
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({
      role: 'manager',
    });
  });

  it('call three times w/ student', async () => {
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
      });

    const req = {
      headers: {
        authorization: 'Bearer valid',
      },
      body: {
        code: 'PARTNER',
      },
    } as unknown as NextApiRequest;

    const res = {} as unknown as NextApiResponse;
    const jsonMock = jest.fn().mockReturnValue(res);
    const statusMock = jest.fn().mockReturnValue(res);
    res.json = jsonMock;
    res.status = statusMock;

    expect(window.fetch).toHaveBeenCalledTimes(0);
    await handler(req, res);

    expect(window.fetch).toHaveBeenCalledTimes(3);
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({
      role: 'partner',
    });
  });
});
