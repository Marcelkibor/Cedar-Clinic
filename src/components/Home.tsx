import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Footer from "./Layouts/Footer";
import InsuranceProviders from "./InsuranceProviders";
import LandingPage from "./LandingPage";
import Navigation from "./Layouts/NavigationBar";
import SliderServices from "./Services/SliderServices";

const Home: React.FC = () => {
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const controls = useAnimation();
  const isInViewport = (element: HTMLElement | null, threshold = 200) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return rect.top >= -threshold && rect.bottom <= window.innerHeight + threshold;
  };
  useEffect(() => {
const handleScroll = () => {
  const servicesSection = document.getElementById("services");
  if (servicesSection) {
    if (isInViewport(servicesSection)) {
      if (!isServicesVisible) {
        // Animate the services section when it becomes visible
        controls.start({ opacity: 1, y: 0 });
        setIsServicesVisible(true);
      }
    } else {
      if (isServicesVisible) {
        // Reset animation when the section goes out of the viewport
        controls.start({ opacity: 0, y: 100 });
        setIsServicesVisible(false);
      }
    }
  }
};
window.addEventListener("scroll", handleScroll);
handleScroll();
return () => {
  window.removeEventListener("scroll", handleScroll);
};
}, [controls, isServicesVisible]);
  return (
    <div>
      <section id="navbar">
        <Navigation />
      </section>
      <section id="home">
        <LandingPage />
      </section>
      <section id="services">
        <motion.div
          className="services-container"
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          transition={{ duration: 0.3 }}
        >
          <SliderServices />
        </motion.div>
      </section>
      <section id="providers">
        <InsuranceProviders />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
