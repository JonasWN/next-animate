import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Catagories = () => {
  return (
    <StyledCatagories>
      <motion.div initial={{ x: -20 }} animate={{ x: 0 }} exit={{ x: -20 }}>
        <h1>Shoes</h1>
        <ul>
          <li>All</li>
          <li>Air Max</li>
          <li>Presto</li>
          <li>Huarache</li>
        </ul>
      </motion.div>
    </StyledCatagories>
  )
}

const StyledCatagories = styled(motion.header).attrs(() => ({
  initial: {},
  animate: {},
  exit: {},
  transition: {},
}))`
  margin-top: 20px;

  ul {
    display: flex;
    margin-top: 10px;
    overflow: scroll;
    overflow-y: hidden;

    ::-webkit-scrollbar {
      display: none;
    }

    li {
      border: ${props => props.theme.colors.border};
      border-radius: 18px;
      opacity: 0.7;
      margin-right: 10px;
      padding: 10px;
      min-width: 70px;
      font-size: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 19px;
      text-align: center;
      letter-spacing: -0.3px;
      height: 32px;

      :first-child {
        background: ${props => props.theme.colors.font};
        color: ${props => props.theme.colors.body};
        opacity: 1;
      }
    }
  }
`
