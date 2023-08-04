import { useRef, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import BgLanding from './DataFiles/BgLanding';

const LandingPage = () => {
  const sliderRef = useRef<Slider | null>(null);
  const autoplayInterval = 8000;

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
    <div>
      <Row>
        <Slider
          ref={(slider) => (sliderRef.current = slider)}
          dots={false}
          infinite={true}
          autoplay={false}
          speed={1000}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {BgLanding.map((bg) => (
            <Col style={{ height: '100vh' }} lg={1} md={6} sm={6} key={bg.id}>
              <div style={{ position: 'relative', height: '100%', width: '100%', marginTop:'70px' }}>
                <img style={{ height: '100%', width: '100%' }} src={bg.src} alt={`Slide ${bg.id}`} />
              </div>
            </Col>
          ))}
        </Slider>
      </Row>
    </div>
  );
};

export default LandingPage;
