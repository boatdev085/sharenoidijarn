import styled from 'styled-components'
import Panel from '../../components/Panel/Index'

const gameItems = []
export default function SectionGame() {
  return (
    <Panel title='เกมส์ค่าย MFGAME88' subTitle='MFGAME88 & BLOG'>
      <WrapShowCard>
        {Array.apply(null, { length: 24 }).map((_, idx) => (
          <Card key={`game_${idx + 1}`}>
            <img
              src={`/static/images/game/game${idx + 1}-2.png`}
              alt={`game_${idx + 1}`}
            />
          </Card>
        ))}
      </WrapShowCard>
    </Panel>
  )
}

const Card = styled.div`
  display: inline-block;
  width: calc(100% / 5.9);
  flex: 1;
  height: 200px;
  margin: 8px 16px;
  img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const WrapShowCard = styled.div`
  position: relative;
  margin-bottom: 16px;
  padding: 16px;
`
