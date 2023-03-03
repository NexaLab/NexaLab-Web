import React from 'react';
import "./Home.css";
import Navbar from "../components/Navbar/Navbar";
import OurService from "../components/Our Service/OurService";
import OurTeam from "../components/Our Team/OurTeam";

function Home() {
  return (
    <>
        <Navbar/>
        <OurService/>
        <OurTeam/>
    </>
  )
}

export default Home