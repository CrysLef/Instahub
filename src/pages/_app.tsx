import { Globalstyle } from '../styles/globalStyles'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Globalstyle />
    </>
  )
}
export default MyApp
