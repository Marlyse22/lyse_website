import React from 'react'
import {Container} from 'react-bootstrap';
import Header from '../components/Header/Header.js';
import ContentTechno from '../components/Contents/ContentTechno.js';
import Footer from '../components/Footer/Footer.js';
const Technos = () => {
  return (
    <div>
    <Container fluid="xxl">
        <Header />
        <ContentTechno />
        <Footer />
      </Container>
    
    </div>
  )
}

export default Technos