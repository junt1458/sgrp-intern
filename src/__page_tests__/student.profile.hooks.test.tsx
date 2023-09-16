import { renderHook } from '@testing-library/react';
import { useProfileHook } from '../pages/student/profile';
import { Provider } from 'urql';
import { act } from 'react-dom/test-utils';
import { fromValue } from 'wonka';

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
      case '#gender': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'test';
        return input;
      }
      case '#birthday': {
        const date = new Date();
        date.setFullYear(date.getFullYear() + 2);
        const input = document.createElement('input');
        input.type = 'date';
        input.valueAsDate = date;
        return input;
      }
      case '#department': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'AAA';
        return input;
      }
      case '#major': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'test';
        return input;
      }
      case '#passport_no': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'Aaaa';
        return input;
      }
      case '#passport_expiry': {
        const date = new Date();
        date.setFullYear(date.getFullYear() - 2);
        const input = document.createElement('input');
        input.type = 'date';
        input.valueAsDate = date;
        return input;
      }
      case '#passport_country': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'Aaaa';
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
  act(() => expect(result.current.validate()).toBe(false));
});

it('should return true on validate / new', () => {
  document.querySelector = jest.fn().mockImplementation((selector) => {
    switch (selector) {
      case '#name': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'test';
        return input;
      }
      case '#email': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'aaaa@valid.com';
        return input;
      }
      case '#tel': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = '+81120123456';
        return input;
      }
      case '#gender': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'test';
        return input;
      }
      case '#birthday': {
        const date = new Date();
        date.setFullYear(date.getFullYear() - 2);
        const input = document.createElement('input');
        input.type = 'date';
        input.valueAsDate = date;
        return input;
      }
      case '#department': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'AAA';
        return input;
      }
      case '#major': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'test';
        return input;
      }
      case '#passport_no': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'Aaaa';
        return input;
      }
      case '#passport_expiry': {
        const date = new Date();
        date.setFullYear(date.getFullYear() + 2);
        const input = document.createElement('input');
        input.type = 'date';
        input.valueAsDate = date;
        return input;
      }
      case '#passport_country': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'Aaaa';
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
  act(() => expect(result.current.validate()).toBe(true));
});

it('should call alert error / new', async () => {
  document.querySelector = jest.fn().mockImplementation((selector) => {
    switch (selector) {
      case '#name': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'test';
        return input;
      }
      case '#email': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'aaaa@valid.com';
        return input;
      }
      case '#tel': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = '+81120123456';
        return input;
      }
      case '#gender': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'test';
        return input;
      }
      case '#birthday': {
        const date = new Date();
        date.setFullYear(date.getFullYear() - 2);
        const input = document.createElement('input');
        input.type = 'date';
        input.valueAsDate = date;
        return input;
      }
      case '#department': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'AAA';
        return input;
      }
      case '#major': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'test';
        return input;
      }
      case '#passport_no': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'Aaaa';
        return input;
      }
      case '#passport_expiry': {
        const date = new Date();
        date.setFullYear(date.getFullYear() + 2);
        const input = document.createElement('input');
        input.type = 'date';
        input.valueAsDate = date;
        return input;
      }
      case '#passport_country': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'Aaaa';
        return input;
      }
    }
  });

  const mutationFn = jest.fn().mockImplementation(() =>
    fromValue({
      error: 'test',
    })
  );
  const responseState = {
    executeQuery: () => {},
    executeMutation: mutationFn,
  };

  window.alert = jest.fn();
  expect(window.alert).toHaveBeenCalledTimes(0);
  const { result } = renderHook(() => useProfileHook(jest.fn(), '', ''), {
    wrapper: ({ children }) => (
      <Provider value={responseState}>{children}</Provider>
    ),
  });
  await act(async () => {
    await result.current.post();
  });
  expect(window.alert).toHaveBeenCalledTimes(1);
  expect(window.alert).toHaveBeenCalledWith('Error: test');
});

it('should call alert error / edit', async () => {
  document.querySelector = jest.fn().mockImplementation((selector) => {
    switch (selector) {
      case '#name': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'test';
        return input;
      }
      case '#email': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'aaaa@valid.com';
        return input;
      }
      case '#tel': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = '+81120123456';
        return input;
      }
      case '#gender': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'test';
        return input;
      }
      case '#birthday': {
        const date = new Date();
        date.setFullYear(date.getFullYear() - 2);
        const input = document.createElement('input');
        input.type = 'date';
        input.valueAsDate = date;
        return input;
      }
      case '#department': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'AAA';
        return input;
      }
      case '#major': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'test';
        return input;
      }
      case '#passport_no': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'Aaaa';
        return input;
      }
      case '#passport_expiry': {
        const date = new Date();
        date.setFullYear(date.getFullYear() + 2);
        const input = document.createElement('input');
        input.type = 'date';
        input.valueAsDate = date;
        return input;
      }
      case '#passport_country': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'Aaaa';
        return input;
      }
    }
  });

  const mutationFn = jest.fn().mockImplementation(() =>
    fromValue({
      error: 'test',
    })
  );
  const responseState = {
    executeQuery: () => {},
    executeMutation: mutationFn,
  };

  window.alert = jest.fn();
  expect(window.alert).toHaveBeenCalledTimes(0);
  const { result } = renderHook(
    () => useProfileHook(jest.fn(), 'test', 'test'),
    {
      wrapper: ({ children }) => (
        <Provider value={responseState}>{children}</Provider>
      ),
    }
  );
  await act(async () => {
    await result.current.post();
  });
  expect(window.alert).toHaveBeenCalledTimes(1);
  expect(window.alert).toHaveBeenCalledWith('Error: test');
});

it('should call fetch / new', async () => {
  document.querySelector = jest.fn().mockImplementation((selector) => {
    switch (selector) {
      case '#name': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'test';
        return input;
      }
      case '#email': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'aaaa@valid.com';
        return input;
      }
      case '#tel': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = '+81120123456';
        return input;
      }
      case '#gender': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'test';
        return input;
      }
      case '#birthday': {
        const date = new Date();
        date.setFullYear(date.getFullYear() - 2);
        const input = document.createElement('input');
        input.type = 'date';
        input.valueAsDate = date;
        return input;
      }
      case '#department': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'AAA';
        return input;
      }
      case '#major': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'test';
        return input;
      }
      case '#passport_no': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'Aaaa';
        return input;
      }
      case '#passport_expiry': {
        const date = new Date();
        date.setFullYear(date.getFullYear() + 2);
        const input = document.createElement('input');
        input.type = 'date';
        input.valueAsDate = date;
        return input;
      }
      case '#passport_country': {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'Aaaa';
        return input;
      }
    }
  });

  const mutationFn = jest.fn().mockImplementation(() =>
    fromValue({
      data: {},
    })
  );
  const responseState = {
    executeQuery: () => {},
    executeMutation: mutationFn,
  };

  window.fetch = jest.fn().mockResolvedValue({});
  expect(window.fetch).toHaveBeenCalledTimes(0);
  const { result } = renderHook(() => useProfileHook(jest.fn(), '', ''), {
    wrapper: ({ children }) => (
      <Provider value={responseState}>{children}</Provider>
    ),
  });
  await act(async () => {
    await result.current.post();
  });
  expect(window.fetch).toHaveBeenCalledTimes(1);
});
