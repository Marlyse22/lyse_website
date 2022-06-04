import React from 'react';
import "./Head.css";

import { Link } from 'react-router-dom';
import Github from "../../assets/img/github.png"
import LinkedIn from "../../assets/img/linkedin.png";

const Head = () => {
  return (
    
    <div
    className="navbar"
    role="navigation"
    aria-label="main navigation"
    >
        <div className="navbar-brand">
            <Link
            className="navbar-item"
            to="https://github.com/Marlyse22"
            >
                <img
                    src={Github}
                    alt="Github"
                    width="30"
                    height="30"
                />
       
            </Link>
            <Link
            className="navbar-item"
            to="https://www.linkedin.com/in/marlyse-hangamalongo-mapaga-672389202/"
            >
                <img
                    src={LinkedIn}
                    alt="linkedin"
                    width="30"
                    height="30"
                />
            </Link>
     
            <Link
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true">Marlyse S M HANGAMALONGO MAPAGA</span>
                <span aria-hidden="true">
                    <div className="buttons">
                    <Link to="/Contact" className="button btn-back is-link">Contactez moi</Link>
                </div>
                </span>
            </Link>
  </div>
  <div className="navbar-menu">
    <div
      className="navbar-start nav-center"
    >
     Marlyse S M HANGAMALONGO MAPAGA
    </div>
    <div className="navbar-end">
        <div className="buttons">
            <Link className="button btn-back is-link">Contactez moi</Link>
        </div>
    </div>
  </div>
</div>
        
  )
}

export default Head