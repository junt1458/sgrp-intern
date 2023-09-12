import { render } from '@testing-library/react';
import ManagerIndexPage from '../pages/manager';

it('should render the component', () => {
  const { container } = render(<ManagerIndexPage />);
  expect(container).toMatchSnapshot();
});
