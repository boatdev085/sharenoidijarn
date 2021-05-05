import styled from 'styled-components'
import Panel from '../../components/Panel/Index'

export default function SectionPromotion() {
  return (
    <Panel title='โปรโมชั่น' subTitle='MFGAME88 & PROMOTION'>
      <WrapShowCard>
        <Card>
          <img src='/static/images/promotion/01.jpg' alt='01' />
        </Card>
        <Card>
          <img src='/static/images/promotion/02.jpg' alt='02' />
        </Card>
        <Card>
          <img src='/static/images/promotion/03.jpg' alt='03' />
        </Card>
        <Card>
          <img src='/static/images/promotion/04.jpg' alt='04' />
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

const WrapShowCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  padding: 4px;

  ${Card}:last-child {
    margin-right: 0;
  }
`
