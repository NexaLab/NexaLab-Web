import React from 'react'
import { Layout, Row , Col } from 'antd'
import './OurServiceSecondSection.css'
import Building from '../../assests/images/Services Page Picture.jpg'
const { Content } = Layout

function OurServiceSecondSection() {

  return (

    
    <Layout className='main'>
      <Content >
        <Row className='row'>
          <Col span ={12} className ='col' >
        {/* <div className='div'> */}
          <h1 className='h1'>BEST SOFTWARE HOUSE IN PAKISTAN OFFERING TOP-NOTCH SERVICES</h1>
          <span className='span'></span>
          <p className='sub-heading'>We Are Not Just Serving Our Clients. We Are Serving The Nation. Best Software House In Pakistan For A Reason.</p>
                <p className='para'>NexaLab is a business that creates, develops, and sells software products or services. We
      specialize in developing software applications, systems, and platforms for a wide variety of
      purposes, including business, entertainment, 
      education, healthcare, and more.
      Welcome to our software company! We are a
        team of dedicated and talented individuals 
        who are passionate about creating innovative software 
        solutions to meet the evolving needs of our clients.
                </p>
        {/* </div> */}
        </Col>
        <Col span ={12} className ='col' >
        <img src={Building} alt='building' className='img' ></img>
        </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default OurServiceSecondSection
