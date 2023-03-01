import React from 'react'
import "./OurTeam.css"
import { Layout, Typography } from 'antd';
import OurTeamUnderline from "../../assets/DashOurTeam.png";
import OurTeamLeftBox from "../../assets/OurTeamBoxWithBorderRadius.png"
import OurTeamRightBox from "../../assets/OurTeamRightBoxWithBorderRadius.png"
import TeamMemberImage from "../../assets/TeamMemberImage.png"
import OurTeamLeftBorderBoxMobile from "../../assets/OurTeamLeftBorderBoxMobile.png";
import OurTeamRightBorderBoxMobile from "../../assets/OurTeamRightBorderBoxMobile.png"
import { useState, useEffect } from 'react';










const { Title } = Typography;
const { Text } = Typography;


function OurTeam() {

    const [ deviceWidth, setDeviceWidth] = useState(window.innerWidth);




    const calculateDeviceWidth = () => {
        setDeviceWidth(window.innerWidth);
      }




  
    useEffect( () => {
  
      window.addEventListener('resize', calculateDeviceWidth);
  
      return () => {
        window.removeEventListener('resize', calculateDeviceWidth);
      };
  
    },[])



    return (
        <Layout id='our-team-layout'>

            <Title level={4} id='our-team-about-us-heading'>ABOUT US</Title>
            <h1 id="our-team-heading">Our Team</h1>
            <img src={OurTeamUnderline} alt="" />

         

            <div id='our-team-content'>



                <div id='our-team-left-content'>
                    <img src={deviceWidth > 1020 ? OurTeamLeftBox : OurTeamLeftBorderBoxMobile} alt="" className="our-team-content-left-and-right-box" />
                </div>





                <div id='our-team-middle-content'>






                    <div id='our-team-memeber-content'>




                        <div id='our-team-memeber-img-container'>

                            <img src={TeamMemberImage} alt="" id='our-team-member-img' />

                        </div>



                        <div id='our-team-memeber-designation-container'>


                            <Title
                                level={5}
                                id='our-team-member-name'
                            >
                                Name
                            </Title>


                            <Text id='our-team-member-designation'>Designation</Text>


                            <p id='our-team-member-details'>Lorem ipsum dolor sit, </p>



                        </div>



                    </div>




                    <div id='our-team-memeber-content'>




                        <div id='our-team-memeber-img-container'>

                            <img src={TeamMemberImage} alt="" id='our-team-member-img' />

                        </div>



                        <div id='our-team-memeber-designation-container'>


                            <Title
                                level={5}
                                id='our-team-member-name'
                            >
                                Name
                            </Title>


                            <Text id='our-team-member-designation'>Designation</Text>


                            <p id='our-team-member-details'>Lorem ipsum dolor sit, </p>



                        </div>



                    </div>




                    <div id='our-team-memeber-content'>




                        <div id='our-team-memeber-img-container'>

                            <img src={TeamMemberImage} alt="" id='our-team-member-img' />

                        </div>



                        <div id='our-team-memeber-designation-container'>


                            <Title
                                level={5}
                                id='our-team-member-name'
                            >
                                Name
                            </Title>


                            <Text id='our-team-member-designation'>Designation</Text>


                            <p id='our-team-member-details'>Lorem ipsum dolor sit, </p>



                        </div>



                    </div>



                    
                    <div id='our-team-memeber-content'>




                        <div id='our-team-memeber-img-container'>

                            <img src={TeamMemberImage} alt="" id='our-team-member-img' />

                        </div>



                        <div id='our-team-memeber-designation-container'>


                            <Title
                                level={5}
                                id='our-team-member-name'
                            >
                                Name
                            </Title>


                            <Text id='our-team-member-designation'>Designation</Text>


                            <p id='our-team-member-details'>Lorem ipsum dolor sit, </p>



                        </div>



                    </div>















                </div>





                <div id='our-team-right-content'>
                    <img src={deviceWidth > 1020 ? OurTeamRightBox : OurTeamRightBorderBoxMobile} alt="" className="our-team-content-left-and-right-box" />
                </div>
            </div>
           
        </Layout >
    )
}

export default OurTeam;