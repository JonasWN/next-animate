import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import ProductItem from './productItem'
import Flickity from 'react-flickity-component'

const flickityOptions = {
  pageDots: false,
  prevNextButtons: false,
  selectedAttraction: 0.06,
  friction: 0.35,
  dragThreshold: 1,
}

const Products = () => {
  return (
    <StyledProducts>
      <Flickity options={flickityOptions}>
        {data.map(shoe => (
          <ProductItem key={shoe.name} {...shoe} />
        ))}
      </Flickity>
    </StyledProducts>
  )
}

const StyledProducts = styled(motion.main).attrs(() => ({
  initial: {},
  animate: {},
  exit: {},
  transition: {},
}))`
  margin-top: 20px;

  .flickity-enabled:focus {
    outline: none;
  }

  .flickity-viewport {
    overflow: hidden;
  }
  .is-selected {
    img {
      transform: translate(-0%, -40%) rotate(0deg);
    }
  }
`
const data = [
  {
    name: 'Alpha Savage',
    price: '248.99',
    color: '#E24C4D',
    image: '/images/large/red.png',
  },
  {
    name: 'Air Max 97',
    price: '115.99',
    color: '#FDBA62',
    image: '/images/large/yellow.png',
  },
  {
    name: 'KD13 EP',
    price: '98.99',
    color: '#4B81F4',
    image: '/images/large/white.png',
  },
  {
    name: 'Air Presto By You',
    price: '109.99',
    color: '#599C99',
    image: '/images/large/green.png',
  },
]

export default Products
