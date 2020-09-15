import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ArrowLeft, Search } from 'react-feather'

export const Navigation = () => {
  return (
    <StyledNavigation>
      <ArrowLeft strokeWidth={1} />
      <Search strokeWidth={1} />
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
