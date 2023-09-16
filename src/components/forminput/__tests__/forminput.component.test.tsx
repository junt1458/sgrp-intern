import { render } from '@testing-library/react';
import FormInput from '../forminput.component';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      push: jest.fn(),
    };
  },
}));

describe('should render the component', () => {
  it('text', () => {
    const { container } = render(
      <FormInput id={''} type={'text'} label={''} defaultValue='test' />
    );
    expect(container).toMatchSnapshot();
  });

  it('text reqired / error', () => {
    const { container } = render(
      <FormInput
        id={''}
        type={'text'}
        label={''}
        defaultValue='test'
        required={true}
        error='test error'
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('date', () => {
    const { container } = render(
      <FormInput id={''} type={'date'} label={''} />
    );
    expect(container).toMatchSnapshot();
  });

  it('date requried / error', () => {
    const { container } = render(
      <FormInput
        id={''}
        type={'date'}
        label={''}
        required={true}
        error='test error'
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('tel', () => {
    const { container } = render(<FormInput id={''} type={'tel'} label={''} />);
    expect(container).toMatchSnapshot();
  });

  it('tel required / error', () => {
    const { container } = render(
      <FormInput
        id={''}
        type={'tel'}
        label={''}
        required={true}
        error='test error'
      />
    );
    expect(container).toMatchSnapshot();
  });
});
