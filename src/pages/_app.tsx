import '../styles/globals.css';
import { Auth0Provider } from '@auth0/auth0-react';
import type { AppProps } from 'next/app';
import UrqlProvider from '../libs/graphql-provider';

export default function App({ Component, pageProps }: AppProps) {
  const origin =
    typeof window !== 'undefined' &&
    window.location !== undefined &&
    window.location.origin !== undefined
      ? window.location.origin
      : 'http://localhost:3000';

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENTID!}
      authorizationParams={{
        redirect_uri: origin,
        audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE!,
      }}
    >
      <UrqlProvider>
        <Component {...pageProps} />
      </UrqlProvider>
    </Auth0Provider>
  );
}
