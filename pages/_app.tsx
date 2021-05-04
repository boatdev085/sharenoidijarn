import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { theme, GlobalStyle } from '../Theme'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Head>
          <meta
            name='viewport'
            content='width=device-width,initial-scale=1,user-scalable=no'
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
