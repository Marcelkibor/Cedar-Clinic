import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import { Card, Col, Row } from "react-bootstrap";
import { Mservice, serviceIcons } from "../DataFiles/Mservices";
import { NavLink } from "react-router-dom";
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';

const SliderServices = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [slidesToScroll, setSlidesToScroll] = useState(3);
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const updateSliderSettings = () => {
      const midScreen = 1108;
      const smallScreen = 880;

      if (window.innerWidth <= smallScreen) {
        setSlidesToShow(1);
        setSlidesToScroll(1);
      } else if (window.innerWidth <= midScreen) {
        setSlidesToShow(2);
        setSlidesToScroll(2);
      } else {
        setSlidesToShow(3);
        setSlidesToScroll(3);
      }
    };

    updateSliderSettings();
    window.addEventListener('resize', updateSliderSettings);

    return () => {
      window.removeEventListener('resize', updateSliderSettings);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
  };

  const getServices = () => {
    window.location.href = "/services";
  };

  const handleSlidePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleSlideNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="main-services">
      <div style={{width:'100%',display:'block'}}>
      <div className="ip-intro">
        <h2  style={{fontFamily:'Merriweather serif',color:'rgb(11, 97, 109)'}} >Explore Our Services</h2>
      </div>
      <div style={{position: 'relative', width: '100%', height: '100%' }}>
        <Row style={{width:'100%',height:'100%'}}>
        <Slider {...settings} ref={sliderRef}>
          {Mservice.map(service => (
            <Col key={service.id} style={{ marginBottom: '10px' }}>
              <Card className="main-service-card">
                <div className="main-sv-icons-div">
                  {React.createElement(serviceIcons[service.id], { style: { width: '70%', height: '70%' } })}
                </div>
                <div style={{ marginLeft: '20%' }}>
                  <Card.Body>
                    <h6 >
                      <NavLink to={`services/${encodeURIComponent(service.name)}`} style={{ color: '#006266',fontFamily:'Merriweather serif',fontWeight:'bold' }}>{service.name}</NavLink>
                    </h6>
                    <p style={{ fontSize:'16px',color: '#006266',fontFamily:'Merriweather serif' }}>{service.description}</p>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          ))}
        </Slider>
        </Row>
    
        {/* handle next icons */}
        <div style={{ position: 'absolute', bottom: '40%', left: '20px', cursor: 'pointer' }} onClick={handleSlidePrev}>
          <BsFillArrowLeftSquareFill color='rgb(6, 119, 134)' size={40} />
        </div>
        <div style={{ position: 'absolute', bottom: '40%', right: '20px', cursor: 'pointer' }} onClick={handleSlideNext}>
          <BsFillArrowRightSquareFill color='rgb(6, 119, 134)' size={40} />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <button className="bt" onClick={getServices}>More Services</button>
      </div>
      </div>
    
    </div>
  );
};

export default SliderServices;
