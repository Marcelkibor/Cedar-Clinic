import React from 'react'
import Navigation from './Layouts/NavigationBar'
import ServicesHeader from './Services/ServicesHeader'
import {Row,Col} from 'react-bootstrap';
import Doc from '../assets/doc.png'
import {FaMailBulk,FaAddressBook,FaWalking,FaPhone} from 'react-icons/fa'
import Footer from './Layouts/Footer'
const Contacts = () => {
  return (
    <>
      <div>
        <Navigation/>
        <ServicesHeader pathname = {window.location.pathname}/>
      </div>
     <Row style = {{marginTop:'90px',marginLeft:'5%'}}>
      <h2>Contact Us</h2>
      <Col md={4} sm={6} lg={4} className="mr-2" style={{height: 'fit-content',marginTop:'2%' }}>
      <>
      <div style={{display:'flex'}}>
      <FaMailBulk size = {30}/>
      <div style = {{display:'block', marginLeft:'5%'}}>
      <h5>Email</h5>
      <p>cedarclinic@gmail.com</p>
      </div>
      </div>
      <div style={{display:'flex',marginTop:'50px'}}>
        <FaAddressBook size = {30}/>
        <div style = {{display:'block', marginLeft:'5%'}}>
        <h5>Address</h5>
      <p>Makasembo Street, Off Nairobi Highway , P.O.Box 2670 30100, Eldoret, Kenya</p>
        </div>
      </div>
      <div style={{display:'flex',marginTop:'50px'}}>
        <FaPhone size = {30}/>
        <div style = {{display:'block', marginLeft:'5%'}}>
        <h5>Call Us</h5>
        <p>0712345678</p>
        </div>
      </div>
      <div style={{display:'flex',marginTop:'50px'}}>
        <FaWalking size = {30}/>
        <div style = {{display:'block', marginLeft:'5%'}}>
        <h5>Visiting Hours</h5>
        <p>8:00am - 5:00pm </p>
        </div>
      </div>
      </>
      </Col>
    </Row>
    <Row>
      <Footer/>
    </Row>
    </>

  )
}

export default Contacts
