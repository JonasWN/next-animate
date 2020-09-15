import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ProductItem = ({ name, price, color, image }) => {
  return (
    <StyledProductItem background={color}>
      <h2>{name}</h2>
      <p>£{price}</p>
      <img src={image} alt="product image of shoe" />
    </StyledProductItem>
  )
}

const StyledProductItem = styled(motion.div).attrs(() => ({
  initial: {},
  animate: {},
  exit: {},
  transition: {},
}))`
  position: relative;
  background: ${props => props.background};
  border-radius: 16px;
  width: 230px;
  margin-right: 30px;
  height: 250px;
  padding: 24px;
  font-family: sans-serif;

  :last-child {
    margin-right: 0;
  }

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 23px;
    letter-spacing: -1px;
    color: #ffffff;
  }

  p {
    font-family: Avalon;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: 1px;
    color: #ffffff;
    opacity: 0.7;
    margin-top: 10px;
  }

  img {
    position: absolute;
    right: -55px;
    top: 50%;
    transform: translate(-0%, -40%) rotate(30deg);
    width: 280px;
    transition: all 0.3s ease-out;
  }
`

export default ProductItem
