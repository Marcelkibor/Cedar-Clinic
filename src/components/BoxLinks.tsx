import { Row, Col } from 'react-bootstrap';
import {BoxResource,BxIcons} from './DataFiles/BoxFileResource';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const BoxLinks = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

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
    <div style={{ width: '100%', height: '100%' }}>
    <Row className='boxlink-main g-0'>
      {BoxResource.map((item) => (
        <Col className="box-col"key={item.id}>
          <div
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`boxlink-items ${hoveredItem === item.id ? 'hovered' : ''}`}
          >
            <div
              style={{
                width: '100%',
                height: '290px',
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
                {hoveredItem === item.id && (
                  <React.Fragment>
                    {React.createElement(BxIcons[item.id], {
                      style: {width: '70px', height: '70px',marginTop:'-50px' },
                    })}
                    <div>
                      <h4>{item.title}</h4>
                    </div>
                    <div>
                      <p>{item.description}</p>
                    </div>
                    <div>
                    {handleNavigation(item.id)}
                    </div>
                  </React.Fragment>
                )}
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
