import {Row,Col} from 'react-bootstrap';
import {FaSnapchat} from 'react-icons/fa';
const PatientViews = () => {
  return (
    <Row className='review-main'>
    <Col sm={6} md={6} lg={6}>
      <div className='review-img'>
      <FaSnapchat size = {200} color="#2f927e"/>
        </div>
      </Col>
       <Col sm={6} md={6} lg={6}>
       <div className='review-text'>
        <p>
        "When I stayed in the hospital I felt well-taken care of. I was anxious before, mostly because of the fear of the unknown, but later had a smooth recovery with no major complications.
          The nurses, doctors and the entire team at the hospital were very friendly and highly professional."
        </p>
        <p style={{fontWeight:'bold',fontStyle:'italic'}}>~Jane</p>
            </div>
       </Col>
       </Row>
  )
}

export default PatientViews
