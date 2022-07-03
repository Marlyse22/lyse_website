import React from 'react';
import {Container} from 'react-bootstrap';
import Header from '../components/Header/Header.js';
import Intro from '../components/Intro/Intro.js';
import ContentHome from '../components/Contents/ContentHome.js';
import Footer from '../components/Footer/Footer.js';

const Home = () => {
  return (
    <div>
      <Container fluid="xxl">
        <Header />
        <Intro />
        <ContentHome />
        <Footer />
      </Container>
      
    </div>
  )
}

export default Home