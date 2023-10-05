import { Row, Col } from 'react-bootstrap';
import {BoxResource, BxIcons} from './DataFiles/BoxFileResource';
import { useAnimation } from 'framer-motion';
import { useState } from 'react';
import React from 'react';
const BoxLinks = () => {
  const boxAnimate = useAnimation();
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const handleHover = (itemId:any) => {
    setHoveredItemId(itemId);
    boxAnimate.start({ opacity:0,y: 0 });
  };

  const handleLeave = () => {
    setHoveredItemId(null);
  };

  return (
    <div>
      <Row className='boxlinks'>
        {BoxResource.map((item) => (
          <Col
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            key={item.id}>
            <div
              onMouseEnter={() => handleHover(item.id)}
              onMouseLeave={handleLeave}
              style={{ position: 'relative' }}
              className="boxlink-main"
            >
              <div className='boxlink-text'>
                <div className='bx-title'>
                <p className="bx"style={{color:"white", fontSize:'25px',fontWeight:'bold'}}>{item.title}</p>
                  {hoveredItemId === item.id && (
                    <>
                      {React.createElement(BxIcons[item.id], { style: { width: '50px', height: '50px', color: 'white' } })}
                        <h3 style={{color:"white"}}>{item.title}</h3>
                  <p style={{color:"white", fontSize:'18px'}}>{item.description}</p>
                    </>
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
