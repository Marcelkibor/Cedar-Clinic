import { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import Bg from '../assets/bg.mp4';
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
     <div style={{position:'absolute',height:'100%',width:'100%'}}> 
      </div>
<div className='home-bg'>
<video style={{ height: '100%', width: '111vw', objectFit:'cover' }} src={Bg} autoPlay loop muted/>
  </div>
  <div className='home-bg-text'>
    <h1 data-text='Cedar-Clinic'>Cedar Clinic</h1>
    <h3>Your Health<br></br>Is Our Priority</h3>
  </div>
    </div>

  );
};

export default LandingPage;
