import { useAuth0 } from '@auth0/auth0-react';
import { cacheExchange, fetchExchange, createClient, Provider } from 'urql';
import { authExchange } from '@urql/exchange-auth';

export const GRAPHQL_ENDPOINT =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
  'http://localhost:8080/v1/graphql';

export const fetchOptions = {
  headers: {
    'Content-Type': 'application/json',
    'Hasura-Client-Name': 'sgrp-intern',
  },
  method: 'POST',
};

const UrqlProvider: React.FunctionComponent<{
  children: JSX.Element;
}> = ({ children }) => {
  const { isLoading, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const tokenExchange = authExchange(async (utils) => {
    await new Promise<void>((resolve) => {
      const intervalId = setInterval(() => {
        if (isLoading) return;
        clearInterval(intervalId);
        resolve();
      }, 100);
    });

    const token = isAuthenticated ? await getAccessTokenSilently() : undefined;

    return {
      addAuthToOperation(operation) {
        if (!token) return operation;
        return utils.appendHeaders(operation, {
          Authorization: token ? `Bearer ${token}` : '',
        });
      },
      didAuthError: undefined,
      refreshAuth: undefined,
    };
  });

  const client = createClient({
    url: GRAPHQL_ENDPOINT,
    fetchOptions,
    exchanges: [cacheExchange, tokenExchange, fetchExchange],
  });

  return <Provider value={client}>{children}</Provider>;
};

export default UrqlProvider;
