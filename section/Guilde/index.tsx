import styled from 'styled-components'
import Panel from '../../components/Panel/Index'
import Button from '../../components/Button/Button'
export default function SectionGuild() {
  return (
    <Panel title='คู่มือการเล่น เฉพาะ' subTitle='MFGAME88 & GUILDE'>
      <ContentDownload>
        <WrapTitle>
          <Header>ดาวน์โหลดผ่านมือถือ</Header>
          <SubHeader>MOBILE APP DOWNLOAD</SubHeader>
        </WrapTitle>
        <WrapperButtonTitle>
          <Button>ANDROID</Button>
          <Button>WEBSITE</Button>
        </WrapperButtonTitle>
      </ContentDownload>
      <CustomWrapperButton>
        <Button width='100%'>คู่มือ เกมส์ทั้งหมด</Button>
        <Button width='100%'>คู่มือ BingoGame</Button>
        <Button width='100%'>คู่มือ FunkyGame</Button>
        <Button width='100%'>คู่มือ เกมยิงปลา</Button>
        <Button width='100%'>คู่มือ สล็อตแมชชีน</Button>
        <Button width='100%'>คู่มือ ถอนเงินลูกค้า</Button>
        <Button width='100%'>คู่มือ ฝากเงินเข้าเล่น</Button>
        <Button width='100%'>คู่มือเข้าเล่นเกมส์</Button>
        <Button width='100%'>คู่มือ เข้าสู่ระบบเว็บ</Button>
        <Button width='100%'>คู่มือ สมัครสมาชิก</Button>
      </CustomWrapperButton>
    </Panel>
  )
}

const ContentDownload = styled.div`
  height: 231px;
  padding: 40px 50px 0 50px;
  background: gray;
  margin-bottom: 8px;
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
  display: flex;
  flex-direction: column;
  button {
    margin-bottom: 8px;
  }
`

const CustomWrapperButton = styled(WrapperButtonTitle)`
  padding: 8px;
`

const Card = styled.div`
  flex: 1;
  height: 172px;
  background: skyblue;
  margin-right: 8px;
`

const WrapShowCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  ${Card}:last-child {
    margin-right: 0;
  }
`
