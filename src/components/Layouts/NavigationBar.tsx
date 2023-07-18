import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleHover = (event:any) => {
    const linkText = event.target.innerText;
    setHoveredLink(linkText);
  };

  const handleLeave = () => {
    setHoveredLink(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navigation ${scrolled ? 'navigation-active' : 'navigation-inactive'}`}>
      <Navbar>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <div className="about-us-wrapper">
              <Nav.Link
                href="/about-us"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                About Us
              </Nav.Link>
              {hoveredLink && (
                <div className="additional-links">
                  <Nav.Link href="/directors">Directors</Nav.Link>
                  <Nav.Link href="/who-we-are">Who We Are</Nav.Link>
                </div>
              )}
            </div>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contacts">Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
