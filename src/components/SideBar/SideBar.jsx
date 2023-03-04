import { Drawer, Layout, Menu } from 'antd'
import React, { useState } from 'react'
import "./SideBar.css"
import NexaLabLogo from "../../assets/NexaLabNLogo.jpeg"
import BackButtonOfSideBar from "../../assets/BackButtonSideBar.png"
import SideBarIcon from "../../assets/SideBarIcon.png"



function SideBar() {

    const [sideBarOpen, setSideBarOpen] = useState(false);


    const showSideBarDrawer = () => {
        setSideBarOpen(true);
    };
    const closeSideBar = () => {
        setSideBarOpen(false);
    };



    return (
        <Layout id='sidebar'>

            <Drawer id='sidebar-sider' placement="right" closable={false}  open={sideBarOpen}>
                <div
                    id='drawer-div-container'
                >
                    <div id='drawer-logo-container'>

                        <img src={BackButtonOfSideBar} alt=""

                        id='back-button-of-sidebar'
                        style=
                        {{
                            cursor:"pointer",
                        }}

                        onClick= {closeSideBar}
                        />

                        <img
                            src={NexaLabLogo}
                            alt=""
                            id='side-bar-nexlab-logo'
                            

                        />

                    </div>

                </div>


                <Menu
                    id='sidebar-links'
                    items=
                    {
                        [
                            {
                                label: "Home",
                                key: "Home",
                            },
                            {
                                label: "About Us",
                                key: "About Us"
                            },
                            {
                                label: "Our Services",
                                key: "Our Services",
                                children:
                                    [



                                        {
                                            label: "Custom Software Development",
                                            key: "Custom Software Developement",
                                            className: "services-links"
                                        },




                                        {
                                            label: "Web Development",
                                            key: "Web Developement",
                                            className: "services-links"
                                        },




                                        {
                                            label: "Mobile Development",
                                            key: "Mobile Developement",
                                            className: "services-links"
                                        },




                                        {
                                            label: "Web Design",
                                            key: "Web Design",
                                            className: "services-links"
                                        },




                                        {
                                            label: "Social Media Marketing",
                                            key: "Social Media Marketing",
                                            className: "services-links"
                                        },




                                        {
                                            label: "SEO",
                                            key: "SEO",
                                            className: "services-links"
                                        },




                                        {
                                            label: "Content",
                                            key: "Content",
                                            className: "services-links"
                                        },



                                        {
                                            label: "Software Quality Assurance (QA)",
                                            key: "Software Quality Assurance",
                                            className: "services-links"
                                        },



                                        {
                                            label: "Graphics Designer",
                                            key: "Graphics Designer",
                                            className: "services-links"
                                        },



                                    ]
                            },


                            {
                                label: "Blogs",
                                key: "Blogs"
                            },
                            {
                                label: "Contact",
                                key: "Contact"
                            },
                        ]
                    }
                ></Menu>

            </Drawer>
            <img src={SideBarIcon} alt="" onClick={showSideBarDrawer}
            
            style=
            {{
                marginRight:24,
                cursor:"pointer"
            }}
            />
        </Layout>
    )
}

export default SideBar;