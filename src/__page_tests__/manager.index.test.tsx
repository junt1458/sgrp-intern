import { render } from '@testing-library/react';
import ManagerIndexPage from '../pages/manager';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      push: jest.fn(),
    };
  },
}));

it('should render the component', () => {
  const { container } = render(<ManagerIndexPage />);
  expect(container).toMatchSnapshot();
});
