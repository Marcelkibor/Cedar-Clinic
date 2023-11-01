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
        <p className="header1">Explore Our Services</p>
      </div>
      <div style={{position: 'relative', width: '100%', height: '100%',marginTop:'15px' }}>
        <Row style={{width:'100%',height:'100%'}}>
          <Col>
          <Slider {...settings} ref={sliderRef}>
          {Mservice.map(service => (
            <Col key={service.id} style={{ marginBottom: '10px' }}>
              <Card className="main-service-card">
                <div className="main-sv-icons-div">
                  {React.createElement(serviceIcons[service.id], { style: { width: '70%', height: '70%' } })}
                </div>
                <div style={{ marginLeft: '20%' }}>
                  <Card.Body>
                    <p>
                      <NavLink style={{color:'#0d8069',fontWeight:'bold'}} to={`services/${encodeURIComponent(service.name)}`}>{service.name}</NavLink>
                    </p>
                    <p style={{ fontSize:'16px',color: '#006266',fontFamily:'Merriweather serif' }}>{service.description.split(' ').slice(0, 30).join(' ')}...</p>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          ))}
        </Slider>
          </Col>
        </Row>
        {/* handle slider icons */}
        <div style={{ position: 'absolute', bottom: '40%', left: '5px', cursor: 'pointer' }} onClick={handleSlidePrev}>
          <BsFillArrowLeftSquareFill color='#0d8069' size={40} />
        </div>
        <div style={{ position: 'absolute', bottom: '40%', right: '5px', cursor: 'pointer' }} onClick={handleSlideNext}>
          <BsFillArrowRightSquareFill color='#0d8069' size={40} />
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
