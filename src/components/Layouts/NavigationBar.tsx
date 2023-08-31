import { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {motion,useScroll,useSpring} from 'framer-motion'
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const handleHover = (event:any) => {
    const linkText = event.target.innerText;
    setHoveredLink(linkText);
    setShowLinks(true);
  };

  const handleLinkClick = () => {
    setShowLinks(false);
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
      <div
        className="about-us-wrapper"
        onMouseLeave={() => setShowLinks(false)}
      >
        <Nav.Link
          href="/about-us"
          onMouseEnter={handleHover}
        >
          About Us
        </Nav.Link>
        {hoveredLink === 'About Us' && showLinks && (
          <div className="additional-links">
            <Nav.Link href="/about-us" onClick={handleLinkClick}>Who We Are</Nav.Link>
            <Nav.Link href="/our-team" onClick={handleLinkClick}>Our Team</Nav.Link>
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
