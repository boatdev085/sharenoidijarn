import styled from 'styled-components'
import ImageShine from '../../components/Image/ImageShine'
import Panel from '../../components/Panel/Index'
import Constants from '../../constants'
import Gallery from '../../components/Image/ImageGallery'

const images = [
  {
    original: '/static/images/credit/01.png',
    thumbnail: '/static/images/credit/01.png',
    fullscreen: false,
  },
  {
    original: '/static/images/credit/02.png',
    thumbnail: '/static/images/credit/02.png',
    fullscreen: false,
  },
  {
    original: '/static/images/credit/03.png',
    thumbnail: '/static/images/credit/03.png',
    fullscreen: false,
  },
  {
    original: '/static/images/credit/04.png',
    thumbnail: '/static/images/credit/04.png',
    fullscreen: false,
  },
]

export default function SectionCredit() {
  return (
    <Panel title='ความหน้าเชื่อถือ' subTitle='JOKER345TH & CREDIT'>
      <WrapShowGallery>
        <Gallery images={images} showBullets={false} closeNavBtn={true} />
      </WrapShowGallery>

      <WrapShowCard>
        <Card>
          <ImageShine src='/static/images/credit/01.png' alt='01' />
        </Card>
        <Card>
          <ImageShine src='/static/images/credit/02.png' alt='02' />
        </Card>
        <Card>
          <ImageShine src='/static/images/credit/03.png' alt='03' />
        </Card>
        <Card>
          <ImageShine src='/static/images/credit/04.png' alt='04' />
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

const WrapShowGallery = styled.div`
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
  padding: 8px;
  @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
    display: none;
  }
  ${Card}:last-child {
    margin-right: 0;
  }
`
