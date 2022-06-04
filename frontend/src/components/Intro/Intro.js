import React from 'react';
import "./Intro.css";
import { Link } from 'react-router-dom';
import Lyseimg from "../../assets/img/lysephoto.png"

const Intro = () => {
  return (
    <div className="Intro">
      
      <div className="i-left">
        <div className="i-name">
          <span >Hy! I Am</span>
          <span>Marlyse Saintich HANGAMALONGO MAPAGA</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="/contact" >
          <button className="button btn-back is-link ">Contacter moi</button>
        </Link>
       
      </div>
      {/* right image side */}
      <div className="i-right">
                <img
                    src={Lyseimg}
                    alt="Lyse"
                    width="331"
                    height="339"
                />
      </div>
    </div>
  )
}

export default Intro