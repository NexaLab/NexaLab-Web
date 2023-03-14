import React , { useEffect } from 'react'
import FooterNexalab from '../components/Footer/FooterNexalab';
import OurServicesHero from "../components/OurServicesHero/OurServicesHero";
import TechWeUsed from "../components/TechWeUsed/TechWeUsed";
import Testimonials from '../components/Testimonials/Testimonials';
import OurServicesSecondSection from '../components/OurServiceSecondSection/OurServiceSecondSection'
import OurService from '../components/Our Service/OurService';
import { List} from '../Data/ServicesData'
import { Helmet } from 'react-helmet';


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
    
    <Helmet>
        <meta name='title' content="Nexalab Services | Innovative Software Solutions for Business Growth" />
          <meta name='description' content="Nexalab offers innovative software solutions to help businesses improve productivity, streamline processes, and achieve growth. Explore our services today and discover how we can help your business thrive." />

        </Helmet>
  
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