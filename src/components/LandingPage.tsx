import { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import Bg1 from '../assets/bg1.png';
import { Col, Row } from 'react-bootstrap';
const LandingPage = () => {
  const sliderRef = useRef<Slider | null>(null);
  const autoplayInterval = 6000

  useEffect(() => {
    let intervalId: any;

    const startAutoplay = () => {
      intervalId = setInterval(() => {
        if (sliderRef.current) {
          sliderRef.current.slickNext();
        }
      }, autoplayInterval);
    };

    const stopAutoplay = () => {
      clearInterval(intervalId);
    };

    startAutoplay();
    return () => {
      stopAutoplay();
    };
  }, []);

  return (
    <div className = 'bg-main'>
      <Row className="g0"style={{width:'100%',height:'100%',position:'absolute'}}>
      <Col style={{width:'100%',height:'100%'}} >
<img style={{ height: '100%', width: '100%', objectFit:'cover' }} src={Bg1} autoFocus/>
  </Col>
  <div className='landing-tx'>
    <p data-text='Cedar-Clinic' style={{marginLeft:'30px',color:"white",fontSize:'40px',fontFamily:'Merriweather serif'}}>Cedar Clinic</p>
    <p  style={{marginLeft:'30px',color:"white",fontSize:'25px',fontFamily:'Merriweather serif'}}>Your Health</p>
    <p style={{marginTop:'-20px',marginLeft:'30px',color:"white",fontSize:'25px',fontFamily:'Merriweather serif'}}>Is Our Priority</p>
  </div>
      </Row>
    </div>

  );
};

export default LandingPage;
