import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import Auth from './Auth'

const PRIVATE_PATHS = ['/', '/questions', '/results', '/resultats']

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
  router: { route },
}: AppProps) {
  const AuthRequired =
    process.env.APP_ENV !== 'production' &&
    process.env.APP_ENV !== 'alpha' &&
    PRIVATE_PATHS.some((path) => route.startsWith(path))

  return (
    <SessionProvider session={session}>
      {AuthRequired ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  )
}

export default MyApp
