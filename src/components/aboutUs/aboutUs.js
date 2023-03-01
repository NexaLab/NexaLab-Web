import React from 'react';
import { Typography, Row, Col } from 'antd';
import './aboutUs.css';

const { Title, Paragraph } = Typography;

const aboutUs = ({ backgroundColor, heading, text }) => {
  const sectionStyle = {
    backgroundColor: "#61c2d0",
  };
  const headingStyle = {
    fontFamily: "Product Sans",
    fontSize: "48px",
    fontWeight: "700",
    lineWeight: "58px",
    letterSpacing: "0em"
  }

  return (
    <div className="section" style={sectionStyle}>
      <Row justify="center" align="middle" style={{ height: '100%' }}>
        <Col span={24} justify= "center" align="middle" className="content">
          <Title level={2} style={headingStyle} className="heading">
            Our Company
          </Title>
          <div className="text-container">
            <Paragraph style={{fontSize:"32px"}} className="text">
              NexaLab is a business that creates, develops, and sells software products or services. We specialize in developing software applications, systems, and platforms for a wide variety of purposes, including business, entertainment, education, healthcare, and more.
            </Paragraph>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default aboutUs;
