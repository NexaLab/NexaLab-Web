import React , { useEffect } from 'react';
import "./Home.css";
import OurService from "../components/Our Service/OurService";
import OurTeam from "../components/Our Team/OurTeam";
import ConnectUs from "../components/ConnectUs/ConnectUs";
import Testimonials from "../components/Testimonials/Testimonials";
import FooterNexalab from '../components/Footer/FooterNexalab';
import Hero from "../components/Hero/Hero";
import { ServicesList } from '../Data/ServicesData';



function Home() {
  





  useEffect( () => {


    document.title = "NexaLab | Home"
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });


  });




  return (

    <>

     
        <Hero/>
        <OurService ServicesList={ServicesList}/>
        <OurTeam/>
        <ConnectUs/>
        <Testimonials/>
        <FooterNexalab/>

        
    </>
  )
}

export default Home