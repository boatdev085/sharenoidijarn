import styled from 'styled-components'
import Gallery from '../../components/Image/ImageGallery'
import ImageShine from '../../components/Image/ImageShine'
import Panel from '../../components/Panel/Index'
import Constants from '../../constants'
const images = [
  {
    original: '/static/images/promotion/01.jpg',
    thumbnail: '/static/images/promotion/01.jpg',
    fullscreen: false,
  },
  {
    original: '/static/images/promotion/02.jpg',
    thumbnail: '/static/images/promotion/02.jpg',
    fullscreen: false,
  },
  {
    original: '/static/images/promotion/03.jpg',
    thumbnail: '/static/images/promotion/03.jpg',
    fullscreen: false,
  },
  {
    original: '/static/images/promotion/04.jpg',
    thumbnail: '/static/images/promotion/04.jpg',
    fullscreen: false,
  },
]
export default function SectionPromotion() {
  return (
    <Panel title='โปรโมชั่น' subTitle='JOKER345TH & PROMOTION'>
      <WrapGallery>
        <Gallery images={images} showBullets={false} closeNavBtn={true} />
      </WrapGallery>
      <WrapShowCard>
        <Card>
          <ImageShine src='/static/images/promotion/01.jpg' alt='01' />
        </Card>
        <Card>
          <ImageShine src='/static/images/promotion/02.jpg' alt='02' />
        </Card>
        <Card>
          <ImageShine src='/static/images/promotion/03.jpg' alt='03' />
        </Card>
        <Card>
          <ImageShine src='/static/images/promotion/04.jpg' alt='04' />
        </Card>
      </WrapShowCard>
    </Panel>
  )
}

const Card = styled.div`
  flex: 1;
  height: 277px;
  margin-right: 8px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

const WrapGallery = styled.div`
  display: none;
  @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
    display: initial;
  }
`

const WrapShowCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  padding: 4px;
  @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
    display: none;
  }
  ${Card}:last-child {
    margin-right: 0;
  }
`
