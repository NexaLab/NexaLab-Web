import React from 'react';
import logo from './N_LOGO.png'
import './aboutUsSection.css';



const aboutUsSection = ({ backgroundColor, heading, text }) => {
    const headingStyle = {
        fontFamily: "Product Sans",
        fontSize: "48px",
        fontWeight: "700",
        lineWeight: "58px",
        letterSpacing: "0em"
      }
    const paraStyling ={
        fontFamily: "Product Sans",
        fontSize: "32px",
        fontWeight: "400",
        lineHeight: "51px",
        letterSpacing: "0em",
        textAlign: "center"

    }

  return (
    <div className="section" >
        <div className='blue-part' style={{backgroundColor: "#61c2d0"}}>
            <div className='heading'>
                <h2 style={{}}>Our Company</h2>
            </div>
            <div className='paragraph'>
            <p style={{paraStyling}}>NexaLab is a business that creates, develops, and sells software products or services. We specialize in developing software applications, systems, and platforms for a wide variety of purposes, including business, entertainment, education, healthcare, and more.</p>

            </div>
        </div>
        <div className='bottom-part'>
            <div>
                <img src={logo} alt="nexalab logo"></img>
            </div>
        </div>
    </div>
  );
};

export default aboutUsSection;
