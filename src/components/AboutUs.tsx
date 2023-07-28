import {FaHandHolding,FaSyringe,FaSpeakerDeck,FaWalking,FaBroadcastTower,FaAddressCard,FaAccessibleIcon, FaClinicMedical,FaAngular } from 'react-icons/fa';
import Navigation from './Layouts/NavigationBar';
import { whyChoose,whyChooseIcons,clinicalProcess,processIcons, clinicalNumbers, numberIcons } from './DataFiles/ClinicalProcess';
import {AiOutlineSwapRight} from 'react-icons/ai'
import ServicesHeader from './Services/ServicesHeader';
import Pic from '../assets/doc.png';
import { Row,Col } from 'react-bootstrap';
import Footer from './Layouts/Footer';
import React from 'react';
const AboutUs = () => {
    const coreValues = ['Patient-Centered Care','Excellence','Integrity','Collaboration','Teamwork']
  return (
<div>
  <Navigation/>
    <ServicesHeader pathname = {window.location.pathname}/>
      <Row style={{margin:'100px 3% 5% 3%'}}>
      <Col>
       <div>
      <h2>About Us</h2>
    <p>Welcome to Cedar Clinic, where your health is our priority. At Cedar, we are dedicated to providing comprehensive and compassionate medical care to individuals and families. Our team of experienced healthcare professionals is committed to delivering personalized treatment plans tailored to meet your unique needs. From routine check-ups to specialized treatments, we strive to ensure your well-being at every step.
<br></br><br></br><p>
With state-of-the-art facilities and the latest medical advancements, Cedar Clinic is your trusted partner in achieving and maintaining optimal health. Trust us to be your healthcare destination, where quality care and patient satisfaction are at the heart of everything we do.
</p>
  </p>
    </div>
      </Col>
      <Col md = {12} lg={7} className='about-img'>
      <img  style = {{width:'auto',height:'400px'}}src={Pic}/>
    </Col>
  </Row>
<Row style = {{margin:'2% 0% 0% 5% '}}>
  <Col>
    <div className='about-mvv'>
     <h2>Mission</h2>
    <p>Our mission at Cedar Clinic is to enhance the health and well-being of our community by providing exceptional medical care, promoting preventive practices, and fostering a culture of compassion and trust.</p>
  </div>
    </Col>
      <Col>
      <div className='about-mvv'>
        <h2>Vision</h2>
      <p>Our vision at Cedar Clinic is to be the leading healthcare provider in our region, recognized for our commitment to excellence, innovation, and patient-centered care. We aim to continuously improve and expand our services to meet the evolving needs of our community.</p>
      </div>
    </Col>
  <Col>
    <h2>Values</h2>
      {coreValues.map((value)=>(
        <ul>
      <li>{value}</li>
    </ul>
    ))}
  </Col>
</Row>
<div style = {{minHeight:'70vh',backgroundColor:'#00c056e5'}}>
  <div style={{color:'white',textAlign:'center'}}>
      <h1>Why Choose Us</h1>
      <h6 style={{marginTop:'2%'}}> Our experienced team will ensure that your health and well-being are our top priorities.</h6>
  </div>
    <Row>
     {whyChoose.map((item:any)=>(
    <Col sm={12} md={12} lg={3}>
      <div style={{display:'block',justifyContent:'center',paddingBottom:'5%'}}>
     
      <div style={{display:'flex',justifyContent:'center',marginTop:'10%'}}>
          {React.createElement(whyChooseIcons[item.id], { style: { width: '50px', height: '50px', color: 'white' } })}
             </div>
             <div style={{color:'white', textAlign:'center'}} >
        <h4>{item.title}</h4>
  
      </div>
  
       
      </div>
  
    </Col>
  ))
  }
  </Row>
  </div>
  <div style={{width:'100vw',height:'100%',background:'white'}}>
    <Row className='counter-row'>
    {clinicalNumbers.map((item:any)=>(
      <Col className='counter-col'key={item.id}>
        {React.createElement(numberIcons[item.id],{style:{color:'#00c056e5', width:'40px',height:'40px'}})}
        <h3>{`${item.number} +`}</h3>
        <h5>{item.title}</h5>
      </Col>
    ))}
    </Row>
<div style ={{textAlign:'center', paddingTop:'5%',color:'#00c056e5'}}>
<h1>Our Clinical Process</h1>
</div>
<Row style={{paddingBottom:'10%',backgroundColor:'wheat'}}>
  {clinicalProcess.map((item:any)=>(
<Col className = 'rotating-col'key={item.id}>
  <div className = 'rotating-parent'>
    <div className='rotating-div'>
      <div className='rotating-border' >
</div>
  <div >
    <div className='circle'>
      <span className='number'>{`0${item.id}`}</span>
      </div>
      {React.createElement(processIcons[item.id],{style:{color:'#00c056e5',height:'50px',width:'50px'}})}
    </div>
</div>
  </div>
<div className='process-text'>
  <h5 style={{color:'#00c056e5'}}>{item.name}</h5>
    <p>{item.description}</p>
    </div>

  </Col>
))}
</Row>
  </div>
    <Footer/>
   
</div>
  )
}
export default AboutUs
