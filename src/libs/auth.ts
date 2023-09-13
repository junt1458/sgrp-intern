import jwt from 'jsonwebtoken';
import jwkToPem, { JWK } from 'jwk-to-pem';
import { IncomingHttpHeaders } from 'node:http';

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
      resolve({ error: err, payload: decoded as jwt.JwtPayload })
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
    console.log(role);
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
