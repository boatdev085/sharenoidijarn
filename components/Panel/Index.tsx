import styled from 'styled-components'

interface ComponentPanelProps {
  children: JSX.Element | JSX.Element[]
  title: string
  subTitle: string
}
export default function ComponentPanel({
  children,
  title,
  subTitle,
}: ComponentPanelProps) {
  return (
    <Container>
      <WrapTitle>
        <Header>{title}</Header>
        <SubHeader>{subTitle}</SubHeader>
      </WrapTitle>
      <WrapContent>{children}</WrapContent>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  border-radius: 6px;
  background: linear-gradient(#650202, black);
  box-sizing: border-box;
  padding-bottom: 2px;
`

const WrapTitle = styled.div`
  position: relative;
  padding: 16px;
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

const WrapContent = styled.div`
  background: black;
  color: white;
  margin: 4px;
`
