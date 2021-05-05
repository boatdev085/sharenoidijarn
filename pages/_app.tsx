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
          <link
            ref='stylesheet'
            href='https://fonts.googleapis.com/css?family=Montserrat%3A400%2C500%2C700%2C800%7CWork%2BSans%3A300%2C400%2C500%2C600%2C700%2C800%2C900%26display%3Dswap&subset=latin%2Clatin-ext&display=swap'
            type='text/css'
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
