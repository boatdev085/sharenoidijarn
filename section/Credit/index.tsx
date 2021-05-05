import styled from 'styled-components'
import Panel from '../../components/Panel/Index'

export default function SectionCredit() {
  return (
    <Panel title='ความหน้าเชื่อถือ' subTitle='MFGAME88 & CREDIT'>
      <WrapShowCard>
        <Card>
          <img src='/static/images/credit/01.png' alt='01' />
        </Card>
        <Card>
          <img src='/static/images/credit/02.png' alt='02' />
        </Card>
        <Card>
          <img src='/static/images/credit/03.png' alt='03' />
        </Card>
        <Card>
          <img src='/static/images/credit/04.png' alt='04' />
        </Card>
      </WrapShowCard>
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

const WrapShowCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  padding: 8px;
  ${Card}:last-child {
    margin-right: 0;
  }
`
