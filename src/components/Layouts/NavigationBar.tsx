import { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Menu from '../Menu';

const Navigation = () => {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 720) {
        setMenuActive(true);
      } else {
        setMenuActive(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on component mount
    return () => {
      window.removeEventListener('resize', handleResize);
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
            width: '100%',
            top: 0,
            backgroundColor: 'white',
          }}
        >
          <Menu />
        </div>
      ) : (
        <div className="navigation">
          <Navbar>
            <Container>
              <div>
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <div className="about-us-wrapper">
                    <Nav.Link>About Us</Nav.Link>
                    <div className="additional-links">
                      <Nav.Link href="/about-us">Who We Are</Nav.Link>
                      <Nav.Link href="/our-team">Our Team</Nav.Link>
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
