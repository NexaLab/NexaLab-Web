import React ,  { useEffect }  from 'react'
import { Helmet } from 'react-helmet';
import AboutusServices from '../components/Aboutus-Services/AboutusServices';
import AboutUsCommitSucceed from '../components/AboutUsCommitSucceed/AboutUsCommitSucceed';
import AboutUsHero from '../components/AboutUsHero/AboutUsHero';
import FooterNexalab from '../components/Footer/FooterNexalab';
import AboutUsThirdSection from "../components/ThirdSection/ThirdSection";



function AboutUs() {
  






  useEffect( () => {


    document.title = "NexaLab | About"
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });


  });






    return (

        <>
        
        <Helmet>
        <meta name='title' content="About Nexalab | Innovative Software Solutions for Business Growth" />
          <meta name='description' content="Learn more about Nexalab - a leading provider of innovative software solutions for businesses. Our experienced team is dedicated to helping our clients achieve their goals and grow their businesses." />

        </Helmet>
     
        <AboutUsHero/>
        <AboutUsCommitSucceed/>
        <AboutUsThirdSection />
        <AboutusServices/>
        <FooterNexalab/>
        
        
        </>
    
  )
}


export default AboutUs;