import styled from 'styled-components'
import { LayoutWrapper } from '../../components/Layout/index'

export default function Footer() {
  return (
    <Container>
      <CustomLayout>
        <WrapItem>
          <h1>เมนูนำทาง</h1>
          <ul>
            <li>หน้าแรก</li>
            <li>วิธีการเล่น</li>
            <li>บล็อก</li>
          </ul>
        </WrapItem>
        <WrapItem>
          <h1>เมนูสมาชิก</h1>
          <ul>
            <li>สมัครสมาชิก</li>
            <li>ฝาก-ถอน</li>
            <li>ดาวน์โหลดเกม</li>
            <li>โปรโมชั่น</li>
            <li>คำถามที่พบบ่อย</li>
            <li>เข้าสู่ระบบ</li>
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
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  background: #171615;
`

const WrapItem = styled.div`
  color: white;
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
