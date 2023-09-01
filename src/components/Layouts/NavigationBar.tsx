import { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Menu from '../Menu';
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [menuActive,setMenuActive] = useState(false)
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
    const handleWidth = ()=>{
      const smallScreen = 720;
      if(window.innerWidth<=smallScreen){
        setMenuActive(true);
      }
      else{
        setMenuActive(false);
      }
    }
    window.addEventListener('resize',handleWidth);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize',handleWidth);
    };
  }, []);
  return (
<div className={`navigation ${scrolled ? 'navigation-active' : 'navigation-inactive'}`}>
<Navbar>
  <Container>
    {menuActive?<div><Menu/></div>:<div>
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
      </div>}
  </Container>
</Navbar>
</div>
  );
};
export default Navigation;
