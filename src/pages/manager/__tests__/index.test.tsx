import { render } from '@testing-library/react';
import ManagerIndexPage from '..';

it('should render the component', () => {
  const { container } = render(<ManagerIndexPage />);
  expect(container).toMatchSnapshot();
});
