import React, { useEffect, useRef, useState } from 'react'
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
  const [currentIndex, setCurrentIndex] = useState(0)
  const slideRef = useRef(null)

  useEffect(() => {
    slideRef.current.flkty.on('change', () => {
      setCurrentIndex(slideRef.current.flkty.selectedIndex)
    })
  }, [slideRef.current])

  return (
    <StyledProducts>
      <Flickity
        options={flickityOptions}
        static={true}
        flickityRef={c => (slideRef.current = c)}
        ref={slideRef}
      >
        {data.map((shoe, id) => (
          <ProductItem
            key={shoe.name}
            {...shoe}
            shown={id === currentIndex ? true : false}
          />
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
    /* img {
      transform: translate(-0%, -40%) rotate(0deg);
    } */
  }
`
export const data = [
  {
    name: 'Alpha Savage',
    price: '248.99',
    color: '#E24C4D',
    image: '/images/large/red.png',
    sku: 1,
  },
  {
    name: 'Air Max 97',
    price: '115.99',
    color: '#FDBA62',
    image: '/images/large/yellow.png',
    sku: 2,
  },
  {
    name: 'KD13 EP',
    price: '98.99',
    color: '#4B81F4',
    image: '/images/large/white.png',
    sku: 3,
  },
  {
    name: 'Air Presto By You',
    price: '109.99',
    color: '#599C99',
    image: '/images/large/green.png',
    sku: 4,
  },
]

export default Products
