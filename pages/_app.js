import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../infra/apollo/client'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { createMuiTheme, ThemeProvider as ThemeProviderMUI } from '@material-ui/core/styles';
import LoadingProgress from '../src/infra/router/LoadingProgress';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#848484',
      main: '#666666',
      dark: '#474747',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff4569',
      main: '#ff1744',
      dark: '#b2102f',
      contrastText: '#ffffff',
    },
  },
});

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyle />
      <ThemeProviderMUI theme={theme}>
        <ThemeProvider theme={theme}>
          <LoadingProgress />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeProviderMUI>
    </ApolloProvider>
  )
}
