import { render } from '@testing-library/react';
import PartnerIndexPage from '../pages/partner';
import { Provider } from 'urql';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      push: jest.fn(),
    };
  },
}));

const redirectMock = jest.fn();
jest.mock('@auth0/auth0-react', () => ({
  Auth0Provider: ({ children }) => <div>{children}</div>,
  useAuth0: () => ({
    isLoading: false,
    user: { sub: 'foobar' },
    isAuthenticated: false,
    loginWithRedirect: redirectMock,
  }),
}));

it('should render the component', () => {
  const responseState = {
    executeQuery: () => {},
  };
  const { container } = render(
    <Provider value={responseState}>
      <PartnerIndexPage />
    </Provider>
  );

  expect(container).toMatchSnapshot();
});
