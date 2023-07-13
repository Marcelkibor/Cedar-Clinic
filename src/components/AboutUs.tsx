import { FaHandHolding,FaSyringe,FaSpeakerDeck,FaWalking,FaBroadcastTower,FaAddressCard,FaAccessibleIcon, FaClinicMedical,FaAngular } from 'react-icons/fa';
import Navigation from './Layouts/NavigationBar';
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
            <h2>Mission</h2>
            <p>Our mission at Cedar Clinic is to enhance the health and well-being of our community by providing exceptional medical care, promoting preventive practices, and fostering a culture of compassion and trust.</p>
            </Col>
            <Col>
            <h2>Vision</h2>
            <p>Our vision at Cedar Clinic is to be the leading healthcare provider in our region, recognized for our commitment to excellence, innovation, and patient-centered care. We aim to continuously improve and expand our services to meet the evolving needs of our community.</p>
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
        <div style = {{position:'relative',height:'100vh',backgroundColor:'#00c056e5'}}>
            <div style={{textAlign:'center', color:'white',paddingTop:'4%'}}>
                <h1>Why Choose Us</h1>
                <p> Our experienced team will ensure that your health and well-being are our top priorities.</p>
            </div>
            <Row style = {{margin:'10% 0% 0% 5%', color:'white'}}>
              <Col>
                    <div style={{ textAlign: 'left', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ marginTop:'-20%',display: 'block', textAlign: 'center' }}>
                        <FaHandHolding size={70} />
                        <h4 style={{ textAlign: 'center' }}>Comprehensive Care</h4>
                    </div>
                    <div style={{ marginLeft: '10%', width: '2px', backgroundColor: 'white', height: '70px' }}></div>
                    </div>            
              </Col> 
              <Col>
              <div style = {{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <div style={{ marginTop:'-20%',display: 'block', textAlign: 'center' }}>
                <FaBroadcastTower size={70}/>
              <h4>
              Patient-Centric Approach
              </h4>
              </div>
            
              <div style={{marginLeft:'10%',width:'2px', backgroundColor:'white',height:'70px'}}></div>
              </div>
              </Col>      
              <Col>
              <div style = {{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <div style={{ marginTop:'-20%',display: 'block', textAlign: 'center' }}>
                <FaAccessibleIcon size={70}/>
              <h4>
              Expert Medical Team
              </h4>
              </div>
              
              <div style={{marginLeft:'10%',width:'2px', backgroundColor:'white',height:'70px'}}></div>
              </div>
              </Col> 
              <Col>
              <div style = {{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <div style={{ marginTop:'-20%',display: 'block', textAlign: 'center' }}>
              <FaAccessibleIcon size={70}/>
              <h4>
              Seamless Operation
              </h4>
              </div>
              <div style={{marginLeft:'10%',width:'2px', backgroundColor:'white',height:'70px'}}></div>
              </div>
              </Col> 
              <div style = {{color:'white',textAlign:'center',margin:'10% 0% 0% 0%'}}>
                <p>To provide you with quality care of all your health needs</p>
            </div>
            </Row>
            <div style={{marginLeft:'5%',width:'90vw',height:'fit-content',background:'white'}}>
            <Row style={{padding:'5% 0% 0% 5%'}}>
                        <Col>
                        <div style = {{margin:'12% 0% 0% 5%', display:'flex'}}>
                        <FaClinicMedical color = '' size = {70}/>
                        <div style = {{display:'block',margin:'5%'}}>
                            <h2 >20+</h2>
                        <h5>Specialized Services</h5>
                        </div>
                      
                        </div>
                        </Col>
                        <Col>
                        <div style = {{margin:'12% 0% 0% 5%', display:'flex'}}>
                        <FaClinicMedical color = '' size = {70}/>
                        <div style = {{display:'block',margin:'5%'}}>
                            <h2 >20+</h2>
                        <h5>Specialized Services</h5>
                        </div>
                        </div>
                        </Col>
                        <Col>
                        <div style = {{margin:'12% 0% 0% 5%', display:'flex'}}>
                        <FaClinicMedical color = '' size = {70}/>
                        <div style = {{display:'block',margin:'5%'}}>
                            <h2 >20+</h2>
                        <h5>Specialized Services</h5>
                        </div>
                        </div>
                        </Col>
                        <Col>
                        <div style = {{margin:'12% 0% 0% 5%', display:'flex'}}>
                        <FaClinicMedical color = '' size = {70}/>
                        <div style = {{display:'block',margin:'5%'}}>
                            <h2 >20+</h2>
                        <h5>Specialized Services</h5>
                        </div>
                        </div>
                        </Col>
                    </Row>
                <div style ={{textAlign:'center', paddingTop:'5%',color:'#00c056e5'}}>
                    <h1>Our Clinical Process</h1>
                </div>
                <Row style={{margin:'8% 0% 0% 5%'}}>
                <Col>
  <div className='rotating-div'>
    <div className='rotating-border'></div>
   <FaAddressCard size = {50} color = '#00c056e5'/>
  </div>
  <div style={{textAlign:'center',margin:'10% 0% 0% -40%'}}>
    <h5 style={{color:'#00c056e5'}}>Check-In</h5>
    <p>Walk into the clinic</p>
  </div>
</Col>

  <Col>
    <div className='rotating-div'>
        <div className='rotating-border'>
        </div>
        <FaAngular size = {50} color = '#00c056e5'/>
    </div>
    <div style={{textAlign:'center',margin:'10% 0% 0% -40%'}}>
    <h5 style={{color:'#00c056e5'}}>Vital Assesment</h5>
    <p>Checking vitals:<br></br>Pulse,Weight e.t.c</p>
  </div>
  </Col>
  <Col>
    <div className='rotating-div'>
    <div className='rotating-border'>
    </div>
    <FaSpeakerDeck size = {50} color = '#00c056e5'/>
    </div>
    <div style={{textAlign:'center',margin:'10% 0% 0% -40%'}}>
    <h5 style={{color:'#00c056e5'}}>Consultation</h5>
    <p>Explain your issue<br></br> to a doctor</p>
  </div>
  </Col>
  <Col>
    <div className='rotating-div'>
    <div className='rotating-border'>
    </div>
    <FaSyringe size = {50} color = '#00c056e5'/>
    </div>
    <div style={{textAlign:'center',margin:'10% 0% 0% -40%'}}>
    <h5 style={{color:'#00c056e5'}}>Treatment</h5>
    <p>Recieve treatment <br></br>and prescription(s)</p>
  </div>
  </Col>
  <Col>
    <div className='rotating-div'>
    <div className='rotating-border'>
    </div>
    <FaWalking size = {50} color = '#00c056e5' />
    </div>
    <div style={{textAlign:'center',margin:'10% 0% 0% -40%'}}>
    <h5 style={{color:'#00c056e5'}}>Discharge</h5>
    <p>Leave the clinic</p>
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
