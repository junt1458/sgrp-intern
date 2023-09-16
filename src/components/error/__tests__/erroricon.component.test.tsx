import { render } from '@testing-library/react';
import ErrorIcon from '../erroricon.component';

it('should render the component', () => {
  const { container } = render(<ErrorIcon message='test' />);
  expect(container).toMatchSnapshot();
});
