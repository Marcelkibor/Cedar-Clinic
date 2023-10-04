import { Row, Col } from 'react-bootstrap';
import BoxResource from './DataFiles/BoxFileResource';
import { useAnimation } from 'framer-motion';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { popUp } from './Effects/AnimationsPack';

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
                  <p style={{color:"white", fontSize:'25px',fontWeight:'bold'}}>{item.description}</p>
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
