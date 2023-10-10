import { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import Bg from '../assets/bg.jpg';
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
<img style={{ height: '140%', width: '100%', objectFit:'cover' }} src={Bg} autoFocus/>
  </div>
  <div className='home-bg-text'>
    <h1 data-text='Cedar-Clinic'>Cedar Clinic</h1>
    <h3>Your Health<br></br>Is Our Priority</h3>
  </div>
    </div>

  );
};

export default LandingPage;
