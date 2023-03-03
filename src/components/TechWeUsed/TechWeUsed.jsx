import { Layout, Typography } from 'antd';
import React from 'react';
import "./TechWeUsed.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import TechStackCard from './Card/TechStackCard';
import { technologiesWeUsed } from '../../ProjectData/ProjectData';



const { Title } = Typography;



function TechWeUsed() {



    const techItems = technologiesWeUsed.map(technology => <TechStackCard key = { technology.id } 
        techImage ={ technology.techImage } 
    />)


    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 2,
        },
        1100: {
            items: 6,
        }
    };




    return (
        <Layout id='tech-we-used-layout'>

            <Title level={4} id="tech-how-we-used-heading">HOW WE DO</Title>
            <Title level={2} id="tech-we-used-heading">Technologies we use</Title>


            <div id='tech-we-used-carousel-container'>

                {/* <TechStackCard/>

                <TechStackCard/> */}

                <AliceCarousel

                    infinite

                    items={techItems}

                    disableDotsControls

                    responsive={responsive}

                  

                    mouseTracking

                    autoPlay

                    autoPlayInterval={1000}

                    animationDuration={1500}

                />


            </div>



        </Layout>
    )
}

export default TechWeUsed;