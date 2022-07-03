import React from 'react'
import {Container} from 'react-bootstrap';
import Header from '../components/Header/Header.js';
import ContentContact from '../components/Contents/ContentContact.js';
import Footer from '../components/Footer/Footer.js';

const Contact = () => {
  return (
    <div>
     <Container fluid="xxl">
        <Header />
        <ContentContact />
        <Footer />
      </Container>
    
    </div>
  )
}

export default Contact