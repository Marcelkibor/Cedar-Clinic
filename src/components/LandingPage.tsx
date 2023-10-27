import { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import Bg1 from '../assets/bg1.png';
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
<div className='home-bg'>
<img style={{ height: '110%', width: '100%', objectFit:'cover' }} src={Bg1} autoFocus/>
  </div>
  <div className='home-bg-text'>
    <p data-text='Cedar-Clinic' style={{color:"white",fontSize:'40px',fontFamily:'Merriweather serif'}}>Cedar Clinic</p>
    <p  style={{color:"white",fontSize:'30px',fontFamily:'Merriweather serif'}}>Your Health<br></br>Is Our Priority</p>
  </div>
    </div>

  );
};

export default LandingPage;
