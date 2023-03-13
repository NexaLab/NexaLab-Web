import React ,  { useEffect }  from 'react'
import Navbar from "../components/Navbar/Navbar";
import ContactInfo from "../components/ContactLocation/ContactLocation";
import ContactForm from "../components/ContactForm/ContactForm";
import FooterNexaLab from "../components/Footer/FooterNexalab";
import ContactHero from '../components/ContactHero/ContactHero';





function Contact() {
  





  useEffect( () => {


    document.title = "NexaLab | Contact"


  });






  
    return (
  
        
    <>

     
        <ContactHero/>
        <ContactInfo/>
        <ContactForm/>
        <FooterNexaLab/>
    
    
    </>
  )
}

export default Contact;