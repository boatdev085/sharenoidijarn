import styled from 'styled-components'
const ArrowRight = () => {
  return <Container />
}

export default ArrowRight

const Container = styled.div`
  display: inline-block;
  color: #fff;
  width: 10px;
  height: 7px;
  top: 4px;
  position: relative;
  margin-right: 8px;
  &:before,
  &:after {
    content: '';
    background: #fff;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    display: block;
    height: 2px;
    position: absolute;
    right: 0;
    width: 8px;
  }
  &:before {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  &:after {
    bottom: 0.66em;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
