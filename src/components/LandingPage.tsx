import { useRef, useEffect } from "react";
import Slider from "react-slick";
import { Col, Row, Container } from "react-bootstrap";
import cedar from "../assets/clin.avif";

const LandingPage = () => {
  const sliderRef = useRef<Slider | null>(null);
  const autoplayInterval = 6000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      sliderRef.current?.slickNext();
    }, autoplayInterval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-main hero-section">
      <Container fluid className="h-100">
        <Row className="align-items-center min-vh-100 px-3 px-md-5">
          
          {/* TEXT SECTION */}
          <Col md={6} className="text-white">
            <div className="hero-text">
              <h1 className="hero-title">
                Cedar Clinical <br />
                Associates
              </h1>

              <p className="hero-subtitle">Your Health</p>
              <p className="hero-subtitle mt-n2">Is Our Priority</p>

              <p className="hero-desc mt-4">
                Providing compassionate, reliable, and professional healthcare
                services tailored to your needs.
              </p>
            </div>
          </Col>

          {/* IMAGE SECTION */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <div className="hero-image-wrapper">
              <img
                src={cedar}
                alt="Cedar Clinic"
                className="img-fluid hero-image"
              />
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;