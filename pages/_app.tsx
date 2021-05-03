import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from '../Theme'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
