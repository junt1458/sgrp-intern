import { renderHook } from '@testing-library/react';
import { useHeaderHook } from '../header.hooks';

const logoutMock = jest.fn();

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      push: jest.fn(),
    };
  },
}));

jest.mock('@auth0/auth0-react', () => ({
  Auth0Provider: ({ children }) => <div>{children}</div>,
  useAuth0: () => ({
    isLoading: false,
    user: { sub: 'foobar' },
    isAuthenticated: true,
    loginWithRedirect: jest.fn(),
    logout: logoutMock,
  }),
}));

it('should call logout function', () => {
  const { result } = renderHook(() => useHeaderHook());
  expect(logoutMock).toHaveBeenCalledTimes(0);
  result.current.onClickLogout();
  expect(logoutMock).toHaveBeenCalledTimes(1);
});
