import React ,  { useEffect }  from 'react'
import ContactInfo from "../components/ContactLocation/ContactLocation";
import ContactForm from "../components/ContactForm/ContactForm";
import FooterNexaLab from "../components/Footer/FooterNexalab";
import ContactHero from '../components/ContactHero/ContactHero';





function Contact() {
  





  useEffect( () => {


    document.title = "NexaLab | Contact"
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });



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