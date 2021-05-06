import styled from 'styled-components'
import Panel from '../../components/Panel/Index'
import Constants from '../../constants'

export default function SectionBlog() {
  return (
    <Panel title='บทความ' subTitle='JOKER345TH & BLOG'>
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
  flex-direction: row;
  margin: 16px 12px;
  @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
    flex-direction: column;
  }
`

const Card = styled.div`
  flex: 1;
  margin-right: 8px;
  display: flex;
  align-items: center;
  padding-right: 40px;
  @media only screen and (max-width: ${Constants.SCREEN_SIZE.XS}px) {
    align-items: flex-start;
    padding-right: 0;
    margin-bottom: 16px;
  }
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
