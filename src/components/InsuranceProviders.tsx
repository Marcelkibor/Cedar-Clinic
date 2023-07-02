import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import apa from '../assets/apa.png'
import cic from '../assets/cic.png'
import nh from '../assets/nhif.png'
import jb from '../assets/jubilee.png'
import md from '../assets/madison.png' 
import br from '../assets/britam.png'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const InsuranceProviders = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [slidesToScroll, setSlidesToScroll] = useState(3);
  useEffect(() => {
    const updateSliderSettings = () => {
      const midScreen = 1108;
      const smallScreen = 880;

      if (window.innerWidth <= smallScreen) {
        setSlidesToShow(1);
        setSlidesToScroll(1);
      } else if (window.innerWidth <= midScreen) {
        setSlidesToShow(2);
        setSlidesToScroll(2);
      } else {
        setSlidesToShow(3);
        setSlidesToScroll(3);
      }
    };

    updateSliderSettings();
    window.addEventListener('resize', updateSliderSettings);

    return () => {
      window.removeEventListener('resize', updateSliderSettings);
    };
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll
  };

  return (
    <div>
      <div className="ip-intro">
      <h1>Our Insurance Providers</h1>
      </div>
  <div className = 'slick-main-div'>
     <div style={{width:'80vw'}}>
     <Slider {...settings}>
        <div className="slick-item">
          <img style={{height:'100v',width:'70%'}} src = {apa}/>
        </div>
        <div className="slick-item">
        <img style={{height:'100%',width:'70%'}} src = {cic}/>
        </div>
        <div className="slick-item">
        <img style={{height:'100%',width:'70%'}} src = {nh}/>
        </div>
        <div className="slick-item">
        <img style={{height:'100%',width:'70%'}} src = {jb}/>
        </div>
        <div className="slick-item">
        <img style={{height:'100%',width:'70%'}} src = {md}/>
        </div>
        <div className="slick-item">
        <img style={{height:'100%', width:'70%'}} src = {br}/>
        </div>
      </Slider>
     </div>
    </div>
    </div>
  
  );
};

export default InsuranceProviders;
