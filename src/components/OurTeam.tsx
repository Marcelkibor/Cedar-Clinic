import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Navigation from "./Layouts/NavigationBar";
import ServicesHeader from "./Services/ServicesHeader";
import Doc from '../assets/doc.png';
import clinicMembers from "./DataFiles/ClinicMembers";
import Footer from "./Layouts/Footer";
import ScrollMotion from "./utils/ScrollMotion";
import { useEffect } from "react";

const OurTeam = () => {
const findDoctor = 1;
const headDoctor = clinicMembers.find((item) => item.id === findDoctor);
useEffect(()=>{
    const top = document.getElementById("layout");
    if(top){
      top.scrollIntoView();
    }
  },[])
if (!headDoctor) {
return (
<>
<p>Doctor not found</p>
</>
);
}
const formatName = (name:string) => {
const nameParts = name.split(".");
const formattedName = nameParts && nameParts.length > 1 && nameParts[nameParts.length - 1].trim().toLowerCase();
return formattedName || name.toLowerCase();
};

if (!clinicMembers) {
return (
<>
<p>Page not found</p>
</>
);
}
return (
<div id="layout">
<Navigation/>
<ScrollMotion/>
<ServicesHeader pathname={window.location.pathname} />
<Row style={{ margin: '8% 0% 0% 0%',display:'flex',justifyContent:'center',alignItems:'center', width:'100vw',height:'fit-content'}}>
<div style={{width: 'fit-content', height: 'fit-content', textAlign: 'center',marginTop:'50px' }}>
<div style={{backgroundColor:'#22a6b3',display:'flex',justifyContent:'center',alignItems:'center'}}>
<img src={Doc} style={{ maxHeight: '300px', width: 'auto'}} />
</div>
<div style={{ marginTop: '10px' }}>
    {headDoctor && <>
        <h4 style={{ textDecoration: 'underline', color: '#1B1464' }}>
            <NavLink to={`${encodeURIComponent(formatName(headDoctor.name))}`}>
                {headDoctor.name}
            </NavLink>
        </h4>
        <p>{headDoctor.title}</p>
    </>}
</div>
</div>
</Row>
<Row style={{ margin: '2% 3% 0% 3%', textAlign: 'center' }}>
{clinicMembers.map((item, index) => (
item.id !== 1 ? (
    <Col lg={4} md={6} sm={6} key={index}>
        <div style={{ backgroundColor: `${item.divColor}` }}>
            <div>
                <img style={{ width: '100%', height: '100%' }} src={item.src} />
            </div>
            <div style={{ paddingTop: '10px', backgroundColor: 'white', outline: 'outline' }}>
                <h6 style={{ textDecoration: 'underline', color: '#1B1464' }}>
                    <NavLink to={`${encodeURIComponent(formatName(item.name))}`}>
                        {item.name}
                    </NavLink>
                </h6>
                <p>{item.title}</p>
            </div>
        </div>
    </Col>
) : null
))}
</Row>
<Footer />
</div>
);
};

export default OurTeam;
