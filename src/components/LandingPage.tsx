import { Col, Row } from 'react-bootstrap';
import Doc from '../assets/doc.png'
import Img from '../assets/doc.png';
import { FaClinicMedical, FaPills } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BgLanding from './DataFiles/BgLanding';
const LandingPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed:1000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }; 
  return (
  <div>
    <Row>
    <Slider {...settings}>
    {BgLanding.map((bg)=>(
        <Col style={{height:'100vh'}} lg={1} md={6} sm={6} key={bg.id}>
          <div style={{position:'relative',height:'100%',width:'100%'}}>
          <img style={{height:'100%',width:'100%'}} src={bg.src}/>
          </div>
        </Col>
    ))}
  </Slider>
    </Row>
    </div>
    )
  }
  export default LandingPage
