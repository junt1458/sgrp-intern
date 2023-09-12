import { render } from '@testing-library/react';
import Header from '../header.component';

jest.mock('@auth0/auth0-react', () => ({
  Auth0Provider: ({ children }) => <div>{children}</div>,
  useAuth0: () => ({
    isLoading: false,
    user: { sub: 'foobar' },
    isAuthenticated: false,
    loginWithRedirect: jest.fn(),
  }),
}));

it('should render the component', () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});
