import React from 'react'
import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import ContentHome from "../components/ContentHome/ContentHome";
import Footer from "../components/Footer/Footer.js";
import 'bulma/css/bulma.css';
import "../App.css";
const Home = () => {
  return (
    <div
      className="App container is-fullhd "
    >
      <Header />
      <Intro />
      <ContentHome />
      <Footer />
    </div>
  )
}

export default Home