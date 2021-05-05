import styled from 'styled-components'
import Panel from '../../components/Panel/Index'

export default function SectionBlog() {
  return (
    <Panel title='บทความ' subTitle='MFGAME88 & BLOG'>
      <WrapShowCard>
        <Row>
          <Card>
            <img src='/static/images/blog/01.jpg' alt='blog' />
            <div className='content'>
              <div className='title'>หมวดหมู่: บทความ</div>
              <div className='name'>
                เกมมือถือออนไลน์ 6 เคล็ดลับที่เป็นประโยชน์สำหรับการเล่นสล็อต
              </div>
            </div>
          </Card>
          <Card>
            <img src='/static/images/blog/01.jpg' alt='blog' />
            <div className='content'>
              <div className='title'>หมวดหมู่: บทความ</div>
              <div className='name'>การเลือกเล่นเกมสล็อต</div>
            </div>
          </Card>
        </Row>
        <Row>
          <Card>
            <img src='/static/images/blog/01.jpg' alt='blog' />
            <div className='content'>
              <div className='title'>หมวดหมู่: บทความ</div>
              <div className='name'>สล็อตสำหรับมือใหม่</div>
            </div>
          </Card>
          <Card>
            <img src='/static/images/blog/01.jpg' alt='blog' />
            <div className='content'>
              <div className='title'>หมวดหมู่: บทความ</div>
              <div className='name'>เทคนิคการเล่นสล็อต</div>
            </div>
          </Card>
        </Row>
      </WrapShowCard>
    </Panel>
  )
}

const Row = styled.div`
  display: flex;
  margin: 16px 12px;
`

const Card = styled.div`
  flex: 1;
  margin-right: 8px;
  display: flex;
  align-items: center;
  padding-right: 40px;
  img {
    width: 150px;
    height: 100px;
    margin-right: 16px;
  }
  .content {
    .title {
      font-size: 1rem;
      color: #adb5bd;
    }
    .name {
      font-size: 18px;
    }
  }
`

const WrapShowCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  ${Card}:last-child {
    margin-right: 0;
  }
`
