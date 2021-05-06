import styled from 'styled-components'
import Panel from '../../components/Panel/Index'
import ImageShine from '../../components/Image/ImageShine'
import ButtonTwo from '../../components/Button/ButtonTwo'
import Gallery from '../../components/Image/ImageGallery'

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

export default function SectionAbout() {
  return (
    <Panel title='เกี่ยวกับเรา' subTitle='JOKER345TH & ABOUT'>
      <WrapShowGallery>
        <Gallery images={images} showBullets={false} closeNavBtn={true} />
      </WrapShowGallery>
      <WrapShowCard>
        <Card>
          <ImageShine src='/static/images/about/01.jpg' alt='01' />
        </Card>
        <Card>
          <ImageShine src='/static/images/about/02.jpg' alt='02' />
        </Card>
        <Card>
          <ImageShine src='/static/images/about/02.jpg' alt='02' />
        </Card>
        <Card>
          <ImageShine src='/static/images/about/04.jpg' alt='04' />
        </Card>
      </WrapShowCard>
      <WrapContent>
        <div className='img-content'>
          <img src='/static/images/about/content_1.jpg' alt='content' />
        </div>
        <div className='wording-content'>
          <div className='top'>
            <h1>JOKER345TH</h1>
          </div>
          <hr />
          <div className='center'>
            JOKER345TH เกมสล็อตออนไลน์ที่ดีที่สุดจากทางค่าย MFGAME88
            เกมสล็อตมากกว่า 100 เกม ระบบฝากถอนอัตโนมัติ เริ่มต้นที่ 1
            บาทเท่านั้น นอกจากนี้ โปรโมชั่นอีกมากมายให้เลือก
            นอกจากนี้ยังมีเกมอื่นๆให้เลือกอีกนอกจากสล็อตแล้ว
            ไม่ว่าจะเป็นเกมยิงปลา บาคาร่า เสือมังกร รูเล็ท และยังมี
            เกมคาสิโนให้เลือกเล่นอีก JOKER345TH
            เป็นเว็บสล็อตออนไลน์ที่กำลังได้รับความนิยม
            ทีมงานคอลเซ็นเตอร์คอยให้บริการตลอด 24 ชั่วโมงเลย
          </div>
          <div className='bottom'>
            <a href='https://member.joker345th.com/register'>
              <ButtonTwo width='100%'>สมัครตอนนี้</ButtonTwo>
            </a>
            <ButtonTwo width='100%'>โปรโมชั่น</ButtonTwo>
          </div>
        </div>
      </WrapContent>
    </Panel>
  )
}

const Card = styled.div`
  flex: 1;
  height: 180px;
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

const WrapContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
    flex-direction: column;
    align-items: flex-start;
  }
  .img-content {
    img {
      width: 500px;
      height: 300px;
      box-sizing: border-box;
      border: 3px solid transparent;
      transition: all 300ms;
      @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
        width: 100%;
        height: 100%;
      }
      &:hover {
        border: 3px solid #fff;
      }
    }
  }
  .wording-content {
    margin-left: 32px;
    @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
      margin-left: 0;
    }
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      text-align: center;
      color: #edc968;
    }
    hr {
      width: 70%;
    }
    .bottom {
      margin-top: 24px;
      display: flex;
      justify-content: center;
      flex-direction: row;
      @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
        flex-direction: column;
      }
      a {
        flex: 1;
        &:first-child {
          margin-right: 32px;
        }
      }
      button {
        flex: 1;
        text-align: center;
      }
    }
  }
`
