import { render } from '@testing-library/react';
import Input from '../input.component';

it('should render the component', () => {
  const { container } = render(<Input id={''} type={'text'} />);
  expect(container).toMatchSnapshot();
});
