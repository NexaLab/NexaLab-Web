import React ,  { useEffect }  from 'react'
import AboutusServices from '../components/Aboutus-Services/AboutusServices';
import AboutUsCommitSucceed from '../components/AboutUsCommitSucceed/AboutUsCommitSucceed';
import AboutUsHero from '../components/AboutUsHero/AboutUsHero';
import FooterNexalab from '../components/Footer/FooterNexalab';
import AboutUsThirdSection from "../components/ThirdSection/ThirdSection";



function AboutUs() {
  






  useEffect( () => {


    document.title = "NexaLab | About"
    window.scrollTo(0, 0);


  });






    return (

        <>
        
     
        <AboutUsHero/>
        <AboutUsCommitSucceed/>
        <AboutUsThirdSection />
        <AboutusServices/>
        <FooterNexalab/>
        
        
        </>
    
  )
}


export default AboutUs;