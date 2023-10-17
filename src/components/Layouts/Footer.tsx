import { Col, Row } from 'react-bootstrap'
import {SiGmail} from 'react-icons/si';
import {BiMessageRounded} from 'react-icons/bi'
import {ImLocation} from 'react-icons/im'


const Footer = () => {
  return (
    <div className='footer-main'>
      <div style = {{color:"white"}}>
      <Row style = {{color:"white",width:'100%'}}>
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
      </div>
    </div>
  )
}

export default Footer
