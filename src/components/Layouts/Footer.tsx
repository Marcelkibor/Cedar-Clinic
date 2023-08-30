import { Col, Row } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import {SiGmail} from 'react-icons/si';
import {BiMessageRounded} from 'react-icons/bi'
import {ImLocation} from 'react-icons/im'


const Footer = () => {
  return (
    <div className='footer-main'>
      <div style = {{marginLeft:'2%',marginRight:'5%', color:"white"}}>
      <Row style = {{color:"white"}}>
        <Col>
        <h4 >About Us </h4>
        <hr style={{ minWidth:'480px', border: 'none', borderBottom: '1px solid white' }} />
        <p style={{maxWidth:'480px', color:'white',fontSize:'16px'}}>
        At Cedar Clinic, we prioritize your well-being and understand that each individual has unique healthcare needs. Our experienced medical professionals are committed to offering personalized treatment plans tailored to your specific requirements.
        <br></br>
         We believe in fostering long-lasting relationships built on trust and open communication, ensuring that you receive the highest quality of care throughout your medical journey.
        </p>
        </Col>
        <Col>
        <h4>Contact Info</h4>
        <hr style={{ width:'300px', border: 'none', borderBottom: '1px solid white' }} />
          <div style = {{display:'flex', gap:'10px'}}>
            <SiGmail size = {20}/>
            <p>cedarclinic@gmail.com</p>
          </div>
          <div style = {{display:'flex', gap:'10px'}}>
            <BiMessageRounded size = {25}/>
            <p>0712345678</p>
          </div>
          <div style = {{display:'flex', gap:'10px'}}>
            <ImLocation size = {30}/>
            <p>Makasembo Street, Off Nairobi Highway , P.O.Box 2670 30100, Eldoret, Kenya</p>
          </div>
        </Col>
        <Col>
        <h4>Links</h4>
        <hr style={{ width:'300px', border: 'none', borderBottom: '1px solid white' }} />
        <div>
          <p>About Us</p>
          <p>Medical Services</p>
          <p>Doctors</p>
          <p>Book Appointment</p>
        </div>
        </Col>
      </Row>
      <Row>
        <Col>
       <h4>Socialize</h4>
       <hr style={{ minWidth:'480px', border: 'none', borderBottom: '1px solid white' }} />
        <div style = {{display:'flex', gap:'10%'}}>
        <FaFacebook size = {25}/>
        <FaTwitter size = {25}/>
        <FaInstagram size = {25}/>
        </div>
        </Col>
      </Row>
      </div>
      
    </div>
  )
}

export default Footer
