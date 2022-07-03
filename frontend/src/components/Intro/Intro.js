import React from 'react';
import "./Intro.css";
import {Container,Col,Row,Nav, Navbar,Button, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Lyseimg from "../../assets/img/lysephoto.png"

const Intro = () => {
  return (
    <div className="intro">
       <Container>
          <Row>
            <Col sm={7}>
              <div className="">
                    <span className="high-title" >Bonjour ! je suis Marlyse Saintich 
                    {'\n'}
                    je suis Développeuse web et Mobile </span>
                    {'\n'}
                    <p className="simple-title-i">
                         Frontend Developer with high level of experience in web designing
                        and development, producting the Quality work
                    </p>
              </div>
            
             <div className="btn-mgi">
              <Link  to="/contact" >
                <Button variant="light" className="btn-back">Contactez-moi</Button>
              </Link>
            </div>
             
        </Col>
        <Col sm={5}>
          <img
              src={Lyseimg}
              alt="Lyse"
              
          />
        
        </Col>
      </Row>
     
    </Container>
      
    </div>
  )
}

export default Intro