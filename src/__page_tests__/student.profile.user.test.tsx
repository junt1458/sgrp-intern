import { render } from '@testing-library/react';
import { Provider } from 'urql';
import StudentProfilePage from '../pages/student/profile';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      push: jest.fn(),
    };
  },
}));

it('should render the component', () => {
  const responseState = {
    executeQuery: () => {},
  };
  const { container } = render(
    <Provider value={responseState}>
      <StudentProfilePage />
    </Provider>
  );
  expect(container).toMatchSnapshot();
});
