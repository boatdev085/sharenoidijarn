import styled from 'styled-components'
import Panel from '../../components/Panel/Index'

export default function SectionGame() {
  return (
    <Panel title='เกมส์ค่าย MFGAME88' subTitle='MFGAME88 & BLOG'>
      <WrapShowCard>
        <Row>
          <Card>boat</Card>
          <Card>boat</Card>
        </Row>
        <Row>
          <Card>boat</Card>
          <Card>boat</Card>
        </Row>
      </WrapShowCard>
    </Panel>
  )
}

const Row = styled.div`
  display: flex;
  margin: 16px 12px;
`

const Card = styled.div`
  flex: 1;
  height: 280px;
  background: skyblue;
  margin-right: 8px;
`

const WrapShowCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  ${Card}:last-child {
    margin-right: 0;
  }
`
