import React from 'react'
import {Container} from 'react-bootstrap';
import Header from '../components/Header/Header.js';
import ContentProject from '../components/Contents/ContentProject.js';
import Footer from '../components/Footer/Footer.js';
const Projets = () => {
  return (
    <div>
    
    <Container fluid="xxl">
        <Header />
        <ContentProject />
        <Footer />
      </Container>
    </div>
  )
}

export default Projets