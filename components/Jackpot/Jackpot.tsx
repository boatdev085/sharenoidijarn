import styled from 'styled-components'
import { CountUp } from 'use-count-up'
import Constants from '../../constants'

export default function ComponentJackpot() {
  return (
    <div>
      <WrapJackpot>
        <Jackpot>
          JACKPOT :
          <CountUp
            isCounting
            start={Math.floor(100000 + Math.random() * 850000)}
            end={900000}
            duration={100000000}
            shouldUseToLocaleString
            decimalPlaces={2}
            easing='linear'
          />
        </Jackpot>
      </WrapJackpot>
    </div>
  )
}

const WrapJackpot = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #260000;
  padding: 8px;
  @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
    width: 100%;
    box-sizing: border-box;
  }
`

const Jackpot = styled.div`
  position: relative;
  background-color: black;
  color: yellow;
  padding: 12px 200px;
  border-radius: 6px;
  color: #fdff9c;
  text-shadow: 0 0 8px #fff;
  border: 1px solid #820101;
  @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
    padding: 12px 50px;
  }
`
