import { useEffect, useState } from "react";
import Slider from "react-slick";
import Iproviders from "./DataFiles/IProviders";
import { Col} from "react-bootstrap";

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
        setSlidesToShow(4);
        setSlidesToScroll(4);
      } else {
        setSlidesToShow(5);
        setSlidesToScroll(5);
      }
    };

    updateSliderSettings();
    window.addEventListener('resize', updateSliderSettings);

    return () => {
      window.removeEventListener('resize', updateSliderSettings);
    };
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll
  };
  return (
    <>
      <div className="ip-intro">
        <h1 style={{color:'#006366'}}>Our Insurance Providers</h1>
      </div>
      <div>
      <Slider {...settings}>
  {Iproviders.map((prov:any) => (
  <Col key={prov.id} className ='insurance-col'>  
            <div  style={{height:'150px',width:'150px',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div>
      <img style={{color: '#218c74',height:'100%',width:'100%'}} src={prov.src}/>
    </div>
  </div>
</Col>
))}
</Slider>
<div style={{marginBottom:'5%',display:'flex',justifyContent:'center',alignItems:'center', marginTop:'20px'}}>
    <button style = {{backgroundColor:'rgb(6, 119, 134)',width:'150px',color:"white",height:'50px',borderRadius:'10px'}}onClick={()=>{window.location.href='/insurance-providers'}}>All Providers</button>
    </div>
      </div>
    </>
  );
};

export default InsuranceProviders;
