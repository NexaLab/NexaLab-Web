import React from 'react';
import "./Home.css";
import Navbar from "../components/Navbar/Navbar";
import OurService from "../components/Our Service/OurService";
import OurTeam from "../components/Our Team/OurTeam";
import ConnectUs from "../components/ConnectUs/ConnectUs";
import Testimonials from "../components/Testimonials/Testimonials";
import FooterNexalab from '../components/Footer/FooterNexalab';
import Hero from "../components/Hero/Hero"
import OurServiceSecondSection from '../components/OurServiceSecondSection/OurServiceSecondSection';




function Home() {
  
  return (

    <>

        <Navbar/>
        <Hero/>
        <OurService/>
        <OurTeam/>
        <ConnectUs/>
        <OurServiceSecondSection />
        <Testimonials/>
        <FooterNexalab/>

        
    </>
  )
}

export default Home