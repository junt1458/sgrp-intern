import { useAuth0 } from '@auth0/auth0-react';
import jwt from 'jsonwebtoken';
import jwkToPem, { JWK } from 'jwk-to-pem';
import { useRouter } from 'next/router';
import { IncomingHttpHeaders } from 'node:http';
import { useCallback, useEffect, useMemo, useState } from 'react';

type JwkResponse = {
  keys: JWK[];
};

type JwtVerifyResult = {
  payload: Auth0Jwt;
  error: jwt.VerifyErrors;
};

interface Auth0Jwt extends jwt.JwtPayload {
  'https://hasura.io/jwt/claims'?: Record<string, string | string[]>;
  sub: string;
}

type AuthResult = {
  error?: string;
  status: number;
  uid?: string;
};

export const authenticate = async (
  headers: IncomingHttpHeaders,
  roles: string[]
): Promise<AuthResult> => {
  if (headers.authorization === undefined) {
    return {
      error: 'Authorization header is required',
      status: 401,
    };
  }

  if (!headers.authorization.toLowerCase().startsWith('bearer ')) {
    return {
      error: 'Invalid token provided.',
      status: 401,
    };
  }

  const token = headers.authorization.slice(7);

  const jwkReq = await fetch(
    `https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/.well-known/jwks.json`
  );
  const jwks = (await jwkReq.json()) as JwkResponse;
  const pem = jwkToPem(jwks.keys[0]);

  const { payload, error } = await new Promise<JwtVerifyResult>((resolve) => {
    jwt.verify(token, pem, (err, decoded) =>
      resolve({ error: err!, payload: decoded as Auth0Jwt })
    );
  });

  if (error !== null) {
    return {
      error: error.message,
      status: 401,
    };
  }

  if (
    payload['https://hasura.io/jwt/claims'] === undefined ||
    !Array.isArray(
      payload['https://hasura.io/jwt/claims']['x-hasura-allowed-roles']
    )
  )
    return {
      error: 'Invalid permission',
      status: 403,
    };

  const arr = payload['https://hasura.io/jwt/claims'][
    'x-hasura-allowed-roles'
  ] as string[];
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    const role = arr[i];
    if (roles.includes(role)) {
      found = true;
      break;
    }
  }

  if (!found) {
    return {
      error: 'Invalid permission',
      status: 403,
    };
  }

  return {
    error: undefined,
    status: 200,
    uid: payload['sub'],
  };
};

export const useAuthHook = (
  roles: string[],
  redirectWhenNoLogin?: boolean,
  redirectWhenUidMissing?: boolean
) => {
  const router = useRouter();
  const { isLoading, isAuthenticated, user, getAccessTokenSilently } =
    useAuth0();

  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<string | undefined>(undefined);
  const [uid, setUID] = useState<string | undefined>(undefined);
  const [sid, setSID] = useState<string | undefined>(undefined);

  const isAllowed = useMemo(() => roles.includes(role!), [role, roles]);

  if (!isLoading && !isAuthenticated && redirectWhenNoLogin) router.push('/');

  const reloadRole = useCallback(async () => {
    setLoading(true);
    if (isLoading) {
      setLoading(true);
      setRole(undefined);
      setUID(undefined);
      setSID(undefined);
      return;
    }

    if (!isAuthenticated) {
      setLoading(false);
      setRole(undefined);
      setUID(undefined);
      setSID(undefined);
      return;
    }

    const token = await getAccessTokenSilently({ cacheMode: 'off' });

    const payload = JSON.parse(atob(token.split('.')[1]));
    const role =
      payload['https://hasura.io/jwt/claims']['x-hasura-default-role'];
    const uid = payload['https://hasura.io/jwt/claims']['x-hasura-user-id'];

    setRole(role);
    setUID(uid);
    setSID(payload['sub']);
    setLoading(false);

    if (uid === '' && redirectWhenUidMissing) router.push(`/${role}/profile`);
  }, [
    getAccessTokenSilently,
    isAuthenticated,
    isLoading,
    redirectWhenUidMissing,
    router,
  ]);

  useEffect(() => {
    reloadRole();
  }, [isLoading, isAuthenticated, reloadRole]);

  return {
    isAllowed,
    isLoading: loading,
    role,
    user,
    uid,
    sid,
    reloadRole,
    getAccessTokenSilently,
  };
};
