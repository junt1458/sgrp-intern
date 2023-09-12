import { render } from '@testing-library/react';
import StudentIndexPage from '../pages/student/index';

it('should render the component', () => {
  const { container } = render(<StudentIndexPage />);
  expect(container).toMatchSnapshot();
});
