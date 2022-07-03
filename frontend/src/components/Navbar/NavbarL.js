import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import "./Navbar.css";

const NavbarL = () => {
  return (
    <div>
    <Navbar collapseOnSelect  expand="lg" className="justify-content-center nav-back" >
  <Container>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto" activeKey="/home">
      <Nav.Link className="simp-title" href="#home">Accueil</Nav.Link>
      <Nav.Link className="simp-title" href="#myproject">Mes projets</Nav.Link>
      <Nav.Link className="simp-title" href="#myproject">Mes technos</Nav.Link>
      <Nav.Link className="simp-title" href="#myproject">Mon parcours</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    
    </div>
  )
}

export default NavbarL