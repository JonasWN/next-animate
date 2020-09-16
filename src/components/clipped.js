import React from 'react'
import styled from 'styled-components'

const Clipped = ({ color }) => {
  return <StyledClipped color={color}></StyledClipped>
}

const StyledClipped = styled.div`
  clip-path: circle(71.6% at 66% 4%);
  background: ${props => props.color};
  width: 100%;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0px;
  z-index: -1;
`
export default Clipped
