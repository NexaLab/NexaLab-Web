import React, { useState, useEffect } from 'react'
import "./OurTeam.css";
import "./OurTeamTablet.css";
import "./OurTeamMobile.css";
import { Layout, Typography } from 'antd';
import OurTeamUnderline from "../../assets/Our Team/DashOurTeam.png";
import OurTeamLeftBox from "../../assets/Our Team/OurTeamBoxWithBorderRadius.png"
import OurTeamRightBox from "../../assets/Our Team/OurTeamRightBoxWithBorderRadius.png"
import OurTeamLeftBorderBoxMobile from "../../assets/Our Team/OurTeamLeftBorderBoxMobile.png";
import OurTeamRightBorderBoxMobile from "../../assets/Our Team/OurTeamRightBorderBoxMobile.png"
import { ourTeamMembers } from '../../ProjectData/ProjectData';









const { Title } = Typography;
const { Text } = Typography;


function OurTeam() {



    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);





    const calculateDeviceWidth = () => {
        setDeviceWidth(window.innerWidth);
    }





    useEffect(() => {

        window.addEventListener('resize', calculateDeviceWidth);

        return () => {
            window.removeEventListener('resize', calculateDeviceWidth);
        };

    }, []);





    return (
        <Layout id='our-team-layout'>

            <Title level={4} id='our-team-about-us-heading'>ABOUT US</Title>
            <h1 id="our-team-heading">Our Team</h1>
            <img src={OurTeamUnderline} alt="" />



            <div id='our-team-content'>



                <div id='our-team-left-content'>
                    <img src={deviceWidth > 1199 ? OurTeamLeftBox : OurTeamLeftBorderBoxMobile} alt="" className="our-team-content-left-and-right-box" />
                </div>





                <div id='our-team-middle-content'>






                    {

                        ourTeamMembers.map(teamMember => {

                            return (
                                <div id='our-team-memeber-content' key={ teamMember.id }>




                                    <div id='our-team-memeber-img-container'>

                                        <img src={ teamMember.image } alt="" id='our-team-member-img' />

                                    </div>



                                    <div id='our-team-memeber-designation-container'>


                                        <Title
                                            level={5}
                                            id='our-team-member-name'
                                        >
                                            { teamMember.name }
                                        </Title>


                                        <Text id='our-team-member-designation'>{ teamMember.designation }</Text>


                                        <p id='our-team-member-details'>{ teamMember.desciption } </p>



                                    </div>



                                </div>
                            )

                        })

                    }


                </div>



                <div id='our-team-right-content'>
                    <img src={deviceWidth > 1199 ? OurTeamRightBox : OurTeamRightBorderBoxMobile} alt="" className="our-team-content-left-and-right-box" />
                </div>


            </div>

        </Layout >
    )
}

export default OurTeam;