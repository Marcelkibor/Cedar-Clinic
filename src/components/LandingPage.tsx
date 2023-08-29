import React, { useRef, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import BgLanding from './DataFiles/BgLanding';

const LandingPage = () => {
  const sliderRef = useRef<Slider | null>(null);
  const autoplayInterval = 6000;
  const textDisplayDelay = 500; // delay time
  const [display, setDisplay] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    let intervalId: any;

    const startAutoplay = () => {
      intervalId = setInterval(() => {
        if (sliderRef.current) {
          setDisplay(false); // Hide the text before showing
          sliderRef.current.slickNext();
        }
      }, autoplayInterval);
    };

    const stopAutoplay = () => {
      clearInterval(intervalId);
    };

    startAutoplay();
    showTextWithDelay(); // Show text with delay on component mount
    return () => {
      stopAutoplay();
    };
  }, []);

  const handleAfterChange = (currentSlide: number) => {
    setCurrentBgIndex(currentSlide);
    setTimeout(() => {
      setDisplay(true); // Show the text after the delay
    }, textDisplayDelay);
  };

  const showTextWithDelay = () => {
    setTimeout(() => {
      setDisplay(true);
    }, textDisplayDelay);
  };
const settings = {
  infinite:true,
  dots:false,
  autoplay:false,
  speed:1000,
  slidesToShow:1,
  slidesToScroll:1,
  afterChange:handleAfterChange
}
  return (
<div>
<Row>
<Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
  {BgLanding.map((bg, index) => (
    <Col className = 'landing-col' lg={1} md={6} sm={6} key={bg.id}>
      <div style={{position: 'relative',height: '100%',width: '100%',marginTop: '70px'}}>
        <img style={{ height: '100%', width: '100%' }} src={bg.src} alt={`Slide ${bg.id}`}/>
        {display && currentBgIndex === index && (
          <div className={`animated ${bg.animation}`}style={{position: 'absolute',top: '30%', left: '10%',width: '320px'}}>
            <h1 style={{ color: `${bg.color}` }}>{bg.text}</h1>
          </div>
        )}
      </div>
    </Col>
  ))}
    </Slider>
</Row>
  </div>
  );
};

export default LandingPage;
