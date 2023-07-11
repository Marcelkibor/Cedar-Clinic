import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Card, Col } from "react-bootstrap";
import {GiKidneys,GiCancer} from 'react-icons/gi'
import {FaRadiation,FaMicroscope,FaHands,FaHeadSideCough} from 'react-icons/fa'
import { IconType } from "react-icons";
const Services = () => {
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
    autoplaySpeed: 4500,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll
  };
  const getServices = ()=>{
    window.location.href = "/services"
  }
  const services = [
    { id: 1, title: 'Radiology', description: 'Experience exceptional radiation therapy at our clinic: compassionate care, and remarkable outcomes.' },
    { id: 2, title: 'Oncology Services', description: 'Our Comprehensive Oncology Centre is fully equipped with the latest state of the art equipment for cancer diagnosis and treatment.' },
    { id: 3, title: 'Histopathology', description: 'New radiology services' },
    { id: 4, title: 'Palliative Care', description: 'New radiology services' },
    { id: 5, title: 'Renal Services', description: 'Our clinic offers specialized renal services to support and manage kidney-related conditions and treatments.' },
    { id: 6, title: 'Tuberculosis (TB)', description: 'Our clinic provides diagnosis, treatment, and management services for tuberculosis (TB) to ensure the health and well-being of our patients.' },
  ];
  const serviceIcons: { [key: number]: IconType } = {
    1: FaRadiation,
    2: GiCancer,
    3: FaMicroscope,
    4: FaHands,
    5: GiKidneys,
    6: FaHeadSideCough,
  };
  return (
    <div className="main-services">
      <div className="ip-intro">
      <h1>Explore Our Services </h1>
      </div>
  <div>
     <Slider {...settings}>
     {services.map(service => (
              <Col key={service.id} style={{ marginBottom: '10px' }}>
                
                <Card className="main-service-card">
      <div className="main-sv-icons-div">
      {React.createElement(serviceIcons[service.id],{ style: { width: '70%', height: '70%', color:'#218c74' }})}
      </div>
      <div style={{ marginLeft: '20%' }}>
        <Card.Body>
          <Card.Title style={{ color: '#218c74' }}>{service.title}</Card.Title>
          <Card.Text>{service.description}</Card.Text>
        </Card.Body>
      </div>
    </Card>
              </Col>
            ))}
</Slider>
     </div>
     <div style={{display:'flex',justifyContent:'center',alignItems:'center', marginTop:'10px'}}><button style = {{backgroundColor:'#00b894',width:'150px',color:"white",height:'50px',borderRadius:'10px'}}onClick={getServices}>More Services</button></div>
    </div>
  
  );
};

export default Services;
