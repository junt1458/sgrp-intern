import { renderHook } from '@testing-library/react';
import { useBackButton } from '../pageloading.hooks';

const pushMock = jest.fn();

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      push: pushMock,
    };
  },
}));

it('should call push function', () => {
  const { result } = renderHook(() => useBackButton());
  expect(pushMock).toHaveBeenCalledTimes(0);
  result.current.onBackClicked();
  expect(pushMock).toHaveBeenCalledTimes(1);
});
