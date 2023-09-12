import { render } from '@testing-library/react';
import PartnerIndexPage from '../pages/partner';

it('should render the component', () => {
  const { container } = render(<PartnerIndexPage />);
  expect(container).toMatchSnapshot();
});
