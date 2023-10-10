import { Row, Col } from 'react-bootstrap';
import {BoxResource, BxIcons} from './DataFiles/BoxFileResource';
import {AiOutlineDoubleRight} from 'react-icons/ai';
import React from 'react';
import { NavLink } from 'react-router-dom';
const BoxLinks = () => {
  const handleNavigation=(item:any)=>{
  switch(item){
    case 1:
      return <NavLink style={{color:'white'}} to="/services">Services</NavLink>
    case 2:
    return <NavLink style={{color:'white'}} to="/contacts">Contact Us</NavLink>
    case 3:
      return <NavLink style={{color:'white'}} to="/our-team">Doctors</NavLink>
    default:
      return<NavLink style={{color:'white'}} to="/">Home</NavLink>
  }

  }
  return (
    <div>
      <Row className='boxlinks'>
        {BoxResource.map((item) => (
          <Col
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            key={item.id}>
            <div
              style={{ position: 'relative' }}
              className="boxlink-main">
                <div className='bx-icon'>
                {React.createElement(BxIcons[item.id], { style: { width: '80px', height: '80px', color: 'white' } })}
                </div>
              <div className='boxlink-text'>
                <p className="bx"style={{color:"white", fontSize:'25px',fontWeight:'bold'}}>{item.title}</p> 
              </div>
              <div className='boxlink-hov'>
                <div style={{display:'block'}}>
                <h3 style={{color:'white'}}>{item.title}</h3>
                {React.createElement(BxIcons[item.id],{style:{width:'50px',height:'60px',color:'white'}})}
                <p style={{margin:'2% 5% 3% 5%',fontSize:'18px',color:'white'}}>{item.description}</p>
                  {handleNavigation(item.id)}
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BoxLinks;
