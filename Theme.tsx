import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
      margin:0;
      padding:0;
      font-family: 'Montserrat';
  }
  * {
      font-family: 'Montserrat';
  }
`

export const theme = {
  colors: {
    primary: '#D6A549',
    black: '#000',
    bgHeader: '#260000',
    white: '#fff',
  },
}
