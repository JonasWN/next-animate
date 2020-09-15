import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useRecoilState } from 'recoil'
import { darkModeState } from '../recoil/atoms'
import { ArrowLeft, Sun, Moon } from 'react-feather'

export const Navigation = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState)

  return (
    <StyledNavigation>
      <ArrowLeft strokeWidth={1} />
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
`
