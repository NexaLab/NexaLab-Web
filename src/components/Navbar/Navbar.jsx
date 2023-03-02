import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react'
import "./Navbar.css";
import  NexaLabLogo  from "../../assets/NexaLabLogo.svg";
import SideBar from '../SideBar/SideBar';

function Navbar() {


    const [ deviceWidth, setDeviceWidth] = useState(window.innerWidth);

    const [ currentNavLink, setCurrentNavLink ] = useState('Home')






    const onSelectNavLink = (event) => {
        console.log(event.key);
        setCurrentNavLink(event.key);
    }





    const calculateDeviceWidth = () => {
      setDeviceWidth(window.innerWidth);
    }





  useEffect( () => {

    window.addEventListener('resize', calculateDeviceWidth);

    return () => {
      window.removeEventListener('resize', calculateDeviceWidth);
    };

  },[]);





  return (
    <Layout id='navbar'>
       <img src={NexaLabLogo} alt=""  id='nexalab-logo'/>
       { 
       deviceWidth > 1067 ? 


       <Menu
        id='nav-links'
        items= 
        {
            [
                { label:"Home" , key: "Home"},
                { label:"About Us" , key: "About Us" },
                { label:"Our Services" , key: "Our Services" },
                { label:"Blogs" , key: "Blogs" },
                { label:"Contact" , key: "Contact" },
            ]
        }
        onClick = {onSelectNavLink}
        selectedKeys = { [ currentNavLink ] }
       ></Menu>


       : <SideBar/>
      }
    </Layout>
  )
}

export default Navbar;