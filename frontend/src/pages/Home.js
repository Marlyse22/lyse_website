import React from 'react'
import Header from '../components/Header/Header.js';
import Intro from '../components/Intro/Intro.js';
import ContentHome from '../components/ContentHome/ContentHome.js';
import Footer from '../components/Footer/Footer.js';
import 'bulma/css/bulma.css';

const Home = () => {
  return (
    <div
      className="App container is-fullhd "
    >
      
      <Header />
      <Footer />
    </div>
  )
}

export default Home