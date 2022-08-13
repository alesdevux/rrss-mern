import { ThemeProvider } from 'styled-components'
import { StyledContainer } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'
import theme from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledContainer>App</StyledContainer>
    </ThemeProvider>
  )
}
export default App
