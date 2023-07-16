import React from 'react'
import Navigation from './Layouts/NavigationBar'
import ServicesHeader from './Services/ServicesHeader'
import {Row,Col} from 'react-bootstrap';
import Doc from '../assets/doc.png'
import Footer from './Layouts/Footer';
const Contacts = () => {
  return (
    <>
      <div>
        <Navigation/>
        <ServicesHeader/>
      </div>
     <Row style = {{marginTop:'70px'}}>
      <Col md={4} sm={6} lg={4} className="mr-2" style={{ backgroundColor: 'red', height: 'fit-content' }}>
      <>
      <div>
      <h5>Email</h5>
      <p>cedarclinic@gmail.com</p>
      </div>
      <div>
      <h5>Address</h5>
      <p>Makasembo Street, Off Nairobi Highway , P.O.Box 2670 30100, Eldoret, Kenya</p>
      </div>
      <div>
        <h5>Call Us</h5>
        <p>0712345678</p>
      </div>
      <div>
        <h5>Visiting Hours</h5>
        <p>8:00am - 5:00pm </p>
      </div>
      </>
      </Col>
      <Col md={6} sm={6} lg={6} className="ml-2" style={{ backgroundColor: 'black', height: '50px' }}>
      </Col>
    </Row>
    </>

  )
}

export default Contacts
