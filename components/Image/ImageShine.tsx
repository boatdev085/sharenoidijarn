import styled from 'styled-components'

interface ImageShineProps {
  src: string
  alt: string
}
const ImageShine = ({ src, alt }: ImageShineProps) => {
  return (
    <Container>
      <img src={src} alt={alt} />
    </Container>
  )
}

export default ImageShine

const Container = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  &:after {
    content: '';
    position: absolute;
    top: -50%;
    left: -60%;
    width: 20%;
    height: 200%;
    opacity: 0;
    transform: rotate(30deg);

    background: rgba(255, 255, 255, 0.13);
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.13) 0%,
      rgba(255, 255, 255, 0.13) 77%,
      rgba(255, 255, 255, 0.5) 92%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &:hover:after {
    opacity: 1;
    left: 130%;
    transition-property: left, top, opacity;
    transition-duration: 0.7s, 0.7s, 0.15s;
    transition-timing-function: ease;
  }

  &:active:after {
    opacity: 0;
  }
`
