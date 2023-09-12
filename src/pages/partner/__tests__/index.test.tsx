import { render } from '@testing-library/react';
import PartnerIndexPage from '..';

it('should render the component', () => {
  const { container } = render(<PartnerIndexPage />);
  expect(container).toMatchSnapshot();
});
