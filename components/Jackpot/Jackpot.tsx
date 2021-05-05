import styled from 'styled-components'

export default function ComponentJackpot() {
  return (
    <div>
      <WrapJackpot>
        <Jackpot>JackPOT : 390,701.30</Jackpot>
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
`

const Jackpot = styled.div`
  position: relative;
  background-color: black;
  color: yellow;
  padding: 12px 200px;
  border-radius: 6px;
  border: 1px solid blue;
`
