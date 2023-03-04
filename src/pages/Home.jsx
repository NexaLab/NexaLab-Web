import React from 'react';
import "./Home.css";
import Navbar from "../components/Navbar/Navbar";
import OurService from "../components/Our Service/OurService";
import OurTeam from "../components/Our Team/OurTeam";
import ConnectUs from "../components/ConnectUs/ConnectUs";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/FooterNexalab"
import FooterNexalab from '../components/Footer/FooterNexalab';




function Home() {
  
  return (

    <>

        <Navbar/>
        <OurService/>
        <OurTeam/>
        <ConnectUs/>
        <Testimonials/>

        
    </>
  )
}

export default Home