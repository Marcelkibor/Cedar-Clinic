import { Row, Col } from 'react-bootstrap';
import {BoxResource} from './DataFiles/BoxFileResource';
// import React from 'react';
// import { NavLink } from 'react-router-dom';
const BoxLinks = () => {
  // const handleNavigation=(item:any)=>{
  // switch(item){
  //   case 1:
  //     return <NavLink style={{color:'white'}} to="/services">Find Service</NavLink>
  //   case 2:
  //   return <NavLink style={{color:'white'}} to="/contacts">Contact Us</NavLink>
  //   case 3:
  //     return <NavLink style={{color:'white'}} to="/our-team">Find Doctor</NavLink>
  //   default:
  //     return<NavLink style={{color:'white'}} to="/">Home</NavLink>
  // }
  // }
  return(
    <div style={{width:'100%',height:'100%'}}>
        <Row className='boxlink-main'>
        {BoxResource.map((item:any)=>(
            <Col>
         <div className='boxlink-items'key={item.id}>
          <div style={{width:'100%',height:'320px',marginTop:'50px'}}>
            <img src={item.src} style={{width:'100%',height:'100%'}}/>
          </div>
          <div style={{color:"white",textAlign:'center',height:'50px',backgroundColor:'#16a085',width:'100%'}}>
            <h4 style={{paddingTop:'10px'}}>{item.title}</h4>
          </div>
         </div>
         </Col>
        ))}
        </Row>
    </div>
  );
};

export default BoxLinks;
