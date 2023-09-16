import { act, render } from '@testing-library/react';
import Header from '../header.component';

const dummy_token = `DUMMY.${btoa(
  JSON.stringify({
    'https://hasura.io/jwt/claims': {
      'x-hasura-default-role': 'dummy-role',
      'x-hasura-user-id': '',
    },
  })
)}.DUMMY`;

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
    getAccessTokenSilently: jest
      .fn()
      .mockImplementation(() => Promise.resolve(dummy_token)),
  }),
}));

it('should render the component', () => {
  act(() => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
