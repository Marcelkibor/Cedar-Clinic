import { Row, Col } from 'react-bootstrap';
import {BoxResource, BxIcons} from './DataFiles/BoxFileResource';
import {AiOutlineDoubleRight} from 'react-icons/ai';
import React from 'react';
const BoxLinks = () => {
  const handleNavigation=(item:any)=>{
    console.log(`item is ${item}`);
    if(item===1){
      window.location.href="/services"
    }
    if(item===2){
      window.location.href="/contacts"

    }
    if(item===3){
      window.location.href="/our-team"

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
                <p onClick={()=>{handleNavigation(item.id)}} style={{ textDecoration:'underline',cursor:'pointer',color: "white" }}>Read More <AiOutlineDoubleRight color="white"/></p>
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
