import Navigation from './Layouts/NavigationBar';
import { whyChoose,whyChooseIcons,clinicalNumbers,numberIcons } from './DataFiles/ClinicalProcess';
import ServicesHeader from './Services/ServicesHeader';
import Pic from '../assets/doc.png';
import { Row,Col } from 'react-bootstrap';
import {motion, useAnimation} from 'framer-motion'
import Footer from './Layouts/Footer';
import CountUp from 'react-countup';
import { isInViewport } from './utils/Functions';
import React, { useEffect, useState } from 'react';
import {fadeLeft, popUp } from './Effects/AnimationsPack';
import Timeline from './Timeline';
import ScrollMotion from './utils/ScrollMotion';

const AboutUs=() => {
  const mVV = useAnimation();
  const counterAnim  =useAnimation();
  const [count,setCount] = useState(false)
  const iconAnim = useAnimation();
  const [sections] = useState<string[]>([
    "mission",
    "values",
    "vision",
    "icons",
    "counter"
  ])


    const coreValues = ['Patient-Centered Care','Excellence','Integrity','Collaboration','Teamwork']
  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        const isVisible = isInViewport(element, -20);
        if (section === "mission") {
          if (isVisible) {
            mVV.start('visible');
          }
        }
        else if (section === "icons") {
          if(isInViewport(element,-15)){
            console.log(`section ${section} found`)
            iconAnim.start('visible')
          }
         
        }
        else if(section==="values"){
          if (isVisible) {
            mVV.start('visible');
          }
        }
       else if(section==="vision"){
          if (isVisible) {
            mVV.start('visible');
          }
        }
        if(section ==="counter"){
          if(isInViewport(element,-20)){
            setCount(true)
            counterAnim.start('visible')
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections, mVV]);
  return (
<div >
  <Navigation/>
  <ScrollMotion/>
    <ServicesHeader pathname = {window.location.pathname}/>
      <Row style={{margin:'100px 0% 5% 0%'}}>
      <Col>
       <motion.div
       variants={popUp(0.8)}
       initial='hidden'
       animate='visible'
       >
      <h2 style={{color:'#006266'}}>About Us</h2>
    <p style={{color:'#0a3d62'}}>Welcome to Cedar Clinic, where your health is our priority. At Cedar, we are dedicated to providing comprehensive and compassionate medical care to individuals and families. Our team of experienced healthcare professionals is committed to delivering personalized treatment plans tailored to meet your unique needs. From routine check-ups to specialized treatments, we strive to ensure your well-being at every step.
<br></br><br></br><p>
With state-of-the-art facilities and the latest medical advancements, Cedar Clinic is your trusted partner in achieving and maintaining optimal health. Trust us to be your healthcare destination, where quality care and patient satisfaction are at the heart of everything we do.
</p>
  </p>
    </motion.div>
  </Col>
  <Col md = {12} lg={7} className='about-img'>
    <div style={{width:'100%',height:'100%'}}
   >
    <img  style = {{width:'auto',height:'400px'}}src={Pic}/>
    </div>
    </Col>
  </Row>
   
<Row style = {{margin:'2% 0% 0% 5% '}}>
  <Col>
  <motion.div id = 'mission'  
  initial='hidden'
  variants={popUp(0.8)}
  animate={mVV}
  className='about-mvv'
>
     <h2 style={{color:'#006266'}}>Mission</h2>
    <p style={{color:'#0a3d62'}}>Our mission at Cedar Clinic is to enhance the health and well-being of our community by providing exceptional medical care, promoting preventive practices, and fostering a culture of compassion and trust.</p>
  </motion.div>
    </Col>
      <Col>
      <motion.div className='about-mvv'
      id='values'
        initial='hidden'
        variants={popUp(1)}
        animate={mVV}
      >
        <h2 style={{color:'#006266'}}>Vision</h2>
      <p style={{color:'#0a3d62'}}>Our vision at Cedar Clinic is to be the leading healthcare provider in our region, recognized for our commitment to excellence, innovation, and patient-centered care. We aim to continuously improve and expand our services to meet the evolving needs of our community.</p>
      </motion.div>
    </Col>
  <Col>
  <motion.div
  id='vision'
  initial='hidden'
  variants={fadeLeft}
  animate={mVV}
  >
  <h2 style={{color:'#006266'}}>Values</h2>
      {coreValues.map((value)=>(
        <ul style={{color:'#0a3d62'}}>
      <li>{value}</li>
    </ul>
    ))}
  </motion.div>
  </Col>
</Row>
<div style={{width:'100%',minHeight:'300px',backgroundColor:'#2f927e',paddingBottom:'10px'}}>
<Row style={{width:'100%'}}>
  <div style={{color:'white',textAlign:'center'}}>
      <h2>Why Choose Us</h2>
      <h6 style={{marginTop:'2%'}}> Our experienced team will ensure that your health and well-being are our top priorities.</h6>
  </div>
    <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
     {whyChoose.map((item:any)=>(
    <Col sm={12} md={12} lg={3}>
      <motion.div
      style={{display:'block',justifyContent:'center',paddingBottom:'5%',marginLeft:'40px'}}>
      <div
      style={{display:'flex',justifyContent:'center',marginTop:'10%'}}>
          {React.createElement(whyChooseIcons[item.id], { style: { width: '50px', height: '50px', color: 'white' } })}
             </div>
             <div
             style={{color:'white', textAlign:'center'}} >
        <h5>{item.title}</h5>
      </div>
      </motion.div>
    </Col>
  ))
  }
  </Row>
  </Row>
</div>
<div style={{width:'100%',height:'100%'}}>
<section id = "counter">
  <motion.div 
  animate={counterAnim}
  initial='hidden'
  variants={popUp(0.5)}
  style={{width:'100%',height:'100%',background:'white'}} >
    <Row className='counter-row' style={{minHeight:'50vh'}}>
    {count && clinicalNumbers.map((item:any)=>(
      <Col className='counter-col'key={item.id}>
        {React.createElement(numberIcons[item.id],{style:{color:'#01a3a4', width:'40px',height:'40px'}})}
        <h2 style={{color:'#006266'}}><CountUp start={0} end={item.number} delay={0.5}/>+</h2>
        <h5 style={{color:'#0a3d62'}}>{item.title}</h5>
      </Col>
    ))}
    </Row>
    </motion.div>
  </section>
</div>
<div style={{width:'100%',height:'100%',backgroundColor:'#2f927e'}}>
<Row style={{paddingBottom:'10%',backgroundColor:'#2f927e', width:'100%'}}>
<div style ={{textAlign:'center',color:'white'}}>
<h2 style={{color:'white'}}>Our Clinical Process</h2>
</div>
  <Col>
<Timeline/>
    </Col>
</Row>
</div>  
<Footer/>
</div>
  )
}
export default AboutUs
