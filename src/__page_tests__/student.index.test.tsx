import { render } from '@testing-library/react';
import StudentIndexPage from '../pages/student/index';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      push: jest.fn(),
    };
  },
}));

it('should render the component', () => {
  const { container } = render(<StudentIndexPage />);
  expect(container).toMatchSnapshot();
});
