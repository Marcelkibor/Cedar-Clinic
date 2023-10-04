import { Row, Col } from 'react-bootstrap';
import BoxResource from './DataFiles/BoxFileResource';
import { useAnimation } from 'framer-motion';
import { useState } from 'react';
import { motion } from 'framer-motion';

const BoxLinks = () => {
  const boxAnimate = useAnimation();
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const handleHover = (itemId:any) => {
    setHoveredItemId(itemId);
    boxAnimate.start({ y: 0 });
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
            key={item.id}
          >
            <div
            onClick={()=>{handleHover(item.id)}}
              onMouseEnter={() => handleHover(item.id)}
              onMouseLeave={handleLeave}
              style={{ position: 'relative' }}
              className="boxlink-main"
            >
              <div className='boxlink-text'>
                <div className='bx-title'>
                  <h3 style={{ color: 'white' }}>{item.title}</h3>
                  {hoveredItemId === item.id && (
                  <motion.div
                    initial={{ y: -1 }}
                    transition={{ duration: 0.3 }}
                    animate={boxAnimate}
                  >
                    <h4 style={{color:"white"}}>{item.description}</h4>
                  </motion.div>
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
