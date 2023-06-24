import React, { useState } from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {FaRadiation,FaSyringe,FaMicroscope,FaHands} from 'react-icons/fa'
const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleMouseEnter = (card: string) => {
    setHoveredCard(card);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };
  const handleServices = ()=>{
    window.location.href = "/services"
  }
  const getIconStyle = (card: string): React.CSSProperties => {
    return {
      transform: hoveredCard === card ? "rotateY(180deg)" : "rotateY(0deg)",
      transition: "transform 0.5s ease",
    };
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div style = {{position:'relative'}}>
      <div className="ip-intro">
      <h1>Explore Our Services </h1>
      </div>
  <div className = 'slick-main-div'>
     <div style={{width:'80vw'}}>
     <Slider {...settings}>
     <div>
  <Card className="service-card">
    <div className="service-icon-div"
         onMouseEnter={() => handleMouseEnter("radiation")}
         onMouseLeave={handleMouseLeave} style = {getIconStyle('radiation')}>
      <FaRadiation color="white" size={40} />
    </div>
    <Card.Title>Radiation Therapy</Card.Title>
    <Card.Body>
      Experience exceptional radiation therapy at our clinic: compassionate care, and remarkable outcomes.
    </Card.Body>
    <button className="home-bt">Learn More</button>
  </Card>
</div>

        <div>
        <Card className="service-card">
                <div className="service-icon-div" onMouseEnter={() => handleMouseEnter("vaccine")}
         onMouseLeave={handleMouseLeave} style = {getIconStyle('vaccine')}>
                <FaSyringe color = 'white' size = {40}/>
                </div>
                <Card.Title>
                    Vaccine Therapy
                </Card.Title>
                <Card.Body>
                Discover the transformative power of vaccine therapy at our clinic: compassionate guidance, and remarkable results.                </Card.Body>
                <button className="home-bt">Learn More</button>
            </Card>
        </div>
        <div>
        <Card className="service-card">
                <div className="service-icon-div"  onMouseEnter={() => handleMouseEnter("histo")}
         onMouseLeave={handleMouseLeave} style = {getIconStyle('histo')}>
                <FaMicroscope color = 'white' size = {40}/>
                </div>
                <Card.Title>
                Histopathology
                </Card.Title>
                <Card.Body>
                Unleash the potential of histopathology at our clinic: expert analysis, precise diagnoses, and effective treatment strategies.                </Card.Body>
                <button className="home-bt">Learn More</button>
            </Card>
        </div>
        <div>
        <Card className="service-card">
                <div className="service-icon-div"  onMouseEnter={() => handleMouseEnter("pal")}
         onMouseLeave={handleMouseLeave} style = {getIconStyle('pal')}>
                <FaHands color = 'white' size = {40} />
                </div>
                <Card.Title>
                Palliative care
                </Card.Title>
                <Card.Body>
                Experience compassionate palliative care at our clinic: dedicated support, enhanced comfort, and meaningful moments for patients and their families.                   </Card.Body>
                <button className="home-bt">Learn More</button>
            </Card>
        </div>
        <div>
        <Card className="service-card">
                <div className="service-icon-div"  onMouseEnter={() => handleMouseEnter("his")}
         onMouseLeave={handleMouseLeave} style = {getIconStyle('his')}>
                <FaRadiation color = 'white' size = {40} />
                </div>
                <Card.Title>
                Histopathology
                </Card.Title>
                <Card.Body>
                Unleash the potential of histopathology at our clinic: expert analysis, precise diagnoses, and effective treatment strategies.                </Card.Body>
                <button className="home-bt">Learn More</button>

            </Card>
        </div>
        <div>
        <Card className="service-card">
                <div className="service-icon-div"  onMouseEnter={() => handleMouseEnter("his")}
         onMouseLeave={handleMouseLeave} style = {getIconStyle('his')}>
                <FaRadiation color = 'white' size = {40} />
                </div>
                <Card.Title>
                Histopathology
                </Card.Title>
                <Card.Body>
                Unleash the potential of histopathology at our clinic: expert analysis, precise diagnoses, and effective treatment strategies.                </Card.Body>
                <button className="home-bt">Learn More</button>

            </Card>
        </div>
        <div>
        </div>
      </Slider>
     </div>
    </div>
    <div style={{marginTop:'2%',position:'absolute',top:'100%',left:'50%',transform:'translate(-50%.-50%)'}}>
      <button onClick={handleServices} style = {{width:'150px',height:'50px',color:'white',fontWeight:'500',borderRadius:'25px',backgroundColor:'#00a72ae5'}}>More Services</button>
    </div>
    </div>
  
  );
};

export default Services;
