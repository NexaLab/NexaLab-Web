import { Layout, Row, Col, Card } from 'antd'
import React from 'react'
import './OurService.css'
import Logo from '../../assests/images/N-01 1.png'
import Border from '../../assests/images/Rectangle 5 (1).png'
import { ServicesList } from '../../Data/ServicesData';
import { useEffect, useState } from 'react';



const { Content } = Layout
const { Meta } = Card

function OurService() {


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
      <Content>
        <img className='logo' src={Logo} alt='logo'></img>
        <Row>
          <Col span={24} className="col">
            <div className='service-heading'>
              <span className='span'>WHAT WE DO
                <h2 className='h2'> Our Services</h2>
              </span>
              <img className='border-img' src={Border} alt='border'></img>
            </div>
          </Col>
        </Row>
        <Row>

          {ServicesList.map((services, index) => (

            <Col span={ deviceWidth > 1199 ? 6 : 24} className='card-col'>

              <Card
                className='card'
                key={index}
                cover={<img alt="services" className='card-img' src={services.image} />} >
                <h2 className='card-h2'>  {services.name} <Meta /></h2>
              </Card>

            </Col>
          ))}

        </Row>
      </Content>
    </Layout>

  )
}

export default OurService
