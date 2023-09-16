import { render } from '@testing-library/react';
import ManagerProfilePage from '../pages/manager/profile';
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
      <ManagerProfilePage />
    </Provider>
  );
  expect(container).toMatchSnapshot();
});
