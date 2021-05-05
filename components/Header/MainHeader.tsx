import styled from 'styled-components'
import { LayoutWrapper } from '../Layout'
import Marquee from 'react-fast-marquee'

export default function MainHeader() {
  return (
    <Container>
      <CustomLayoutWrapper>
        <WrapLogo>
          <img src='/static/images/logo/logo_menu.png' alt='logo' />
        </WrapLogo>
        <WrapMenu>
          <Menu>หน้าแรก</Menu>
          <Menu>สมัครสมาชิก</Menu>
          <Menu>ดาวน์โหลด</Menu>
          <Menu>โปรโมชั่น</Menu>
          <Menu>เข้าสู่ระบบ</Menu>
          <Menu>ติดต่อเรา</Menu>
        </WrapMenu>
      </CustomLayoutWrapper>
      <CustomLayoutWrapMaQueen>
        <Marquee gradient={false} speed={100}>
          สล็อตออนไลน์อันดับ 1 ที่เด่นเรื่องการดูแลลูกค้าตลอด 24 ชั่วโมง
          พร้อมระบบอัตโนมัติที่เสถียรที่สุดย
        </Marquee>
      </CustomLayoutWrapMaQueen>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.bgHeader};
`

const CustomLayoutWrapper = styled(LayoutWrapper)`
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
`

const WrapLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  img {
    width: 200px;
    height: 40px;
  }
`

const WrapMenu = styled.div`
  position: relative;
  padding: 16px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Menu = styled.a`
  cursor: pointer;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 16px;
  font-size: 24px;
`

const CustomLayoutWrapMaQueen = styled(LayoutWrapper)`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  border-radius: 6px;
  padding: 8px;
  border: 1px solid red;
`
