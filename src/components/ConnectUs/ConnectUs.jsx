import React from 'react'
import { Row, Col, Layout } from 'antd'

const { Content } = Layout;
function ConnectUs() {

  return (
    <Layout>
               <Content >
        <Row> 
                
                <Col span={24} style ={{backgroundColor: '#0D1625'}}>
                <div style={{textAlign: 'center', color: '#61C2D0', borderBottom: '2px solid #61C2D0 '}}>
                     <h2>CONNECT WITH US</h2>
                </div>
                </Col>
                 
      </Row>
      </Content>
                </Layout>
  )
}

export default ConnectUs
