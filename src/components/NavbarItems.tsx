import React from "react";
import { motion } from "framer-motion";
import { Nav, NavDropdown } from "react-bootstrap";

const items = [
  { text: "Home", link: "/" },
  { text: "Services", link: "/services" },
  {
    text: "About Us",
    options: [
      { text: "About Us", link: "/about-us" },
      { text: "Our Team", link: "/our-team" },
    ],
  },
  { text: "Contacts", link: "/contacts" },
];

const Navbar = () => {
  const navListVariants = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItemVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  return (
    <>
      <motion.div
        className="navList"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navListVariants}
      >
        {items.map((item) => (
          <motion.div
            style={{ margin: '5% 0% 10% 20%', width: '100px' }}
            key={item.text}
            variants={navItemVariants}
          >
            {item.options ? (
              <NavDropdown title={item.text}>
                {item.options.map((option) => (
                  <NavDropdown.Item key={option.text} href={option.link}>
                    {option.text}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ) : (
              <Nav.Link href={item.link}>{item.text}</Nav.Link>
            )}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Navbar;
