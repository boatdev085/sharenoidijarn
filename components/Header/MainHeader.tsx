import styled from 'styled-components'
import Link from 'next/link'
import { LayoutWrapper } from '../Layout'
import Marquee from 'react-fast-marquee'
import Constants from '../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUserPlus,
  faDownload,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
export default function MainHeader() {
  return (
    <>
      <Container>
        <CustomLayoutWrapper>
          <WrapLogo>
            <img src='/static/images/logo/logo_menu.png' alt='logo' />
          </WrapLogo>
          <WrapMenu>
            <Link href='/'>
              <Menu>หน้าแรก</Menu>
            </Link>
            <Menu href='https://member.joker345th.com/register'>
              สมัครสมาชิก
            </Menu>
            <Menu href='https://joker123.net'>ดาวน์โหลด</Menu>
            <Menu>โปรโมชั่น</Menu>
            <Menu href='https://member.joker345th.com/login'>เข้าสู่ระบบ</Menu>
            <Menu href='https://member.joker345th.com/contact'>ติดต่อเรา</Menu>
          </WrapMenu>
        </CustomLayoutWrapper>
        <CustomLayoutWrapMaQueen>
          <Marquee gradient={false} speed={100}>
            สล็อตออนไลน์อันดับ 1 ที่เด่นเรื่องการดูแลลูกค้าตลอด 24 ชั่วโมง
            พร้อมระบบอัตโนมัติที่เสถียรที่สุดย
          </Marquee>
        </CustomLayoutWrapMaQueen>
      </Container>
      <MenuMobile>
        <a href='/'>
          <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
          <span>หน้าแรก</span>
        </a>
        <a href='https://member.joker345th.com/register'>
          <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
          <span>สมัคร</span>
        </a>
        <a href='https://member.joker345th.com/login'>
          <img src='/static/images/logo_login.gif' alt='login' />
          <span>เข้าสู่ระบบ</span>
        </a>
        <a href='https://joker123.net'>
          <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
          <span>โหลดเกมส์</span>
        </a>
        <a href='https://member.joker345th.com/contact'>
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          <span>ติดต่อ</span>
        </a>
      </MenuMobile>
    </>
  )
}

const MenuMobile = styled.div`
  display: none;
  @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 20;
    background: linear-gradient(to top, rgb(66 11 13) 5%, rgb(110 0 0) 100%);
    padding: 0.7rem 0;
    a {
      position: relative;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      text-align: center;
      color: #fff;
      font-size: 4vw;
      font-weight: bold;
      text-decoration: none;
    }
    span {
      margin-top: 4px;
    }
    img {
      position: absolute;
      top: -70px;
    }
  }
`

const Container = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.bgHeader};
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
    padding: 0 1rem;
  }
`

const CustomLayoutWrapper = styled(LayoutWrapper)`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
    padding: 0.5rem 0;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
  }
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
  @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
    display: none;
  }
`

const Menu = styled.a`
  cursor: pointer;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 16px;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: #ab0406;
  }
`

const CustomLayoutWrapMaQueen = styled(LayoutWrapper)`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  border-radius: 6px;
  padding: 8px;
  border: 1px solid #820101;
  @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
    width: 100%;
    box-sizing: border-box;
  }
`
