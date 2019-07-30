import React from 'react';
import { Container, Col, Row } from 'reactstrap';
const Footer = () => {
  return (
    <footer>
      <Container className="footer-body">
        <Row>
          <Col className="text-center">
            <p className="small">VELOCITY</p>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>Col 1</Col>
          <Col>Col 2</Col>
          <Col>Col 3</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
