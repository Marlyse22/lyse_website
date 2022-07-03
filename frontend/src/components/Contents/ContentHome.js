import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ContentHome.css";
import circle from './../../assets/img/circl.png'

const ContentHome = () => {
  return (
    <div className="bg-cth">
    <Container>
      <Row >
        <Col className="rw-mg">
          <img
          alt=""
          width="150"
          height="150"
          src={circle}
          className="d-inline-block align-top"
        />{' '}
         <p> Web</p>
        </Col>
        <Col className="rw-mg">
         <img
          alt=""
          
           width="150"
          height="150"
          src={circle}
          className="d-inline-block align-top"
        />{' '} 
         <p>  Mobile</p>
       </Col>
        <Col className="rw-mg">
         <img
          alt=""
           width="150"
          height="150"
          src={circle}
          className="d-inline-block align-top"
        />{' '}
         <p> Data</p>
        
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default ContentHome