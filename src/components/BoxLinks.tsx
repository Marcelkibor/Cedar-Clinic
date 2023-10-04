import {Row,Col} from 'react-bootstrap';
import BoxResource from './DataFiles/BoxFileResource';
import { useAnimation } from 'framer-motion';
import { useState } from 'react';
import {motion} from 'framer-motion'
const BoxLinks = () => {
  const boxAnimate = useAnimation();
  const [visible,setVisible] = useState(false);
  const handleEnter =()=>{
    setVisible(true);
    boxAnimate.start({y:0})
  }
  const handleLeave=()=>{
    setVisible(false);
  }
  return (
    <div>
    <Row className='boxlinks'>
    {BoxResource.map((item:any)=>(
        <Col style = {{display:'flex',justifyContent:'center',alignItems:'center'}}key={item.id}>
            <div onMouseEnter={handleEnter}onMouseLeave={handleLeave}style={{position:'relative'}}className="boxlink-main">
            <div className='boxlink-text'>
            <div>
            <h3 style={{color:'white'}}>{item.title}</h3>
              </div>
              {visible && 
              <motion.div
              initial={{y:-1}}
              transition={{duration:0.3}}
              animate={boxAnimate}
              >
              <p>Some Text</p>
              </motion.div>
              }
            </div>
            </div>
        </Col>
    ))}
    </Row>
    </div>
  )
}

export default BoxLinks
