import { Col, Row } from 'react-bootstrap'
import {SiGmail} from 'react-icons/si';
import {BiMessageRounded} from 'react-icons/bi'
import {ImLocation} from 'react-icons/im'
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='footer-main' style={{fontFamily:'Merriweather serif'}}>
      <div style = {{color:"white"}}>
      <Row style = {{color:"white",width:'100%'}}>
        <Col>
        <h4>Contact Info</h4>
        <hr style={{ width:'300px', border: 'none', borderBottom: '1px solid white' }} />
          <div style = {{display:'flex', gap:'10px'}}>
            <SiGmail size = {20}/>
            <p>cedarclinicalassociates@gmail.com</p>
          </div>
          <div style = {{display:'flex', gap:'10px'}}>
            <BiMessageRounded size = {25}/>
            <p>0711658304</p>
          </div>
          <div style = {{display:'flex', gap:'10px'}}>
            <ImLocation size = {30}/>
            <p>Lumumba Avenue, P.O.Box 2670 30100, Eldoret, Kenya</p>
          </div>
        </Col>
          <Col>
        <h4>Links</h4>
        <hr style={{ width:'300px', border: 'none', borderBottom: '1px solid white' }} />
        <div style={{display:'flex',flexDirection:'column'}}>
          <NavLink style={{color:'white',textDecoration:'none'}} to="/about-us">About Us</NavLink>
          <NavLink  style={{color:'white',textDecoration:'none'}} to="/services">Medical Services</NavLink>
          <NavLink  style={{color:'white',textDecoration:'none'}} to="/our-team">Doctors</NavLink>
          <NavLink   style={{color:'white',textDecoration:'none'}} to="/contacts">Contact Us</NavLink>
        </div>
        </Col>
      </Row>
      </div>
    </div>
  )
}

export default Footer
