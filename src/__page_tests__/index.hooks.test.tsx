import { renderHook } from '@testing-library/react';
import { useRedirectHook } from '../pages';

const dummy_token = `DUMMY.${btoa(
  JSON.stringify({
    'https://hasura.io/jwt/claims': {
      'x-hasura-default-role': 'dummy-role',
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

const pushMock = jest.fn();
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      push: pushMock,
    };
  },
}));

it('should call router.push', async () => {
  const { result } = renderHook(() => useRedirectHook());
  expect(pushMock).toHaveBeenCalledTimes(0);
  await result.current.redirectUser();
  expect(pushMock).toHaveBeenCalledTimes(1);
  expect(pushMock).toHaveBeenCalledWith(`/dummy-role`);
});
