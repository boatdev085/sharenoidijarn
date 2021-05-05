import styled from 'styled-components'
import Panel from '../../components/Panel/Index'
import Button from '../../components/Button/Button'

export default function SectionAbout() {
  return (
    <Panel title='เกี่ยวกับเรา' subTitle='MFGAME88 & ABOUT'>
      <WrapShowCard>
        <Card>
          <img src='/static/images/about/01.jpg' alt='01' />
        </Card>
        <Card>
          <img src='/static/images/about/02.jpg' alt='02' />
        </Card>
        <Card>
          <img src='/static/images/about/02.jpg' alt='03' />
        </Card>
        <Card>
          <img src='/static/images/about/04.jpg' alt='04' />
        </Card>
      </WrapShowCard>

      <WrapContent>
        <div className='img-content'>
          <img src='/static/images/about/content_1.jpg' alt='content' />
        </div>
        <div className='wording-content'>
          <div className='top'>
            <h1>MFGAME777 & MFGAME88</h1>
          </div>
          <hr />
          <div className='center'>
            MFGAME777 เกมสล็อตออนไลน์ที่ดีที่สุดจากทางค่าย MFGAME88
            เกมสล็อตมากกว่า 100 เกม ระบบฝากถอนอัตโนมัติ เริ่มต้นที่ 1
            บาทเท่านั้น นอกจากนี้ โปรโมชั่นอีกมากมายให้เลือก
            นอกจากนี้ยังมีเกมอื่นๆให้เลือกอีกนอกจากสล็อตแล้ว
            ไม่ว่าจะเป็นเกมยิงปลา บาคาร่า เสือมังกร รูเล็ท และยังมี
            เกมคาสิโนให้เลือกเล่นอีก MFGAME777
            เป็นเว็บสล็อตออนไลน์ที่กำลังได้รับความนิยม
            ทีมงานคอลเซ็นเตอร์คอยให้บริการตลอด 24 ชั่วโมงเลย
          </div>
          <div className='bottom'>
            <Button width='100%'>สมัครตอนนี้</Button>
            <Button width='100%'>โปรโมชั่น</Button>
          </div>
        </div>
      </WrapContent>
    </Panel>
  )
}

const Card = styled.div`
  flex: 1;
  height: 180px;
  margin-right: 8px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

const WrapShowCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  padding: 8px;
  ${Card}:last-child {
    margin-right: 0;
  }
`

const WrapContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px;
  .img-content {
    img {
      width: 500px;
      height: 300px;
    }
  }
  .wording-content {
    margin-left: 32px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      text-align: center;
    }
    hr {
      width: 70%;
    }
    .bottom {
      margin-top: 24px;
      display: flex;
      justify-content: center;
      button {
        text-align: center;
        &:first-child {
          margin-right: 32px;
        }
      }
    }
  }
`
