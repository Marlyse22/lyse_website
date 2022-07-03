import React from 'react'
import {Container} from 'react-bootstrap';
import Header from '../components/Header/Header.js';
import ContentParcours from '../components/Contents/ContentParcours.js';
import Footer from '../components/Footer/Footer.js';

const Parcours = () => {
  return (
    <div>
    <Container fluid="xxl">
        <Header />
        <ContentParcours />
        <Footer />
      </Container>
    </div>
  )
}

export default Parcours