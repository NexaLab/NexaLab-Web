import React from 'react'
import { Row, Col, Layout, Button } from 'antd'
import Border from './../../assests/images/Rectangle 5 (1).png'
import LinkedInLogo from '../../assests/images/LinkedIn 2.png'
import FacebookLogo from '../../assests/images/Facebook F.png'
import TwitterLogo from '../../assests/images/Twitter.png'
import InstagramLogo from '../../assests/images/Instagram.png'
import './ConnectUs.css'

const { Content } = Layout;
function ConnectUs() {

  return (
    <Layout className='body'>
               <Content >
        <Row> 
                
                <Col span={24}>
                <div className='main-heading'>
                     <h2 >
                      <span>CONNECT WITH US </span></h2>
                      <img src={Border} alt='border'></img>
                </div>
                </Col>
                 
      </Row>
      <Row>
        <Col span={24} className ='column-social-icon' >
          <a href ='https://www.facebook.com' target='_blank' rel="noopener noreferrer" className='social-link-anchor'>
          <img src={FacebookLogo} alt= 'facebook'className='image' ></img>
          </a>
          <a href ='https://www.instagram.com' target='_blank' rel="noopener noreferrer" className='social-link-anchor'>
          <img src={InstagramLogo} alt='instagram'className='image' ></img>
          </a>
          
          <a href ='https://www.twitter.com' target='_blank' rel="noopener noreferrer" className='social-link-anchor'>
          <img src={TwitterLogo} alt='twitter' className='image' ></img>
          </a>
          <a href ='https://www.linkedin.com' target='_blank' rel="noopener noreferrer" className='social-link-anchor-linkedIn '>
          <img src= {LinkedInLogo} className='image' alt= 'linkedIn'></img>
          </a>
          </Col>
      </Row>
      <Row>
        <Col span={24} className='button-col' >
        <Button className='button'>CONTACT US</Button>
        </Col>
      </Row>
      </Content>
                </Layout>
  )
}

export default ConnectUs
