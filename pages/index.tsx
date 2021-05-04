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
          <SectionPromotion />
          <SectionGuild />
          <SectionAbout />
          <SectionCredit />
          <SectionBlog />
          <SectionGame />
        </CustomLayoutContent>
      </BgMain>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  height: 100%;
`

const BgMain = styled.div`
  background: skyblue;
`

const CustomLayoutContent = styled(LayoutWrapper)`
  background: black;
  padding: 8px 16px;
  box-sizing: border-box;
`
