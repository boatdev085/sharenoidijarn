import styled from 'styled-components'
import Panel from '../../components/Panel/Index'
import { CountUp } from 'use-count-up'
import Constants from '../../constants'

export default function SectionGame() {
  return (
    <Panel title='เกมส์ค่าย JOKER345TH' subTitle='MFGAME88 & BLOG'>
      <WrapShowCard>
        {Array.apply(null, { length: 24 }).map((_, idx) => (
          <Card key={`game_${idx + 1}`}>
            <img
              src={`/static/images/game/game${idx + 1}-2.png`}
              alt={`game_${idx + 1}`}
            />
            <BoxSlideCoin className='slide-coin' />
            <BoxShowCountNumber>
              <CountUp
                isCounting
                start={Math.floor(1000 + Math.random() * 9500)}
                end={10000}
                duration={15000}
                shouldUseToLocaleString
              />
            </BoxShowCountNumber>
          </Card>
        ))}
      </WrapShowCard>
    </Panel>
  )
}

const BoxSlideCoin = styled.div`
  position: absolute;
  width: 34px;
  height: 34px;
  left: 0;
  bottom: 4px;
  z-index: 5;
  background: url(/static/images/coin/coin.png);
  animation: spin 1s 0s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate3d(0, 1, 0, 0);
    }

    100% {
      transform: rotate3d(0, 1, 0, 360deg);
    }
  }
`
const BoxShowCountNumber = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background: #000;
  background: #2c2c2c;
  background: -moz-linear-gradient(
    180deg,
    rgba(44, 44, 44, 1) 0%,
    rgba(8, 7, 8, 1) 74%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(44, 44, 44, 1) 0%,
    rgba(8, 7, 8, 1) 74%
  );
  background: linear-gradient(
    180deg,
    rgba(44, 44, 44, 1) 0%,
    rgba(8, 7, 8, 1) 74%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2c2c2c",endColorstr="#080708",GradientType=1);
  border: solid 1px #906d37;
  height: 40px;
`
const Card = styled.div`
  position: relative;
  display: inline-block;
  width: calc(100% / 5.9);
  flex: 1;
  height: 200px;
  margin: 8px 16px;
  @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
    width: calc(100% / 2.6);
  }
  img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
      object-fit: contain;
    }
  }
`

const WrapShowCard = styled.div`
  position: relative;
  margin-bottom: 16px;
  padding: 16px;
`
