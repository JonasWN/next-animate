import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Options = () => {
  return (
    <StyledOptions>
      <h3>243 Options</h3>
      <ul>
        <li>
          <img src="/images/medium/toppng.png" alt="shoe image product" />
          <div>
            <h4>Undercover React Presto</h4>
            <p>£12,797</p>
          </div>
        </li>
        <li>
          <img src="/images/medium/toppng.png" alt="shoe image product" />
          <div>
            <h4>Air Zoom Pegasus 37</h4>
            <p>£9,995</p>
          </div>
        </li>
      </ul>
    </StyledOptions>
  )
}

const StyledOptions = styled(motion.section).attrs(() => ({
  initial: {},
  animate: {},
  exit: {},
  transition: {},
}))`
  h3 {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    opacity: 0.7;
    margin: 30px 0;
  }

  li {
    display: flex;
    height: 50px;
    margin-bottom: 30px;

    img {
      width: 110px;
      height: 50px;
    }

    div {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }

    h4 {
      font-size: 16px;
      line-height: 18px;
      letter-spacing: -0.5px;
    }

    p {
      font-size: 14px;
      line-height: 14px;
      letter-spacing: 0.5px;

      opacity: 0.5;
    }
  }
`

export default Options
