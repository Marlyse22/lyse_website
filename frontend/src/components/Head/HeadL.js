import React from 'react'
import {Container,Nav, Navbar,Button, Form} from 'react-bootstrap'
import "./Head.css";
import github from './../../assets/img/github.png'
import linkedin from './../../assets/img/linkedin.png'


const HeadL = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">
    <img
          alt=""
          src={github}
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}
        <img
          alt=""
          src={linkedin}
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="responsive-navbar-nav navbarScroll">
      <Nav
        className="justify-content-center m-auto  my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1" className="simple-title">Marlyse S.M HANGAMALONGO MAPAGA</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <Button variant="light" className='btn-back'>Contactez-moi</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default HeadL