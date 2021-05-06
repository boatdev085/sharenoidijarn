import styled from 'styled-components'
import Constants from '../../constants'

export const WIDTH = 1200
export const LayoutWrapper = styled.div`
  width: ${WIDTH}px;
  margin: 0 auto;
  @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
    width: 100%;
  }
`
