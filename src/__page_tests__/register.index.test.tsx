import { render } from '@testing-library/react';
import RegisterIndexPage from '../pages/register';

it('should render the component', () => {
  const { container } = render(<RegisterIndexPage />);
  expect(container).toMatchSnapshot();
});
