import React , { useEffect } from 'react'
import FooterNexalab from '../components/Footer/FooterNexalab';
import OurServicesHero from "../components/OurServicesHero/OurServicesHero";
import TechWeUsed from "../components/TechWeUsed/TechWeUsed";
import Testimonials from '../components/Testimonials/Testimonials';


function OurServices() {







  useEffect( () => {


    document.title = "NexaLab | Our Services"
    window.scrollTo(0, 0);


  })







  return (
   
    <>
    

  
        <OurServicesHero/>
        <TechWeUsed/>
        <Testimonials/>
        <FooterNexalab/>

    </>
    
  )
}

export default OurServices;