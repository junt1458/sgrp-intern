import TestObject from './testobj';
import { render } from '@testing-library/react';

it('Test render', () => {
  const { container } = render(<TestObject />);
  expect(container).toMatchSnapshot();
});
