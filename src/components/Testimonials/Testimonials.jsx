import React from 'react'
import {Layout, Row, Col , Carousel} from 'antd'
import './Testimonials.css'
import Border from '../../assests/images/Rectangle 5 (1).png'
import Rectangle from '../../assests/images/Group 7.png'
import Apostrophe from '../../assests/images/“.png'
import { testinomials } from '../../ProjectData/ProjectData'
import Logo from '../../assests/images/N Logo.png'
const {Content} = Layout


function Testimonials() {
  return (
    <Layout className='main'>
        <Content >      
      <Row className='row' > 
      <Col span={8}>
            <img src={Rectangle} className = 'rectangle-img' alt ='rectangle'></img>
        </Col>
                <Col span={8} className='col' >
                <div className='testimonial-heading'>
                <span className='span'>Our Client Love Us
                <h2 className='h2'>Client Testimonials</h2>
                </span>                
                <img className='border-img' src={Border} alt='border'></img>
                </div>
 
                <Carousel autoplay autoplaySpeed={4000} className='carousel'  >
                {testinomials.map((testinomial,index)=> (
                  <div >
            <img key={index} className='carousel-img' src={Apostrophe} alt="Aposhtrophe"></img>
                  <p className='carousel-para' >{testinomial.paragraph}</p>
                   <h3 className='carousel-h3'>{testinomial.name} - {testinomial.Country}</h3>
                </div>
  
  ))} 
  </Carousel>
                </Col> 
                <Col span={8}>
            <img src={Logo} className ='logo' alt ='logo'></img>
        </Col>
      </Row>
      </Content>
      </Layout>

  )
}

export default Testimonials
