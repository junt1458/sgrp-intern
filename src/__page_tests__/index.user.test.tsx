import IndexPage from '../pages';
import { render } from '@testing-library/react';

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
    getAccessTokenSilently: jest.fn().mockReturnValue({ then: jest.fn() }),
  }),
}));

it('should render the component', () => {
  const { container } = render(<IndexPage />);
  expect(container).toMatchSnapshot();
});
