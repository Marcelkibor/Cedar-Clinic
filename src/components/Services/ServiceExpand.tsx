import { useParams } from "react-router-dom"
import { Mservice,serviceIcons } from "../DataFiles/Mservices";
import Navigation from "../Layouts/NavigationBar";
import ServicesHeader from "./ServicesHeader";
import { Col, Row } from "react-bootstrap";
import Footer from "../Layouts/Footer";
import React, { useEffect } from "react";
const ServiceExpand = () => {
  useEffect(() => {
    const nav = document.getElementById("navigation");
    if(nav){
      nav.scrollIntoView({behavior:'smooth'})
    }
    }, []);
  const {name} = useParams<{name:string}>();
  const capitalizeFirstLetter = (word:string)=>{
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  if(!name){
    return(<>
    <p>Service does not exist!</p>
    </>)
  }
  function checkService(service:string){
    return Mservice.find((sv:any)=>sv.name.split(" ")[0]===capitalizeFirstLetter(service.split(" ")[0]))
  }
  const selectedService = checkService(name)
  return (
    <div style={{width:'100%',height:'100%'}}>
    <section id="navigation">
    <Navigation/>
    </section>
    <ServicesHeader pathname = {window.location.pathname}/>
    <Row className="service-expand">
    <Col>
        <div>{selectedService&&<>
        <div style={{height:'100%',width:'100%'}}>
        {React.createElement(serviceIcons[selectedService.id],{style:{height:'80px',width:'80px',color: '#218c74'}})}
        </div>
    <p className="header1"style={{marginTop:'30px'}}>{selectedService.name}</p>
    <p className="service-tx">{selectedService.description}</p>
    </>}</div>
        </Col>
    </Row>
    <Footer/>
    </div>

  )
}
export default ServiceExpand
