import { Row, Col } from 'react-bootstrap';
import {BoxResource,BxIcons} from './DataFiles/BoxFileResource';
import React from 'react';
import { NavLink } from 'react-router-dom';

const BoxLinks = () => {
  const handleNavigation=(item:any)=>{
  switch(item){
    case 1:
      return <p><NavLink style={{color:'white'}} to="/services">Find Service</NavLink></p>
    case 2:
    return <p><NavLink style={{color:'white'}} to="/contacts">Contact Us</NavLink></p>
    case 3:
      return <p><NavLink style={{color:'white'}} to="/our-team">Find Doctor</NavLink></p>
    default:
      return <p><NavLink style={{color:'white'}} to="/">Home</NavLink></p>
  }
  }
  return(
    <Row className='boxlink-main g-0'>
      {BoxResource.map((item) => (
        <Col key={item.id} className="boxlink-col" style={{marginLeft:'2px',marginRight:'2px'}}>
            <div
            className='boxlink-div'
              >
              <img src={item.src} style={{ width: '100%', height: '300px' }} alt='' />
              <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100%',
                  width: '100%',position: 'absolute',top: 0,left: 0,color:'white',flexDirection: 'column',
                  textAlign: 'center'}} >
                <section className='box-fragment'>
                <React.Fragment>
                    {React.createElement(BxIcons[item.id], {
                      style: {width: '70px', height: '70px',marginTop:'-50px' },
                    })}
                    <div>
                      <p style={{fontSize:'20px'}}>{item.title}</p>
                    </div>
                    <div>
                      <p style={{fontSize:'18px'}}>{item.description}</p>
                    </div>
                    <div>
                    {handleNavigation(item.id)}
                    </div>
                  </React.Fragment>   
                </section>
              </div>
              <div className='bx-title'>
                <p style={{fontSize:'20px',fontWeight:'bold'}}>{item.title}</p>
              </div>
            </div>
         
        </Col>
      ))}
    </Row>
  );
};

export default BoxLinks;
