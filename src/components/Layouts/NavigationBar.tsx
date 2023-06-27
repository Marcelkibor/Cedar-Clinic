import { Navbar, Container, Nav } from 'react-bootstrap'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../../App.css'
import { useEffect, useState } from 'react';
const Navigation = () => {
const[scrolled,isScrolled] = useState(false);
const [scrollIndex,setScrollIndex] = useState(window.screenY);
useEffect(()=>{
  const handleScroll = ()=>{
    setScrollIndex(window.scrollY);
  }
  window.addEventListener('scroll',handleScroll)
  return()=>{
    window.removeEventListener('scroll',handleScroll)
  }
},[]);
useEffect(()=>{
  if(scrollIndex > 50){
  isScrolled(true);
  }
  else{
  isScrolled(false);
  }
},[scrollIndex]);
return (
<div className={scrolled ? 'navigation-active': 'navigation-inactive'}>
  <Navbar>
    <Container>
        <Nav className = 'me-auto'>
          <Nav.Link  href="#home">Home</Nav.Link>
      <Nav.Link  href="#projects">Services</Nav.Link>
      <Nav.Link   href="#projects">Doctors</Nav.Link>
      <Nav.Link  href="#projects">Contacts</Nav.Link>
    </Nav>
  </Container>
   </Navbar>
    </div> 
  )
} 
export default Navigation
