import React, { useEffect, useState, useRef } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Menu from '../Menu';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const navigationRef = useRef<HTMLDivElement | null>(null);

  const handleHover = () => {
    setShowLinks(true);
  };

  const handleLinkClick = () => {
    setShowLinks(false);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      navigationRef.current &&
      !navigationRef.current.contains(event.target as Node)
    ) {
      setShowLinks(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 720) {
      setMenuActive(true);
    } else {
      setMenuActive(false);
    }

    const handleResize = () => {
      if (window.innerWidth <= 720) {
        setMenuActive(true);
      } else {
        setMenuActive(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleDocumentClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
<>
{menuActive ? (
<div
  style={{
    height: 'fit-content',
    position: 'fixed',
    zIndex: 9999,
    width: '100vw',
    top: 0,
    backgroundColor: 'white',
  }}
  ref={navigationRef}
>
  <Menu />
</div>
) : (
<div style={{height:'65px'}} className={`navigation ${scrolled ? 'navigation-active' : 'navigation-inactive'}`} ref={navigationRef}>
  <Navbar>
    <Container>
  <div>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <div
        className="about-us-wrapper"
        onMouseLeave={() => setShowLinks(false)}
      >
        <Nav.Link onMouseEnter={handleHover} onClick={() => setShowLinks(true)}>
          About Us
        </Nav.Link>
        <div>
          {showLinks && (
            <div className="additional-links">
              <Nav.Link href="/about-us" onClick={handleLinkClick}>
                About Us
              </Nav.Link>
              <Nav.Link href="/our-team" onClick={handleLinkClick}>
                Our Team
              </Nav.Link>
            </div>
          )}
        </div>
      </div>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/contacts">Contacts</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
      )}
    </>
  );
};

export default Navigation;
