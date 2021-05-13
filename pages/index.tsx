import styled from 'styled-components'
import { LayoutWrapper } from '../components/Layout'

export default function Home() {
  return <Container>boat</Container>
}

export async function getServerSideProps(context) {
  const CoinGecko = require('coingecko-api')
  const CoinGeckoClient = new CoinGecko()
  let data = await CoinGeckoClient.ping()
  console.log('data', data)
  return {
    props: {}, // will be passed to the page component as props
  }
}

const Container = styled.div`
  position: relative;
  height: 100%;
`
