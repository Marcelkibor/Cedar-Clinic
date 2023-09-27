import {useState } from "react";
import NavbarItems from "../components/NavbarItems";
import { motion, AnimatePresence } from "framer-motion";
import {HiMenuAlt2} from 'react-icons/hi'
const Menu = () => {
  const [isToggled, setToggle] = useState(false);

  const navContainer = {
    visible: {
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    }
  };

  return (
    <div style={{backgroundColor:'#58B19F',minHeight:'60px'}}>
      <button className="btn" onClick={() => setToggle(!isToggled)}>
        <HiMenuAlt2 size ={25}color='white'/>
      </button>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            className="navbar"
            initial="hidden"
            animate={isToggled ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <section style={{color:'white', fontWeight:'bold'}}>
            <NavbarItems/>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
