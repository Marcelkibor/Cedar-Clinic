import Patient from '../assets/doc.png'
import {Row,Col} from 'react-bootstrap';
const PatientViews = () => {
  return (
    <Row className='review-main'>
      <Col sm={6} md={6} lg={6}>
      <div className='review-img' >
            <img src={Patient} style={{margin:'5% 0% 0% -8%',width:'110%',height:'70%',justifyContent:'center',display:'flex',alignItems:'center'}}/>
        </div>
      </Col>
       <Col sm={6} md={6} lg={6}>
       <div className='review-text'>
        <p>
        "I stayed in the hospital for 3 days and I felt at home. I was anxious before the surgery mostly because of the fear of the unknown, but I have had a smooth recovery post-surgery with no major complications.
          The nurses, doctors and the entire team at the hospital were very friendly and highly professional."
        </p>
        <p style={{fontWeight:'bold',fontStyle:'italic'}}>~ Allan Waswa</p>
            </div>
       </Col>
       </Row>
  )
}

export default PatientViews
