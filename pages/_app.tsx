import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import Auth from './Auth'

const PRIVATE_PATHS = ['/', '/eligibility', '/results']

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
  router: { route },
}: AppProps) {
  const AuthRequired =
    process.env.NODE_ENV !== 'production' &&
    PRIVATE_PATHS.some((path) => route.startsWith(path))

  // TODO: to delete
  console.log('NODE ENVIRONMENT', process.env.NODE_ENV)
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
