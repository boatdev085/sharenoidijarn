import styled from 'styled-components'
import Link from 'next/link'
import { LayoutWrapper } from '../../components/Layout/index'
import Constants from '../../constants'

export default function Footer() {
  return (
    <Container>
      <CustomLayout>
        <WrapItem>
          <h1>เมนูนำทาง</h1>
          <ul>
            <li>
              <Link href='/'>
                <a>หน้าแรก</a>
              </Link>
            </li>
            <li>วิธีการเล่น</li>
            <li>บล็อก</li>
          </ul>
        </WrapItem>
        <WrapItem>
          <h1>เมนูสมาชิก</h1>
          <ul>
            <li>
              <a href='https://member.joker345th.com/register'>สมัครสมาชิก</a>
            </li>
            <li>ฝาก-ถอน</li>
            <li>
              <a href='https://joker123.net'>ดาวน์โหลดเกม</a>
            </li>
            <li>โปรโมชั่น</li>
            <li>คำถามที่พบบ่อย</li>
            <li>
              <a href='https://member.joker345th.com/login'>เข้าสู่ระบบ</a>
            </li>
          </ul>
        </WrapItem>
        <WrapItem>
          <h1>MFGAME777 & MFGAME88</h1>
          <div>
            เกมสล็อตบนมือถือออนไลน์ MFGAME777 และยังสามารถเล่นผ่านเว็บไซต์ได้
            Application ของเว็บสล็อตออนไลน์ Mfgame88 รองรับทั้งระบบ IOS และ
            Android มีเกมให้เลือกจำนวนมากไม่ว่าจะเป็น สล็อตออนไลน์
            เกมยิงปลาออนไลน์ มีเครดิตฟรีให้ลองเล่นก่อนไม่ต้องเติมเงินเข้ามา
            สล็อตออนไลน์ของ Mfgame88 มาให้เลือกเล่นมากมายกว่า 100 เกม
            ลิขสิทธิ์แท้จากผู้พัฒนาเกม
            เจ้าเดียวที่กล้าแจกรางวัลมากมายแบบที่ไม่เคยมีที่ให้แจกมาก่อน ต้อง
            Mfgame1688
          </div>
        </WrapItem>
      </CustomLayout>

      <WrapIconBank>
        <img src='/static/images/bank/scb.png' alt='scb' />
        <img src='/static/images/bank/kbank.png' alt='kbank' />
        <img src='/static/images/bank/krungsri.png' alt='krungsri' />
        <img src='/static/images/bank/true_wallet.png' alt='true_wallet' />
      </WrapIconBank>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  background: #171615;
  @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
    display: none;
  }
`

const WrapItem = styled.div`
  color: white;
  li {
    list-style-type: circle;
    a {
      color: white;
      text-decoration: none;
    }
  }
  div {
    text-shadow: 1px 0 4px #000;
    opacity: 0.5;
    font-size: 18px;
  }
`

const CustomLayout = styled(LayoutWrapper)`
  display: flex;
  justify-content: space-between;

  ${WrapItem} {
    flex: 0.5;
    &:last-child {
      flex: 1;
    }
  }
`

const WrapIconBank = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 0;

  img {
    width: 50px;
    height: 50px;
    margin-right: 16px;
    filter: grayscale(1);
    transition: all 300ms;
    &:hover {
      filter: grayscale(0);
    }
  }
`
