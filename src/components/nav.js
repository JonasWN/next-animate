import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import { useRecoilState } from 'recoil'
import { darkModeState } from '../recoil/atoms'
import { ArrowLeft, Sun, Moon } from 'react-feather'

export const Navigation = ({ background }) => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState)

  return (
    <StyledNavigation background={background}>
      <NextLink href="/">
        <ArrowLeft strokeWidth={1} />
      </NextLink>
      {!darkMode && (
        <Sun strokeWidth={1} onClick={() => setDarkMode(!darkMode)} />
      )}
      {darkMode && (
        <Moon strokeWidth={1} onClick={() => setDarkMode(!darkMode)} />
      )}
    </StyledNavigation>
  )
}

const StyledNavigation = styled(motion.nav).attrs(() => ({
  initial: {},
  animate: {},
  exit: {},
  transition: {},
}))`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 999;
  color: ${props => (props.background ? '#fff' : props.theme.colors.font)};
`
