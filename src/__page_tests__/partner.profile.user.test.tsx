import { render } from '@testing-library/react';
import PartnerProfilePage from '../pages/partner/profile';
import { Provider } from 'urql';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      push: jest.fn(),
    };
  },
}));

it('should render the component', () => {
  const responseState = {
    executeQuery: () => {},
  };
  const { container } = render(
    <Provider value={responseState}>
      <PartnerProfilePage />
    </Provider>
  );
  expect(container).toMatchSnapshot();
});
