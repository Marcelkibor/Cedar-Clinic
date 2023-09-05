import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Footer from "./Layouts/Footer";
import InsuranceProviders from "./InsuranceProviders";
import LandingPage from "./LandingPage";
import Navigation from "./Layouts/NavigationBar";
import SliderServices from "./Services/SliderServices";

const Home: React.FC = () => {
  const [sections] = useState<string[]>([
    "services",
    "providers",
  ]);

  const controlsServices = useAnimation();
  const controlsProviders = useAnimation();

  const isInViewport = (element: HTMLElement | null, threshold = 0) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return rect.top >= -threshold && rect.bottom <= window.innerHeight + threshold;
  };

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        const isVisible = isInViewport(element, 200);

        if (section === "services") {
          if (isVisible) {
            controlsServices.start({ opacity: 1, y: 0 });
          }
        } else if (section === "providers") {
          if (isVisible) {
            controlsProviders.start({ opacity: 1, y: 0 });
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections, controlsServices, controlsProviders]);

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
          animate={controlsServices}
          transition={{ duration: 0.3 }}
        >
          <SliderServices />
        </motion.div>
      </section>
      <section id="providers">
        <motion.div
          className="providers-container"
          initial={{ opacity: 0, y: 100 }}
          animate={controlsProviders}
          transition={{ duration: 0.3 }}
        >
          <InsuranceProviders />
        </motion.div>
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
