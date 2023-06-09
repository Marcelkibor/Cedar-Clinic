import React from 'react'
import Doc from '../assets/doc.png'
import Image from 'react-bootstrap/Image'
import { Card, Col, Row } from 'react-bootstrap'

const DoctorsPage = () => {
  return (
    <div >
      <div style={{textAlign:'center', height:'30vh', marginTop:'5%'}}>
      <h1>Our Doctors</h1>
        <h5>Meet out team</h5>
      </div>
        <div className='teams-row'>
          <Row>
            <Col>
            <Card className = 'teams-card'>
              <div  className = 'teams-card-bg' style={{background:'#f6e58d'}}>
              <div >
   <Image  className = 'teams-img' src= {Doc}roundedCircle/>
  </div>
              </div>
            <Card.Title style={{marginLeft:'15px'}}> Dr. Jakait</Card.Title>
            <Card.Body>
              <p> Doctor and clinic director.</p>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className = 'teams-card'>
            <div  className = 'teams-card-bg' style={{background:'#9AECDB'}}>
            <div >
   <Image  className = 'teams-img' src= {Doc}roundedCircle/>
  </div>
            </div>
            <Card.Title style={{marginLeft:'15px'}}> Dr. Kemboi</Card.Title>
            <Card.Body>
              <p> Doctor.</p>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className = 'teams-card'>
            <div  className = 'teams-card-bg' style={{background:'#7bed9f'}}>
            <div >
   <Image  className = 'teams-img' src= {Doc}roundedCircle/>
  </div>
            </div>
            <Card.Title style={{marginLeft:'15px'}}> Dr. Omondi</Card.Title>
            <Card.Body>
              <p> Doctor.</p>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className = 'teams-card'>
            <div  className = 'teams-card-bg' style={{background:'#D6A2E8'}}>
            <div >
   <Image  className = 'teams-img' src= {Doc}roundedCircle/>
  </div>
            </div>
            <Card.Title style={{marginLeft:'15px'}}> Dr. Omondi</Card.Title>
            <Card.Body>
              <p> Doctor.</p>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className = 'teams-card'>
            <div  className = 'teams-card-bg' style={{background:'#FEA47F'}}>
            <div >
   <Image  className = 'teams-img' src= {Doc}roundedCircle/>
  </div>
            </div>
            <Card.Title style={{marginLeft:'15px'}}> Dr. Omondi</Card.Title>
            <Card.Body>
              <p> Doctor.</p>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className = 'teams-card'>
            <div  className = 'teams-card-bg' style={{background:'#c7ecee'}}>
            <div >
   <Image  className = 'teams-img' src= {Doc}roundedCircle/>
  </div>
            </div>
            <Card.Title style={{marginLeft:'15px'}}> Dr. Omondi</Card.Title>
            <Card.Body>
              <p> Doctor.</p>
            </Card.Body>
            </Card>
            </Col>
          </Row>
        </div>
    </div>
  )
}

export default DoctorsPage
