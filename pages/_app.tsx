import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/globalstyles'
import type { AppProps } from 'next/app'
import { theme } from '../styles/theme'
import "../styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
