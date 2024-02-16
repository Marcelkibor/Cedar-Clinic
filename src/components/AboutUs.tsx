import Navigation from './Layouts/NavigationBar';
import { whyChoose,whyChooseIcons,clinicalNumbers,numberIcons } from './DataFiles/ClinicalProcess';
import ServicesHeader from './Services/ServicesHeader';
import { Row,Col } from 'react-bootstrap';
import {motion, useAnimation} from 'framer-motion'
import Footer from './Layouts/Footer';
import CountUp from 'react-countup';
import { isInViewport } from './utils/Functions';
import React, { useEffect, useState } from 'react';
import {popUp } from './Effects/AnimationsPack';
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


    const coreValues = ['Cooperation','Dignity & Reverence','Heritage','Integrity','Teamwork','Trust','Safety']
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
      <p className='header1'>About Us</p>
    <p style={{color:'#075243'}}>Welcome to Cedar Clinic, where your health is our priority. At Cedar, we are dedicated to providing comprehensive and compassionate medical care to individuals and families. Our team of experienced healthcare professionals is committed to delivering personalized treatment plans tailored to meet your unique needs. From routine check-ups to specialized treatments, we strive to ensure your well-being at every step.
<br></br><br></br><p>
With state-of-the-art facilities and the latest medical advancements, Cedar Clinic is your trusted partner in achieving and maintaining optimal health. Trust us to be your healthcare destination, where quality care and patient satisfaction are at the heart of everything we do.
</p>
  </p>
    </motion.div>
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
     <p className='header1'>Mission</p>
    <p style={{color:'#075243'}}>Dedicated to provision of quality patient care with unrelenting attention to clinical excellence, patient safety and an unparalleled passion and commitment to assure the very best healthcare for those we serve.<br></br>To improve the health and well-being of our community by providing quality health care services with caring, compassion and skill while demonstrating the highest standards of service excellence in all interactions inside and outside the Hospital community.</p>
  </motion.div>
    </Col>
      <Col>
      <motion.div className='about-mvv'
      id='values'
        initial='hidden'
        variants={popUp(1)}
        animate={mVV}
      >
        <p className='header1'>Vision</p>
      <p style={{color:'#075243'}}>To be exceptional community associate in meeting the healthcare needs of the entire neighborhood through incomparable patient care and wellness programs.</p>
      </motion.div>
    </Col>
  <Col>
  <motion.div
  id='vision'
  initial='hidden'
  variants={popUp(0.7)}
  animate={mVV}
  >
  <p className='header1'>Values</p>
      {coreValues.map((value)=>(
        <ul style={{color:'#075243',fontFamily:'Merriweather serif'}}>
      <li>{value}</li>
    </ul>
    ))}
  </motion.div>
  </Col>
</Row>
<div style={{width:'100%',minHeight:'300px',backgroundColor:'#2f927e',paddingBottom:'10px'}}>
<Row style={{width:'100%'}}>
  <div style={{color:'white',textAlign:'center'}}>
      <p className='header2'>Why Choose Us</p>
      <p style={{marginTop:'2%'}}> Our experienced team will ensure that your health and well-being are our top priorities.</p>
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
        <p style={{fontSize:'20px'}}>{item.title}</p>
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
  <div 
  style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
    <Row className='counter-row' style={{minHeight:'50vh'}}>
    {count && clinicalNumbers.map((item:any)=>(
      <Col className='counter-col'key={item.id} style={{padding:'0px 50px 0px 50px'}}>
        {React.createElement(numberIcons[item.id],{style:{color:'#096b57', width:'40px',height:'40px'}})}
        <p style={{color:'#006266',fontSize:'20px',fontWeight:'bold'}}><CountUp start={0} end={item.number} delay={0.5}/>+</p>
        <p style={{color:'#075243',fontSize:'20px'}}>{item.title}</p>
      </Col>
    ))}
    </Row>
    </div>
  </section>
</div>
<div style={{width:'100%',height:'100%',backgroundColor:'#2f927e'}}>
<Row style={{paddingBottom:'10%',backgroundColor:'#2f927e', width:'100%'}}>
<div style ={{textAlign:'center',color:'white'}}>
<p className='header2' style={{marginTop:'20px'}}>Our Clinical Process</p>
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
