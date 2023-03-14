import React ,  { useEffect }  from 'react'
import ContactInfo from "../components/ContactLocation/ContactLocation";
import ContactForm from "../components/ContactForm/ContactForm";
import FooterNexaLab from "../components/Footer/FooterNexalab";
import ContactHero from '../components/ContactHero/ContactHero';
import { Helmet } from 'react-helmet';




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
      
        <Helmet>
          <meta name='title' content="Contact Nexalab | Get in Touch with Our Team for Advanced Software Solutions" />
          <meta name='description' content="Contact Nexalab to learn more about our software solutions and services. Our team is dedicated to delivering innovative solutions that help businesses thrive. Get in touch with us today!" />

        </Helmet>
        <ContactHero/>
        <ContactInfo/>
        <ContactForm/>
        <FooterNexaLab/>
    
    
    </>
  )
}

export default Contact;