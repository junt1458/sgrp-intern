import { renderHook } from '@testing-library/react';
import { useRegister } from '../pages/register';
import { act } from 'react-dom/test-utils';

let pushMock = jest.fn();
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      push: pushMock,
    };
  },
}));

const dummy_token = `DUMMY.${btoa(
  JSON.stringify({
    'https://hasura.io/jwt/claims': {
      'x-hasura-default-role': 'dummy-role',
      'x-hasura-user-id': '',
    },
  })
)}.DUMMY`;

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    getAccessTokenSilently: jest
      .fn()
      .mockImplementation(() => Promise.resolve(dummy_token)),
  }),
}));

jest.spyOn(document, 'querySelector').mockImplementation((selector) => {
  switch (selector) {
    case '#reg_code': {
      const rcMock = document.createElement('input');
      rcMock.type = 'text';
      rcMock.value = 'test';
      return rcMock;
    }
    default: {
      return null;
    }
  }
});

describe('do tests', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should call fetch function w/error', async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
      status: 200,
      json: jest.fn().mockResolvedValue({
        error: 'test error',
      }),
    });

    const { result } = renderHook(() => useRegister());
    expect(window.fetch).toHaveBeenCalledTimes(0);
    expect(result.current.status).toEqual('');

    await act(async () => {
      await result.current.onClick();
    });

    expect(result.current.status).toEqual('test error');
    expect(window.fetch).toHaveBeenCalledTimes(1);
  });

  it('should call fetch function wo/error', async () => {
    pushMock = jest.fn();
    expect(pushMock).toHaveBeenCalledTimes(0);
    window.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        error: 'test error',
      }),
    });

    const { result } = renderHook(() => useRegister());
    expect(window.fetch).toHaveBeenCalledTimes(0);
    expect(result.current.status).toEqual('');

    await act(async () => {
      await result.current.onClick();
    });

    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(pushMock).toHaveBeenCalledTimes(5);
  });
});
