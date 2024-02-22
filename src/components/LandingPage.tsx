import { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import cedar from '../assets/cedar.avif';
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
      <Row className="g0"style={{width:'100%',height:'100%'}}>
        <Col>
        <div className='landing-tx' style={{color:"white"}}>
    <p data-text='Cedar-Clinic' style={{fontWeight:'bolder',marginLeft:'30px',fontSize:'40px',fontFamily:'Merriweather serif'}}>Cedar Clinical Associates</p>
    <p  style={{marginLeft:'30px',fontSize:'22px',fontFamily:'Merriweather serif'}}>Your Health</p>
    <p style={{marginTop:'-20px',marginLeft:'30px',fontSize:'22px',fontFamily:'Merriweather serif'}}>Is Our Priority</p>
  </div> 
        </Col>
    <Col>
    <div className='logo-div'>
      <img src={cedar} style={{height:'100%',width:'100%'}}/>
    </div>
    </Col>
      </Row>
    </div>

  );
};

export default LandingPage;
