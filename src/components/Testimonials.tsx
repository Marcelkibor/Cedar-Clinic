import { Card, Col, Row } from "react-bootstrap"
import Doc from '../assets/doc.png'
import Image from 'react-bootstrap/Image'
const Testimonials = () => {

  return (
<div className = 'testi-div'>
  <div style={{textAlign:'center'}}>
    <h1>Testimonials</h1>
    <h5>What our customers think</h5>
  </div>
 <Row style={{textAlign:'center', marginBottom:'2%'}}>
  <Col>
  <Card className = 'testi-cards'>
   <Card.Body>
   <div >
   <Image  style={{height:'100px', width:'180px', transform: 'scale(1.5)'}} src= {Doc}roundedCircle/>
  </div>
  <p style = {{marginTop:'10%'}}>
  Cedar Clinic stands out not only for its state-of-the-art facilities and advanced medical technology but also for its outstanding team of healthcare professionals. The doctors, nurses, and support staff at Cedar Clinic are not only highly skilled and knowledgeable but also incredibly compassionate and dedicated to providing the best care possible. 

  </p>
   </Card.Body>
  </Card>
  </Col>
  <Col>
  <Card className = 'testi-cards' >
   <Card.Body>
   <div >
   <Image  style={{transform:'scale(1.5)',height:'100px', width:'180px'}} src= {Doc}roundedCircle/>
  </div>
  <p style = {{marginTop:'10%'}}>
  One aspect that sets Cedar Clinic apart is their commitment to personalized care. They understand that each patient is unique, and they tailor their treatments and healthcare plans accordingly. I felt like a valued individual, not just a number, which made a significant difference in my overall experience. 
  </p>
     </Card.Body>
  </Card>
  </Col>
  <Col>
  <Card className = 'testi-cards'>
   <Card.Body>
   <div >
   <Image  style={{transform:'scale(1.5)',height:'100px', width:'180px'}} src= {Doc}roundedCircle/>
  </div>
  <p style = {{marginTop:'10%'}}>
  They provided me with detailed information about my condition, treatment options, and potential outcomes, empowering me to make informed decisions about my health. This level of transparency
  </p>
      </Card.Body>
  </Card>
  </Col>
 </Row>
  </div>
  )
}

export default Testimonials
