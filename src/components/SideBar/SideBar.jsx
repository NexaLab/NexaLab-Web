import { Button, Drawer, Layout, Menu } from 'antd'
import React from 'react'
import "./SideBar.css"
import NexaLabLogo from "../../assets/NexaLabNLogo.jpeg"
import { useState } from 'react'
import BackButtonOfSideBar from "../../assets/BackButtonSideBar.png"

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


                        style=
                        {{
                            alignSelf:"flex-start",
                            cursor:"pointer"
                        }}

                        onClick= {closeSideBar}
                        />

                        <img
                            src={NexaLabLogo}
                            alt=""

                            style=
                            {{
                                width: 58,
                                height: 58,
        
                            }}

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
                                            style:
                                            {
                                                borderBottom: "1px solid #61C2D0",
                                                borderRadius: "0px",
                                                fontFamily: "Product Sans, sans-serif",
                                                fontWeight: 530,
                                                fontSize: 15,
                                                color: "#0D1625",
                                                marginTop: "5px",

                                            }
                                        },




                                        {
                                            label: "Web Development",
                                            key: "Web Developement",
                                            style:
                                            {
                                                borderBottom: "1px solid #61C2D0",
                                                borderRadius: "0px",
                                                fontFamily: "Product Sans, sans-serif",
                                                fontWeight: 530,
                                                fontSize: 15,
                                                color: "#0D1625",
                                                paddingLeft: "17px",

                                            }
                                        },




                                        {
                                            label: "Mobile Development",
                                            key: "Mobile Developement",
                                            style:
                                            {
                                                borderBottom: "1px solid #61C2D0",
                                                borderRadius: "0px",
                                                fontFamily: "Product Sans, sans-serif",
                                                fontWeight: 530,
                                                fontSize: 15,
                                                color: "#0D1625",
                                                paddingLeft: "17px",

                                            }
                                        },




                                        {
                                            label: "Web Design",
                                            key: "Web Design",
                                            style:
                                            {
                                                borderBottom: "1px solid #61C2D0",
                                                borderRadius: "0px",
                                                fontFamily: "Product Sans, sans-serif",
                                                fontWeight: 530,
                                                fontSize: 15,
                                                color: "#0D1625",
                                                paddingLeft: "17px",

                                            }
                                        },




                                        {
                                            label: "Social Media Marketing",
                                            key: "Social Media Marketing",
                                            style:
                                            {
                                                borderBottom: "1px solid #61C2D0",
                                                borderRadius: "0px",
                                                fontFamily: "Product Sans, sans-serif",
                                                fontWeight: 530,
                                                fontSize: 15,
                                                color: "#0D1625",
                                                paddingLeft: "17px",

                                            }
                                        },




                                        {
                                            label: "SEO",
                                            key: "SEO",
                                            style:
                                            {
                                                borderBottom: "1px solid #61C2D0",
                                                borderRadius: "0px",
                                                fontFamily: "Product Sans, sans-serif",
                                                fontWeight: 530,
                                                fontSize: 15,
                                                color: "#0D1625",
                                                paddingLeft: "17px",

                                            }
                                        },




                                        {
                                            label: "Content",
                                            key: "Content",
                                            style:
                                            {
                                                borderBottom: "1px solid #61C2D0",
                                                borderRadius: "0px",
                                                fontFamily: "Product Sans, sans-serif",
                                                fontWeight: 530,
                                                fontSize: 15,
                                                color: "#0D1625",
                                                paddingLeft: "17px",

                                            }
                                        },



                                        {
                                            label: "Software Quality Assurance (QA)",
                                            key: "Software Quality Assurance",
                                            style:
                                            {
                                                borderBottom: "1px solid #61C2D0",
                                                borderRadius: "0px",
                                                fontFamily: "Product Sans, sans-serif",
                                                fontWeight: 530,
                                                fontSize: 15,
                                                color: "#0D1625",
                                                paddingLeft: "17px",

                                            }
                                        },



                                        {
                                            label: "Graphics Designer",
                                            key: "Graphics Designer",
                                            style:
                                            {
                                                borderBottom: "1px solid #61C2D0",
                                                borderRadius: "0px",
                                                fontFamily: "Product Sans, sans-serif",
                                                fontWeight: 530,
                                                fontSize: 15,
                                                color: "#0D1625",
                                                paddingLeft: "17px",

                                            }
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
            <Button onClick={showSideBarDrawer}>Open</Button>
        </Layout>
    )
}

export default SideBar;