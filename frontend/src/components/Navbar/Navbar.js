import React from 'react';
import "./Navbar.css";
import {  Link } from "react-router-dom";
import 'bulma/css/bulma.css';

const Navbar = () => {
  return (
    <div>
        <nav
            className="navbar nav-back"
            role="navigation"
            aria-label="main navigation"
            >
            <div className="navbar-brand">
                
            
                
            </div>
            <div className="navbar-menu">
                <div
                className="navbar-start nav-center"
                
                >
                <Link to="/home" className="navbar-item">Home</Link>
                <Link to="/projets"className="navbar-item">Mes projets</Link>
                <Link to="/technos" className="navbar-item">Mes technos</Link>
                <Link to="/parcours" className="navbar-item">Mon parcours</Link>
                </div>
                <div className="navbar-end">
                
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar