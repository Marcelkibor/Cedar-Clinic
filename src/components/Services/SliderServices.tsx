import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Card, Col } from "react-bootstrap";
import { Mservice,serviceIcons } from "../DataFiles/Mservices";
const SliderServices = () => {
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
  const getServices = ()=>{
    window.location.href = "/services"
  }
  return (
<div className="main-services">
  <div className="ip-intro">
  <h1>Explore Our Services </h1>
  </div>
<div>
  <Slider {...settings}>
  {Mservice.map(service => (<>
  <Col key={service.id} style={{ marginBottom: '10px' }}>
            
            <Card className="main-service-card">
  <div className="main-sv-icons-div">
  {React.createElement(serviceIcons[service.id],{ style: { width: '70%', height: '70%', color:'#218c74' }})}
  </div>
  <div style={{ marginLeft: '20%' }}>
    <Card.Body>
      <Card.Title style={{ color: '#218c74' }}>{service.name}</Card.Title>
      <Card.Text>{service.description}</Card.Text>
    </Card.Body>
  </div>
</Card>
          </Col>
  </>))}
</Slider>
  </div>
  <div style={{display:'flex',justifyContent:'center',alignItems:'center', marginTop:'10px'}}><button style = {{backgroundColor:'#00b894',width:'150px',color:"white",height:'50px',borderRadius:'10px'}}onClick={getServices}>More Services</button></div>
</div>
  );
};

export default SliderServices;
