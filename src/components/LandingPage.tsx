import { Col, Row } from 'react-bootstrap';
import Img from '../assets/doc.png';
import { FaClinicMedical, FaPills } from 'react-icons/fa';
const LandingPage = () => {
    return (
  <div>
    <div className = 'landing-img-div'>
        <img style={{height:'100vh'}} src={Img}/>
    </div>
    <div className = 'landing-details'>
        <div>
            <h1><FaClinicMedical  color = 'green'size={20}/><br></br>Cedar Clinic</h1>
                <p>Providing complete healthcare support</p>
                <div style={{display:'flex'}}>
                    <button className='home-bt'>Read More</button>
                    <button className='home-bt'>Services</button>
                </div>   
        </div>
    </div>
    <div style={{width:'100vw',height:'10vw',background:'#218c74',position:'relative'}}>
      <p style={{maxWidth:'800px',position:'absolute',textAlign:'left', top:'30%',left:'3%'}}>We look forward to providing you with an unforgettable experience. Book your appointment today and let us take care of your health.</p>
      <button style={{width:'200px',color:'white',fontWeight:'bolder',background:'#ff7f50',height:'60px',top:'32%',right:'10%',position:'absolute'}}>
        Book Appointment
        </button>
    </div>
    <div style={{marginTop:'8px',marginLeft:'2%',marginRight:'2%'}}>
      <Row>
        <Col className='col-hov'>
        <div className='intro-cards'>
        <FaPills size = {150}/>
        </div>
     
        </Col>
        <Col className='col-hov'>
        <div className='intro-cards'>
        <FaPills size = {150}/>
        </div>
        </Col>
        <Col className='col-hov'>
        <div className='intro-cards'>
        <FaPills size = {150}/>
        </div>
        </Col>
        <Col className='col-hov'>
        <div className='intro-cards'>
        <FaPills size = {150}/>
        </div>
        </Col>
      </Row>
    </div>
  </div>
    )
  }
  
  export default LandingPage
  