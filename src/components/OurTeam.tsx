import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Navigation from "./Layouts/NavigationBar";
import ServicesHeader from "./Services/ServicesHeader";
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

<Row style={{textAlign: 'center',marginTop:'100px' }}>
    <h2 style={{margin:'5px 0x 10x 0px',fontFamily:'Merriweather serif'}}>Meet Our Team</h2>
{clinicMembers.map((item, index) => (
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
))}
</Row>
<Footer />
</div>
);
};

export default OurTeam;
