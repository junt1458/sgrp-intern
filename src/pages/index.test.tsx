import { render } from '@testing-library/react';
import Home from '.';

it('should render component', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
