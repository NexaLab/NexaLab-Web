import { Layout, Menu } from 'antd';
import React, { useState } from 'react'
import "./Navbar.css";
import  NexaLabLogo  from "../../assets/NexaLabLogo.svg";

function Navbar() {

    const [ currentNavLink, setCurrentNavLink ] = useState('Home')


    const onSelectNavLink = (event) => {
        console.log(event.key);
        setCurrentNavLink(event.key);
    }



  return (
    <Layout id='navbar'>
       <img src={NexaLabLogo} alt=""  id='nexalab-logo'/>
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
    </Layout>
  )
}

export default Navbar;