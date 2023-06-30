import React, { useRef } from "react";
import Slider from "react-slick";
import apa from '../assets/apa.png'
import cic from '../assets/cic.png'
import nh from '../assets/nhif.png'
import jb from '../assets/jubilee.png'
import md from '../assets/madison.png' 
import br from '../assets/britam.png'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const InsuranceProviders = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4
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
          <img style={{height:'100%',width:'70%'}} src = {apa}/>
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
