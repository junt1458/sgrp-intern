import { render } from '@testing-library/react';
import RegisterIndexPage from '../pages/register';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      push: jest.fn(),
    };
  },
}));

it('should render the component', () => {
  const { container } = render(<RegisterIndexPage />);
  expect(container).toMatchSnapshot();
});
