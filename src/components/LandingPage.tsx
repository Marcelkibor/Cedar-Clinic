import { Col, Row } from 'react-bootstrap';
import Img from '../assets/doc.png';
import { FaClinicMedical, FaPills } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
const LandingPage = () => {
    return (
  <div>
    <Row>
    <Carousel>
      <div>
          <img src="assets/1.jpeg" />
          <p className="legend">Legend 1</p>
      </div>
      <div>
          <img src="assets/2.jpeg" />
          <p className="legend">Legend 2</p>
      </div>
      <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
      </div>
  </Carousel>
    </Row>
    </div>
    )
  }
  export default LandingPage
