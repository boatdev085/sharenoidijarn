import styled from 'styled-components'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import Constants from '../../constants'

interface GalleryProps {
  images: any[]
  showBullets?: boolean
  closeNavBtn?: boolean
}
export default function Gallery({
  images,
  showBullets = true,
  closeNavBtn,
}: GalleryProps) {
  let PropsOption: any = {}
  if (closeNavBtn) {
    PropsOption.renderLeftNav = () => null
    PropsOption.renderRightNav = () => null
  }
  return (
    <Container>
      <ImageGallery
        items={images}
        autoPlay
        lazyLoad
        showBullets={showBullets}
        showPlayButton={false}
        showThumbnails={false}
        showFullscreenButton={false}
        {...PropsOption}
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
    @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
      height: 345px;
      width: 100%;
      object-fit: contain;
    }
  }
`
