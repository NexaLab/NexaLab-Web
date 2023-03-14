import React , { useEffect } from 'react'
import FooterNexalab from '../components/Footer/FooterNexalab';
import OurServicesHero from "../components/OurServicesHero/OurServicesHero";
import TechWeUsed from "../components/TechWeUsed/TechWeUsed";
import Testimonials from '../components/Testimonials/Testimonials';
import OurServicesSecondSection from '../components/OurServiceSecondSection/OurServiceSecondSection'
import OurService from '../components/Our Service/OurService';
import { List} from '../Data/ServicesData'

function OurServices() {



  useEffect( () => {


    document.title = "NexaLab | Our Services"
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });


  })







  return (
   
    <>
    

  
        <OurServicesHero/>
        <OurServicesSecondSection />
        <TechWeUsed/>
        <OurService ServicesList={List} />
        <Testimonials/>
        <FooterNexalab/>

    </>
    
  )
}

export default OurServices;