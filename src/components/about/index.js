import React from 'react';
import './style.css';
import { Container, Row, Col } from 'reactstrap';
import Floyd  from './mypic.jpg';
import Skylar  from './person1.jpg'
import Michele  from './person2.jpg'
import Jacob  from './person3.jpg'



const About = () => {
  return (
    <div className="gradient paddingTop">
      <Container>
        <Row>
          <Col />
        </Row>
        <Row>
          <Col lg={3} sm={12} className="profile-pic profile-img">
            <img
              className="img-fluid"
              src={Michele}
            />
            <Col>
            Hi, I’m Michele Saba. I’m a Cedar Rapids native and mom of 4 daughter. I’ve been a stay-at-home mom for the last 10 years. I made the decision to learn software development, because I’m interested in technology and I’m passionate about entrepreneurship and innovation.
            </Col>
          </Col>
          <Col lg={3} sm={12} className="profile-pic profile-img">
            <img
              className="img-fluid"
              src={Jacob}
            />
            <Col>
            My name is Jacob Wendt and I'm a full-stack web developer. During my time at DeltaV I've grown substantially as a developer and team member. In less than a year I've learned full-stack web development. In the future I plan to continue to personally further my knowledge and hone my skills.

            https://www.linkedin.com/in/jacob-wendt/
            jacob.wendt@yahoo.com
            3196939955
            https://github.com/Jacob-Wendt
            </Col>
          </Col>
          <Col lg={3} sm={12} className="profile-pic profile-img">
            <img
              className="img-fluid"
              src={Floyd}
            />
            <Col>
            My name is Floyd Orr and I'm looking for a role as a web application developer or as an apprentice web application developer.  I'd like to contribute to a team that I will be a part of for a long time. I have enjoyed my time at DeltaV and have learned a lot about becoming a better developer and team member. I look forward to my next adventure.Contact me: floydcanhelp@gmail.com, 904-314-8688, GitHub: https://github.com/virtualmason, LinkedIn: https://www.linkedin.com/in/floydorr/
            
            </Col>
          </Col>
          <Col lg={3} sm={12} className="profile-pic profile-img">
            <img
              className="img-fluid"
              src={Skylar}
            />
            <Col>
            My name is Skylar Monahan and I am a student at DeltaV.  I am working towards getting a job where I can keep learning and growing my skillset.  I am a full-stack web developer with experience in HTML, CSS, JavaScript, Node.js, PostgreSQL, MongoDB, React, Redux, and slight knowledge about Unity editor with C#. I have learned all these things in less than 6 months through DeltaV. I am ready to move on to work with an amazing company that will allow me to keep growing.  
            Contact me: kyle.monahan2000@gmail.com, 
            563-552-8383, 
            GitHub: https://github.com/Kmons2000, 
            LinkedIn: https://www.linkedin.com/in/skylar-monahan2000/
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
