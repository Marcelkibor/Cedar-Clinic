import { Row, Col, Card } from 'react-bootstrap';
import { FaQuoteLeft } from 'react-icons/fa';
import pt from "../assets/patient.avif"

const PatientViews = () => {
  return (
    <div className="testimonial-section">
      <Row className="align-items-center">

        {/* LEFT SIDE (Visual) */}
        <Col md={6}>
          <div className="testimonial-visual">
            <div className="circle-bg" />
            <img
              src={pt}
              alt="patient"
            />
          </div>
        </Col>

        {/* RIGHT SIDE (Text) */}
        <Col md={6}>
          <Card className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />

            <p className="testimonial-text">
              When I stayed in the hospital I felt well taken care of. I was anxious before,
              mostly because of the fear of the unknown, but later had a smooth recovery
              with no major complications. The nurses, doctors and the entire team were
              friendly and highly professional.
            </p>

            <p className="testimonial-name">~ Jane</p>
          </Card>
        </Col>

      </Row>
    </div>
  );
};

export default PatientViews;