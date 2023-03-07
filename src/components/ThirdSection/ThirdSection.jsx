import React, { useEffect, useState } from 'react'
import { Col, Layout, Row } from 'antd'
import {data} from '../../ProjectData/ProjectData'
import './ThirdSection.css'

const {Content} = Layout;

function ThirdSection() {
  const [ deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  const calculateDeviceWidth = () => {
    setDeviceWidth(window.innerWidth);
  }


  useEffect( () => {

    window.addEventListener('resize', calculateDeviceWidth);

    return () => {
      window.removeEventListener('resize', calculateDeviceWidth);
    };

  },[]);

  return (
      <Layout className='main'>
            <Content >
            <Row>
              {data.map((col,index) => (
                <Col className='col' span={deviceWidth > 1199 ? 6 : 24}>
                  <img key={index} src={col.image} alt ='1' style={{width: '25%'}}></img>
                  <h3>{col.heading}</h3>
                  <p className='para'>{col.paragraph}</p>
                </Col>
              ))}
            </Row>
          </Content>
        </Layout>
  )
}

export default ThirdSection