import { render } from '@testing-library/react';
import PageLoading from '../pageloading.component';

describe('should render the component', () => {
  it('w/ loading', () => {
    const { container } = render(
      <PageLoading isLoading={true} isPermissionError={false}>
        <div>aaaa</div>
      </PageLoading>
    );
    expect(container).toMatchSnapshot();
  });

  it('w/ error', () => {
    const { container } = render(
      <PageLoading isLoading={false} isPermissionError={true}>
        <div>aaaa</div>
      </PageLoading>
    );
    expect(container).toMatchSnapshot();
  });

  it('w/ view', () => {
    const { container } = render(
      <PageLoading isLoading={false} isPermissionError={false}>
        <div>aaaa</div>
      </PageLoading>
    );
    expect(container).toMatchSnapshot();
  });
});
