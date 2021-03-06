import styled from 'styled-components'

const sizes = {
  sm: '420px',
  md: '768px',
  lg: '1280px',
  xl: '1920px',
}

export const device = {
  mobile: `(max-width: ${sizes.sm})`,
  tablet: `(max-width: ${sizes.md})`,
  desktop: `(max-width: ${sizes.lg})`,
  desktopL: `(max-width: ${sizes.xl})`,
}

export const Container = styled.div`
  min-height: 100vh;
  padding: 30px 20px;
  max-width: 980px;
  margin: 0 auto;
`
