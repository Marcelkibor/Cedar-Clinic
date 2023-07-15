import {FaHandHolding,FaSyringe,FaSpeakerDeck,FaWalking,FaBroadcastTower,FaAddressCard,FaAccessibleIcon, FaClinicMedical,FaAngular } from 'react-icons/fa';
import Navigation from './Layouts/NavigationBar';
import {AiOutlineSwapRight} from 'react-icons/ai'
import ServicesHeader from './Services/ServicesHeader';
import Pic from '../assets/doc.png';
import { Row,Col } from 'react-bootstrap';
import Footer from './Layouts/Footer';
const AboutUs = () => {
    const coreValues = ['Patient-Centered Care','Excellence','Integrity','Collaboration','Teamwork']
  return (
    <div>
  <Navigation/>
  <ServicesHeader pathname = {window.location.pathname}/>
  <Row style={{marginTop:'100px'}}>
      <Col>
      <div style={{marginLeft:'10%', marginTop:'10%'}}>
      <h2>About Us</h2>
      <p>
      Welcome to Cedar Clinic, where your health is our priority. At Cedar, we are dedicated to providing comprehensive and compassionate medical care to individuals and families. Our team of experienced healthcare professionals is committed to delivering personalized treatment plans tailored to meet your unique needs. From routine check-ups to specialized treatments, we strive to ensure your well-being at every step.
      <br></br><br></br><p>
      With state-of-the-art facilities and the latest medical advancements, Cedar Clinic is your trusted partner in achieving and maintaining optimal health. Trust us to be your healthcare destination, where quality care and patient satisfaction are at the heart of everything we do.
      </p>
      </p>
      </div>
      </Col>
      <Col>
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
  <div style = {{position:'relative',height:'fit-content',backgroundColor:'#00c056e5'}}>
      <div style={{textAlign:'center', color:'white',paddingTop:'4%'}}>
          <h1>Why Choose Us</h1>
          <p> Our experienced team will ensure that your health and well-being are our top priorities.</p>
      </div>
      <Row className='why-choose-row'>
        <Col>
              <div style={{ textAlign: 'left', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className = 'why-choose-icons'>
                  <FaHandHolding size={70} />
                  <h4 style={{ textAlign: 'center' }}>Comprehensive Care</h4>
              </div>
              </div>            
        </Col> 
        <Col>
        <div style = {{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className = 'why-choose-icons'>
          <FaBroadcastTower size={70}/>
        <h4>
        Patient-Centric Approach
        </h4>
        </div>
      

        </div>
        </Col>      
        <Col>
        <div style = {{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className = 'why-choose-icons'>
          <FaAccessibleIcon size={70}/>
        <h4>
        Expert Medical Team
        </h4>
        </div>
        

        </div>
        </Col> 
        <Col>
        <div style = {{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className = 'why-choose-icons'>
        <FaAccessibleIcon size={70}/>
        <h4>
        Seamless Operation
        </h4>
        </div>

        </div>
        </Col> 
        <div style = {{color:'white',textAlign:'center',margin:'10% 0% 0% 0%'}}>
          <p>To provide you with quality care of all your health needs</p>
      </div>
      </Row>
      <div style={{width:'100vw',height:'100%',background:'white'}}>
<Row className='counter-row'>
    <Col>
    <div className='counter-item'>
    <FaClinicMedical  color = '#00c056e5' size = {70}/>
   <h2 >20+</h2>
    <h5>Specialized Services</h5>
    </div>
    </Col>
    <Col>
    <div className='counter-item'>
    <FaClinicMedical  color = '#00c056e5' size = {70}/>
        <h2 >20+</h2>
    <h5>Specialized Services</h5>
    </div>
    </Col>
    <Col>
    <div className='counter-item'>
    <FaClinicMedical  color = '#00c056e5' size = {70}/>
        <h2 >20+</h2>
    <h5>Specialized Services</h5>
    </div>
    </Col>
    <Col>
    <div className='counter-item'>
    <FaClinicMedical  color = '#00c056e5' size = {70}/>
        <h2 >20+</h2>
    <h5>Specialized Services</h5>
    </div>
    </Col>
</Row>
<div style ={{textAlign:'center', paddingTop:'5%',color:'#00c056e5'}}>
<h1>Our Clinical Process</h1>
</div>
<Row >
<Col>
<div className = 'rotating-parent'>
<div className='rotating-div'>
    <div className='rotating-border' ></div>
    <div >
    <div className='circle'>
    <span className='number'>01</span>
  </div>
    <FaAddressCard size = {50} color = '#00c056e5'/>
    </div>
  </div>
  <div>
    <h5 style={{color:'#00c056e5'}}>Check-In</h5>
    <p>Walk into the clinic</p>
  </div>
</div>

</Col>
  <Col>
  <div className = 'rotating-parent'>
  <div className='rotating-div'>
        <div className='rotating-border'>
        </div>
        <div className='circle'>
    <span className='number'>02</span>
  </div>
        <FaAngular size = {50} color = '#00c056e5'/>
    </div>
    <div>
    <h5 style={{color:'#00c056e5'}}>Vital Assesment</h5>
    <p>Checking vitals:<br></br>Pulse,Weight e.t.c</p>
  </div>
  </div>
  </Col>
  <Col>
  <div className = 'rotating-parent'>
  <div className='rotating-div'>
    <div className='rotating-border'>
    </div>
    <div className='circle'>
    <span className='number'>03</span>
  </div>
    <FaSpeakerDeck size = {50} color = '#00c056e5'/>
    </div>
    <div>
    <h5 style={{color:'#00c056e5'}}>Consultation</h5>
    <p>Explain your health issue<br></br> to a doctor</p>
  </div>
  </div>
  </Col>
  <Col>
  <div className = 'rotating-parent'>
  <div className='rotating-div'>
    <div className='rotating-border'>
    </div>
    <div className='circle'>
    <span className='number'>04</span>
  </div>
    <FaSyringe size = {50} color = '#00c056e5'/>
    </div>
    <div>
    <h5 style={{color:'#00c056e5'}}>Treatment</h5>
    <p>Recieve treatment <br></br>and prescription(s)</p>
  </div>
  </div>
  </Col>
  <Col>
  <div className = 'rotating-parent'>
  <div className='rotating-div'>
    <div className='rotating-border'>
    </div>
    <div className='circle'>
    <span className='number'>05</span>
  </div>
    <FaWalking size = {50} color = '#00c056e5' />
    </div>
    <div>
    <h5 style={{color:'#00c056e5'}}>Discharge</h5>
    <p>Leave the clinic</p>
  </div>
  </div>

  </Col>
</Row>
</div>
  <Footer/>
    </div>
  
</div>
        
  )
}

export default AboutUs
