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
    <>
    <section id="navigation">
    <Navigation/>
    </section>
    <ServicesHeader pathname = {window.location.pathname}/>
    <Row className="service-expand">
    <Col lg={3}>
        <div>{selectedService&&<>
        <div style={{height:'fit-content',width:'fit-content'}}>
        {React.createElement(serviceIcons[selectedService.id],{style:{height:'100px',width:'100px',color: '#218c74'}})}
        </div>
    <h4 style={{marginTop:'15px'}}>{selectedService.name}</h4>
    <p>{selectedService.description}</p>
    </>}</div>
        </Col>
    </Row>
    <Footer/>
    </>

  )
}
export default ServiceExpand
