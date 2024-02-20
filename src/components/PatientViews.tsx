import Patient from '../assets/doc.png'
import {Row,Col} from 'react-bootstrap';
const PatientViews = () => {
  return (
    <Row className='review-main'>
    <Col sm={6} md={6} lg={6}>
      <div className='review-img' >
            <img src={Patient} alt='' style={{marginLeft:'-5%',width:'110%',height:'70%',justifyContent:'center',display:'flex',alignItems:'center'}}/>
        </div>
      </Col>
       <Col sm={6} md={6} lg={6}>
       <div className='review-text'>
        <p>
        "When I stayed in the hospital I felt well-taken care of. I was anxious before, mostly because of the fear of the unknown, but later had a smooth recovery with no major complications.
          The nurses, doctors and the entire team at the hospital were very friendly and highly professional."
        </p>
        <p style={{fontWeight:'bold',fontStyle:'italic'}}>~ Jane</p>
            </div>
       </Col>
       </Row>
  )
}

export default PatientViews
