import { Col, Row } from 'react-bootstrap';
import Img from '../assets/doc.png';
import { FaClinicMedical, FaPills } from 'react-icons/fa';
const LandingPage = () => {
    return (
  <div>
    <Row>
    <div style={{position:'relative'}}>
    <div className = 'landing-img-div'>
        <img style={{height:'100vh'}} src={Img}/>
    </div>
    <div className = 'ceda-intro'>
            <h1><FaClinicMedical  color = 'green'size={20}/><br></br>Cedar Clinic</h1>
                <p>Providing complete healthcare support</p>
                <div style={{display:'flex'}}>
                    <button className='home-bt'>Read More</button>
                    <button className='home-bt'>Services</button>
                </div>   
        </div>
    </div>
    </Row>

    </div>
    )
  }
  
  export default LandingPage
//   <div style={{position:'absolute',top:'100%'}}>
//   <Row>
//   <Col className='col-hov'>
//   <div className='intro-cards'>
//   <FaPills size = {150}/>
//   </div>

//   </Col>
//   <Col className='col-hov'>
//   <div className='intro-cards'>
//   <FaPills size = {150}/>
//   </div>
//   </Col>
//   <Col className='col-hov'>
//   <div className='intro-cards'>
//   <FaPills size = {150}/>
//   </div>
//   </Col>
// </Row>
//   </div>
