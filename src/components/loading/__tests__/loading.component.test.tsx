import { render } from '@testing-library/react';
import Loading from '../loading.component';

it('should render the component', () => {
  const { container } = render(<Loading message='test' />);
  expect(container).toMatchSnapshot();
});
