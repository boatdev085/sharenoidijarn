import styled from 'styled-components'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
    height: '500px',
    width: '100%',
    fullscreen: false,
  },
]
export default function Gallery() {
  return (
    <Container>
      <ImageGallery
        items={images}
        autoPlay
        lazyLoad
        showPlayButton={false}
        showThumbnails={false}
        showFullscreenButton={false}
        showBullets={true}
      />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
  .image-gallery-image {
    height: 500px;
    width: 100%;
    object-fit: cover;
  }
`
