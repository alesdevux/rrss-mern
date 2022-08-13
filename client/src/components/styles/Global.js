import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,600,700');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: ${props => props.theme.fontSizes.medium};
    background-color: ${props => props.theme.colors.lightBase};
  }
`

export default GlobalStyles
