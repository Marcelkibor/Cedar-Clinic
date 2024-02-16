import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Navigation from "./Layouts/NavigationBar";
import ServicesHeader from "./Services/ServicesHeader";
import clinicMembers from "./DataFiles/ClinicMembers";
import Footer from "./Layouts/Footer";
import ScrollMotion from "./utils/ScrollMotion";
import { useEffect } from "react";
import { ImWoman } from "react-icons/im";

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
    <p className="header1">Meet Our Team</p>
    {clinicMembers.map((item, index) => (
    <Col lg={4} md={6} sm={6} key={index}>
        <div style={{ backgroundColor: `${item.divColor}` }}>
            <div style={{width:'100%',height:'100%'}}>
                {item.src === 'ImWoman' ? <ImWoman style={{ width: '150px', height: '200px' }} /> : <img style={{ width: '100%', maxHeight: '500px' }} src={item.src} alt="" />}
            </div>
            <div style={{ paddingTop: '10px', backgroundColor: 'white', outline: 'outline' }}>
                <p>
                    <NavLink to={`${encodeURIComponent(formatName(item.name))}`}
                    style={{ textDecoration: 'underline', color: '#0d8069',fontWeight:'bold' }}
                    >
                        {item.name}
                    </NavLink>
                </p>
                <p style={{color:'#0d8069'}}>{item.title}</p>
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
