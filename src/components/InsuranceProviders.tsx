import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Iproviders from "./DataFiles/IProviders";
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
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 9000,
    speed: 3000,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll
  };
  return (
    <>
      <div className="ip-intro">
        <h1>Our Insurance Providers</h1>
      </div>
      <div>
      <Slider {...settings}>
  {Iproviders.map((prov:any) => (
  <Col key={prov.id} className ='insurance-col'>  
            <div  style={{height:'280px',width:'280px',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div>
      <img style={{color: '#218c74',height:'100%',width:'100%'}} src={prov.src}/>
    </div>
  </div>
</Col>
))}
</Slider>
      </div>
    </>
  );
};

export default InsuranceProviders;
