import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card, Button } from 'react-bootstrap';
import { FaArrowLeft,FaArrowRight } from 'react-icons/fa';
const TestimonialSwiper: React.FC = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 4) % 4);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
  };

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div>
      <FaArrowLeft color = 'gray' onClick = {handlePrev}/>
      </div>
      <div className="carousel-container" style={{minWidth:'80vw'}}>
        <Carousel activeIndex={activeIndex} interval={null} controls={false}>
          <Carousel.Item>
            <Card>
              <Card.Img variant="top" src="image1.jpg" alt="Image 1" />
              <Card.Body>
                <Card.Title>Title 1</Card.Title>
                <Card.Text>fkf</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Img variant="top" src="image2.jpg" alt="Image 2" />
              <Card.Body>
                <Card.Title>Title 2</Card.Title>
                <Card.Text>fkf</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Img variant="top" src="image3.jpg" alt="Image 3" />
              <Card.Body>
                <Card.Title>Title 3</Card.Title>
                <Card.Text>fkf</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Img variant="top" src="image3.jpg" alt="Image 4" />
              <Card.Body>
                <Card.Title>Title 4</Card.Title>
                <Card.Text>fkf</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="carousel-controls">
      <FaArrowRight color = 'gray' onClick = {handleNext}/>
      </div>
    </div>
  );
};

export default TestimonialSwiper;
