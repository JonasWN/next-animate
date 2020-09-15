import React from 'react'
import Head from 'next/head'
import { Theme, DarkTheme } from '../styles/theme'
import { useRecoilValue } from 'recoil'
import { darkModeState } from '../recoil/atoms'
import { Container } from '../styles/layoutStyle'
import { GlobalStyle } from '../styles/reset'
import { ThemeProvider } from 'styled-components'

const Layout = ({ children, title }) => {
  const darkTheme = useRecoilValue(darkModeState)

  return (
    <ThemeProvider theme={darkTheme ? DarkTheme : Theme}>
      <GlobalStyle />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Next" />
        <meta name="og:title" content="Next" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{title}</title>
      </Head>
      <Container>{children}</Container>
    </ThemeProvider>
  )
}

export default Layout
