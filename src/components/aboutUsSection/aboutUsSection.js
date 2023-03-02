import React from 'react';
import logo from './N_LOGO.png'
import './aboutUsSection.css';



const aboutUsSection = ({ backgroundColor, heading, text }) => {

  return (
    <div className="section" >
        <div className='blue-part' style={{backgroundColor: "#61c2d0"}}>
            <div className='heading'>
                <h2 style={{}}>Our Company</h2>
            </div>
            <div className='paragraph'>
            <p style={{}}>NexaLab is a business that creates, develops, and sells software products or services. We specialize in developing software applications, systems, and platforms for a wide variety of purposes, including business, entertainment, education, healthcare, and more.</p>

            </div>
        </div>
        <div className='bottom-part'>
            <div>
                <img className="logo" style={{}}src={logo} alt="nexalab logo"></img>
            </div>
        </div>
    </div>
  );
};

export default aboutUsSection;
