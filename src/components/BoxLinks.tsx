import { Row, Col } from 'react-bootstrap';
import {BoxResource, BxIcons} from './DataFiles/BoxFileResource';
import { useAnimation } from 'framer-motion';
import { useState } from 'react';
import {AiOutlineDoubleRight} from 'react-icons/ai';
import React from 'react';
const BoxLinks = () => {
  const boxAnimate = useAnimation();
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const handleHover = (itemId:any) => {
    setHoveredItemId(itemId);
    boxAnimate.start({ opacity:0,y: 0 });
  };
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
              className="boxlink-main">
                <div  style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20%'}}className='bx-icon'>
                {React.createElement(BxIcons[item.id], { style: { width: '80px', height: '80px', color: 'white' } })}
                </div>
              <div className='boxlink-text'>
                <div className='bx-title'>
                <p className="bx"style={{color:"white", fontSize:'25px',fontWeight:'bold'}}>{item.title}</p>
                  {hoveredItemId === item.id && (
                    <div>
                      {React.createElement(BxIcons[item.id], { style: { width: '50px', height: '50px', color: 'white' } })}
                        <h3 style={{color:"white"}}>{item.title}</h3>
                  <p style={{margin:'0% 3% 3% 3%',color:"white", fontSize:'18px'}}>{item.description}</p>
                    <p onClick={()=>{handleNavigation(item.id)}} style={{cursor:'pointer',color:'white',textDecoration:'underline'}}>Read More <AiOutlineDoubleRight color="white"/></p>
                    </div>
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
