import React from 'react'
import './ourServicesSection.css'
import pic from './pic.png'
import underline from './Rectangle 27.png'

function ourServicesSection() {
    return (
        <div className='section'>
            <div className='container'>
                <div className='paragraph'>
                    <div className='heading'>
                        <h1>Best Software House in Pakistan Offering Top-Notch Services</h1>
                        <img src={underline} alt='' className='underline'/>  
                    </div>
                    <div className='content'>
                        <p className='bold-text'><b>We Are Not Just Serving Our Clients. We Are Serving The Nation. Best Software House In Pakistan For A Reason.</b></p>
                        <p className='text'>NexaLab is a business that creates, develops, and sells software products or services. We
specialize in developing software applications, systems, and platforms for a wide variety of
purposes, including business, entertainment, education, healthcare, and more. Welcome to our software house company! We are a team of dedicated and talented individuals who are passionate about creating innovative software solutions to meet the evolving needs of our clients.</p>
                    </div>
                </div>
                <div className='image'>
                    <img src={pic} alt="" className='pic' />
                </div>
            </div>

        </div>
    )
}

export default ourServicesSection;