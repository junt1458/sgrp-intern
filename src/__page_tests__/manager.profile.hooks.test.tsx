import { renderHook } from '@testing-library/react';
import ManagerProfilePage, { useProfileHook } from '../pages/manager/profile';
import { Provider } from 'urql';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      push: jest.fn(),
    };
  },
}));

it('should return false on validate / new', () => {
  document.querySelector = jest.fn().mockImplementation((selector) => {
    switch (selector) {
      case '#name': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = '';
        return input;
      }
      case '#email': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'aaaa@invalid';
        return input;
      }
      case '#tel': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = '+1111111';
        return input;
      }
    }
  });

  const responseState = {
    executeQuery: () => {},
  };

  const { result } = renderHook(() => useProfileHook(jest.fn(), '', ''), {
    wrapper: ({ children }) => (
      <Provider value={responseState}>{children}</Provider>
    ),
  });
  expect(result.current.validate()).toBe(false);
});

it('should return true on validate / new', () => {
  document.querySelector = jest.fn().mockImplementation((selector) => {
    switch (selector) {
      case '#name': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'Test';
        return input;
      }
      case '#email': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = '';
        return input;
      }
      case '#tel': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = '';
        return input;
      }
    }
  });

  const responseState = {
    executeQuery: () => {},
  };

  const { result } = renderHook(() => useProfileHook(jest.fn(), '', ''), {
    wrapper: ({ children }) => (
      <Provider value={responseState}>{children}</Provider>
    ),
  });
  expect(result.current.validate()).toBe(true);
});
