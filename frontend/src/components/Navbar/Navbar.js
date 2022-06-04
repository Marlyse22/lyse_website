import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';

const Navbar = () => {
  return (
    <div>
      <div className='navbar  is-inline-flex nav-padding is-transparent nav-back no-shadow is-hidden-mobile'>
        <div className="container is-fluid">
          <div className='navbar-brand'>

          </div>
          <div className="navbar-menu">
            <div className="navbar-start is-centered-absolute">
                <Link to="/Home" className="navbar-item">Home</Link>
                <Link to="/Projets" className="navbar-item">Mes projets</Link>
                <Link to="/Technos" className="navbar-item">Mes technos</Link>
                <Link to="/Parcours" className="navbar-item">Mon parcours</Link>
             
            </div>
            <div className="navbar-end">

            </div>

          </div>
        </div>
        <nav className='navbar mobile-navbar nav-back is-hidden-desktop" aria-label="main navigation'>
          <div className='navbar-brand'>
              <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </div>
              
          </div>
          <div className='navbar-menu'>
                  <Link to="/home" className="navbar-item">Home</Link>
                  <Link to="/projets" className="navbar-item">Mes projets</Link>
                  <Link to="/technos" className="navbar-item">Mes technos</Link>
                  <Link to="/parcours" className="navbar-item">Mon parcours</Link>

          </div>
          <div className='mobile-search is-hidden'>
              <div className="control">
                  
                  <div className="close-icon">
                      <i data-feather="x"></i>
                  </div>
                  <div id="tipue_drop_content_mobile" className="tipue-drop-content"></div>
              </div>
          </div>

        </nav>
      </div>
        <nav
            className="navbar nav-back"
            role="navigation"
            aria-label="main navigation"
            >
            <div className="navbar-brand">
              <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </div>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start nav-center"
                
                >
                <Link to="/Home" className="navbar-item">Home</Link>
                <Link to="/Projets" className="navbar-item">Mes projets</Link>
                <Link to="/Technos" className="navbar-item">Mes technos</Link>
                <Link to="/Parcours" className="navbar-item">Mon parcours</Link>
                </div>
                <div className="navbar-end"></div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar