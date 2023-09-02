import React from "react";
import { motion } from "framer-motion";
import { Nav } from "react-bootstrap";

const Navbar = (isToggled:any) => {
  const items = ["Home", "Services", "About Us", "Contacts"];

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    }
  };

  return (
    <>
      <motion.div
        className="navList"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navList}
      >
      {items.map(item => {
        if (item === 'About Us') {
          return (
            <motion.div
              style={{ margin: '5% 0% 10% 20%', width: '100px' }}
              key={item}
            >
              <Nav.Link href={`/about-us`}>{item}</Nav.Link>
            </motion.div>
          );
        }if (item === 'Home') {
          return (
            <motion.div
              style={{ margin: '5% 0% 10% 20%', width: '100px' }}
              key={item}
            >
              <Nav.Link href={`/`}>{item}</Nav.Link>
            </motion.div>
          );
        }if(item === 'Services'){
          return (
            <motion.div key={item}
            style={{ margin: '5% 0% 10% 20%', width: '100px' }}>
              <Nav.Link href={`/services`}>{item}</Nav.Link>
            </motion.div>
          );
        }
        if(item === 'Contacts'){
          return (
            <motion.div key={item}
            style={{ margin: '5% 0% 10% 20%', width: '100px' }}>
              <Nav.Link href={`/contacts`}>{item}</Nav.Link>
            </motion.div>
          );
        }
      })}
      </motion.div>
    </>
  );
};

export default Navbar;
