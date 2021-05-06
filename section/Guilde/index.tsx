import styled from 'styled-components'
import Panel from '../../components/Panel/Index'
import Button from '../../components/Button/Button'
import Constants from '../../constants'
export default function SectionGuild() {
  return (
    <Panel title='คู่มือการเล่น เฉพาะ' subTitle='JOKER345TH & GUILDE'>
      <WrapperContent>
        <ContentDownload>
          <WrapTitle>
            <Header>ดาวน์โหลดผ่านมือถือ</Header>
            <SubHeader>MOBILE APP DOWNLOAD</SubHeader>
          </WrapTitle>
          <WrapperButtonTitle>
            <Button width='251px'>ANDROID</Button>
            <Button width='251px'>WEBSITE</Button>
          </WrapperButtonTitle>
        </ContentDownload>
        <CustomWrapperButton>
          <Row>
            <Button width='100%'>คู่มือ เกมส์ทั้งหมด</Button>
            <Button width='100%'>คู่มือ BingoGame</Button>
          </Row>
          <Row>
            <Button width='100%'>คู่มือ FunkyGame</Button>
            <Button width='100%'>คู่มือ เกมยิงปลา</Button>
          </Row>
          <Row>
            <Button width='100%'>คู่มือ สล็อตแมชชีน</Button>
            <Button width='100%'>คู่มือ ถอนเงินลูกค้า</Button>
          </Row>
          <Row>
            <Button width='100%'>คู่มือ ฝากเงินเข้าเล่น</Button>
            <Button width='100%'>คู่มือเข้าเล่นเกมส์</Button>
          </Row>
          <Row>
            <Button width='100%'>คู่มือ เข้าสู่ระบบเว็บ</Button>
            <Button width='100%'>คู่มือ สมัครสมาชิก</Button>
          </Row>
        </CustomWrapperButton>
      </WrapperContent>
    </Panel>
  )
}

const WrapperContent = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
    flex-direction: column;
  }
`

const ContentDownload = styled.div`
  flex: 1;
  height: 231px;
  padding: 40px 50px 0 50px;
  /* margin-bottom: 8px; */
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  background-image: url(/static/images/guilde/guilde_01.jpg);
  @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
    background-size: 100% 100%;
  }
`

const WrapTitle = styled.div`
  position: relative;
  margin-bottom: 8px;
`

const Header = styled.h1`
  color: white;
  margin: 0;
  padding: 0;
`

const SubHeader = styled.h2`
  color: white;
  margin: 0;
  padding: 0;
  font-size: 12px;
`

const WrapperButtonTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  button {
    margin-bottom: 8px;
  }
`

const Row = styled.div`
  display: flex;
  button:first-child {
    margin-right: 24px;
  }
`
const CustomWrapperButton = styled(WrapperButtonTitle)`
  flex: 1;
  padding: 8px;
  @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
    display: none;
  }
`
