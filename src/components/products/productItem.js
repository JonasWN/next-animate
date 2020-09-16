import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import NextLink from 'next/link'

const ProductItem = ({ name, price, color, image, sku, shown }) => {
  return (
    <NextLink href={`/product/[slug]`} as={`/product/${sku.toString()}`}>
      <StyledProductItem background={color} shown={shown}>
        <h2>{name}</h2>
        <p>£{price}</p>
        <motion.img
          src={image}
          alt="product image of shoe"
          initial={{ rotate: 30 }}
          animate={{ rotate: shown ? 0 : 30 }}
        />
      </StyledProductItem>
    </NextLink>
  )
}

const StyledProductItem = styled(motion.a).attrs(props => ({
  initial: false,
  animate: {
    rotateY: props.shown ? [-10, 10, 0] : 0,
  },
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
    top: 10%;
    transform: translate(-0%, -40%) rotate(30deg);
    width: 280px;
    transition: all 0.3s ease-out;
  }
`

export default ProductItem
