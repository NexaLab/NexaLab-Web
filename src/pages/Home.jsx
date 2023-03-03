import React from 'react';
import "./Home.css";
import Navbar from "../components/Navbar/Navbar";
import OurService from "../components/Our Service/OurService";
import OurTeam from "../components/Our Team/OurTeam";
import ConnectUs from "../components/ConnectUs/ConnectUs";




function Home() {
  return (
    <>
        <Navbar/>
        <OurService/>
        <OurTeam/>
        <ConnectUs/>
    </>
  )
}

export default Home