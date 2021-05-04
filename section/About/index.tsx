import styled from 'styled-components'
import Panel from '../../components/Panel/Index'

export default function SectionAbout() {
  return (
    <Panel title='เกี่ยวกับเรา' subTitle='MFGAME88 & ABOUT'>
      <WrapShowCard>
        <Card>boat</Card>
        <Card>boat</Card>
        <Card>boat</Card>
        <Card>boat</Card>
      </WrapShowCard>
    </Panel>
  )
}

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
  margin-bottom: 16px;
  ${Card}:last-child {
    margin-right: 0;
  }
`
