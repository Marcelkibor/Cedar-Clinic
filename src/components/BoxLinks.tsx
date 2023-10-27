import { Row, Col } from 'react-bootstrap';
import {BoxResource,BxIcons} from './DataFiles/BoxFileResource';
import React from 'react';
import { NavLink } from 'react-router-dom';

const BoxLinks = () => {
  const handleNavigation=(item:any)=>{
  switch(item){
    case 1:
      return <NavLink style={{color:'white'}} to="/services">Find Service</NavLink>
    case 2:
    return <NavLink style={{color:'white'}} to="/contacts">Contact Us</NavLink>
    case 3:
      return <NavLink style={{color:'white'}} to="/our-team">Find Doctor</NavLink>
    default:
      return<NavLink style={{color:'white'}} to="/">Home</NavLink>
  }
  }
  return(
    <div style={{ width: '100%', height: '100%',marginTop:'30px' }}>
    <Row className='boxlink-main g-0'>
      {BoxResource.map((item) => (
        <Col className="box-col"key={item.id}>
          <div
            className="boxlink-items"
          >
            <div
              style={{
                width: '100%',
                height: '300px',
                marginTop: '50px',
                position: 'relative',
              }}
            >
              <img src={item.src} style={{ width: '100%', height: '100%' }} />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  color:'white',
                  flexDirection: 'column',
                  textAlign: 'center',
                }}
              >
                <section className='box-fragment'>
                <React.Fragment>
                    {React.createElement(BxIcons[item.id], {
                      style: {width: '70px', height: '70px',marginTop:'-50px' },
                    })}
                    <div>
                      <h4 style={{fontFamily:'Merriweather serif'}}>{item.title}</h4>
                    </div>
                    <div>
                      <p style={{fontFamily:'Merriweather serif'}}>{item.description}</p>
                    </div>
                    <div>
                    {handleNavigation(item.id)}
                    </div>
                  </React.Fragment>   
                </section>
              </div>
              <div className='bx-title'>
                <h5 style={{fontFamily:'Merriweather serif',fontWeight:'bold'}}>{item.title}</h5>
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
