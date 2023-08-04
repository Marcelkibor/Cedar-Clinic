import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import apa from '../assets/apa.png';
import britam from '../assets/britam.png';
import cic from '../assets/cic.png';
import jubilee from '../assets/jubilee.png';
import madison from '../assets/madison.png';
import nhif from '../assets/nhif.png';

import { Row, Col, Card } from "react-bootstrap";

const InsuranceProviders = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [slidesToScroll, setSlidesToScroll] = useState(3);

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

  const Iproviders = [
    { id: 1, src: apa },
    { id: 2, src: britam },
    { id: 3, src: cic },
    { id: 4, src: jubilee },
    { id: 5, src: madison },
    { id: 6, src: nhif },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    fade:true,
    autoplaySpeed: 6000,
    speed: 3000,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
  };

  return (
    <>
      <div className="ip-intro">
        <h1>Our Insurance Providers</h1>
      </div>
      <Row className="slider-row">
        <div>
        <Col >
          <Slider  {...settings}>
            {Iproviders.map((provider) => (
              <Card className = 'provider-div'key={provider.id}> 
                <img style={{ height: '100%', width: '100%' }} src={provider.src} alt={`Provider ${provider.id}`} />
              </Card>
            ))}
          </Slider>
        </Col>
        </div>
      </Row>
    </>
  );
};

export default InsuranceProviders;
