import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import "./Footer.css";
const Footer = () => {
  return (
    <div className="bg-footer">
    <Container>
  <Nav className="justify-content-center">
    <Nav.Item>
      <Nav.Link className="simple-title" href="#"> Copyright 2022 | Marlyse S M H M</Nav.Link>
    </Nav.Item>
  </Nav>
  
 </Container>
    </div>
  )
}

export default Footer