import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './style.css';
import logo from '../navigation/logo.png';

const Footer = () => {
  return (
    <footer>
      <Container className="footer-body">
        <Row>
          <Col className="text-center">
            <img src={logo} className="logo-img" alt="Velocity Games"/>
            <hr />
          </Col>
        </Row>
        <Row className="text-center">
          <Col className="media-icons">
            <i class="fab fa-facebook-square" />
            <i class="fab fa-twitter" />
            <i class="fab fa-react" />
          </Col>
          <Row>
            © 2019, velocity games, Inc. All rights reserved. velocity, velocity
            games, the velocity logo are trademarks or registered trademarks of
            velocity games, Inc. in the United States of America and elsewhere.
            Other brands or product names are the trademarks of their respective
            owners.{' '}
          </Row>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
