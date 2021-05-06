import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { theme, GlobalStyle } from '../Theme'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,user-scalable=no'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat'
          rel='stylesheet'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
