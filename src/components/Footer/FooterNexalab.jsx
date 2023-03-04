import React from 'react'
import { Layout, Typography,Input,Button,Divider } from 'antd';
import "./FooterNexalab.css"
import NexaLabLogo from "../../assets/NexaLabLogo.svg"
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
const { Text } = Typography;
const { Title } = Typography;
const { Footer } = Layout;

function FooterNexalab() {
  return (
      <Footer className='footer'>
        <Layout className='main-footer'>
            <Layout className='main-footer-left'>
              <Text className='text'>About Nexalab</Text>
              <div className='footer-img-container'><img id='main-footer-left-img-container' src={NexaLabLogo} alt="" /></div>
              <p>
                NexaLab is a business that creates, develops, and sells software products or services. We
                specialize in developing software applications, systems, and platforms for a wide variety of
                purposes, including business, entertainment, education, healthcare, and more.
              </p>
            </Layout>
            <Layout className='main-footer-mid'>
              <Text className='text'>More Information</Text>
              <Layout className='footer-mid-link-container'>
                <Link className='footer-mid-link' to='/'>Home</Link>        
                <Link className='footer-mid-link' to='/about'>About Us</Link>      
                <Link className='footer-mid-link' to='/services'>Services</Link>     
                <Link className='footer-mid-link' to='/blogs'>Blogs</Link>  
                <Link className='footer-mid-link' to='/contacts'>Contact</Link>     
              </Layout>
            </Layout>
            <Layout className='main-footer-right'>
              <Text className='text' id='followus'>Follow Us</Text>
              <Layout className='footer-right-icon-container'>
                <div className='footer-right-icon'><SocialIcon url='https://www.facebook.com/' target="_blank" /></div>
                <div className='footer-right-icon'><SocialIcon url='https://twitter.com/' target="_blank" /></div>
                <div className='footer-right-icon'><SocialIcon url='https://linkedin.com/' target="_blank" /></div>
              </Layout>
              <Text className='text' id='contactus'>Contact Us!</Text>
              <Layout className='mail-button-container'>
                <Input className='right-footer-input' size="large" shape='round' placeholder='mail@example.com'/>
                <Button className='right-footer-btn' type="primary" size='large' shape="round">SEND</Button>
              </Layout>
          </Layout>
        </Layout>
          <Layout className='sec-footer'>
            <hr className='divider'/>
            <Text style={{marginTop: "15px"}}>© 2022. All rights reserved.</Text>
          </Layout>
      </Footer>
  )
}

export default FooterNexalab