
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import 'bulma/css/bulma.css';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Parcours from "./pages/Parcours";
import Projets from "./pages/Projets";
import Technos from "./pages/Technos";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="Contact" element={<Contact />} />
          <Route exact path="Parcours" element={<Parcours />} />
          <Route exact path="Projets" element={<Projets />} />
          <Route exact path="Technos" element={<Technos />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;