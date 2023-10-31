import Navigation from './Layouts/NavigationBar'
import ServicesHeader from './Services/ServicesHeader'
import {Row,Col} from 'react-bootstrap';
import {FaAddressBook,FaWalking,FaPhone} from 'react-icons/fa'
import Footer from './Layouts/Footer'
import {MdEmail} from 'react-icons/md'
import EmailPrompt from './Services/EmailPrompt';
import { useEffect } from 'react';
const Contacts = () => {
  useEffect(()=>{
    const top = document.getElementById("nav");
    if(top){
      top.scrollIntoView();
    }
  },[])
  return (
    <>
      <div id='nav'>
        <Navigation/>
        </div>
        <ServicesHeader pathname = {window.location.pathname}/>
     <Row className='contact-main'>
      <p className='header1'>Contact Us</p>
      <Col md={4} sm={6} lg={4} className="mr-2" style={{height: 'fit-content',marginTop:'2%' }}>
      <>
      <div style={{display:'flex'}}>
      <MdEmail  color = "#16a085"size = {50}/>
      <div style = {{display:'block', marginLeft:'5%'}}>
      <p style={{color:'#16a085',fontSize:'18px',fontWeight:'bold'}}>Email</p>
      <p>cedarclinic@gmail.com</p>
      </div>
      </div>
      <div style={{display:'flex',marginTop:'50px'}}>
        <FaAddressBook color = "#16a085" size = {50}/>
        <div style = {{display:'block', marginLeft:'5%'}}>
        <p style={{color:'#16a085',fontSize:'18px',fontWeight:'bold'}}>Address</p>
      <p>Makasembo Street, Off Nairobi Highway , P.O.Box 2670 50100, Eldoret, Kenya</p>
        </div>
      </div>
      <div style={{display:'flex',marginTop:'50px'}}>
        <FaPhone color = "#16a085" size = {50}/>
        <div style = {{display:'block', marginLeft:'5%'}}>
        <p style={{color:'#16a085',fontSize:'18px',fontWeight:'bold'}}>Call Us</p>
        <p>0712345678</p>
        </div>
      </div>
      <div style={{display:'flex',marginTop:'50px'}}>
        <FaWalking color = "#16a085" size = {50}/>
        <div style = {{display:'block', marginLeft:'5%'}}>
        <p style={{color:'#16a085',fontSize:'18px',fontWeight:'bold'}}>Visiting Hours</p>
        <p>8:00am - 5:00pm </p>
        </div>
      </div>
      </>
      </Col>
      <Col>
      <EmailPrompt/>
      </Col>
    </Row>
    <Row>
      <Footer/>
    </Row>
    </>

  )
}

export default Contacts
