import styled from 'styled-components'
import { LayoutWrapper } from '../components/Layout'
import MainHeader from '../components/Header/MainHeader'
import ImageGallery from '../components/Image/ImageGallery'
import Jackpot from '../components/Jackpot/Jackpot'
import SectionPromotion from '../section/Promotion'
import SectionGuild from '../section/Guilde'
import SectionAbout from '../section/About'
import SectionCredit from '../section/Credit'
import SectionBlog from '../section/Blog'
import SectionGame from '../section/Game'
import Footer from '../section/Footer'

export default function Home() {
  return (
    <Container>
      <MainHeader />
      <BgMain>
        <LayoutWrapper>
          <ImageGallery />
        </LayoutWrapper>
        <Jackpot />
        <CustomLayoutContent>
          <CustomEasyPlay
            src='/static/images/easyPlay/easy_play_01.gif'
            alt='easy play'
          />
          <SectionPromotion />
          <SectionGuild />
          <SectionAbout />
          <SectionCredit />
          <SectionBlog />
          <SectionGame />
        </CustomLayoutContent>
      </BgMain>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  height: 100%;
`

const BgMain = styled.div`
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
  background: url(/static/images/bg/bg-100.jpg);
`

const CustomLayoutContent = styled(LayoutWrapper)`
  background: black;
  padding: 8px 16px;
  box-sizing: border-box;
`

const CustomEasyPlay = styled.img`
  margin-bottom: 8px;
  width: 100%;
`
