import { useParams } from "react-router-dom"
import { Mservice } from "../DataFiles/Mservices";
import Navigation from "../Layouts/NavigationBar";
import ServicesHeader from "./ServicesHeader";
import { Col, Row } from "react-bootstrap";
import Footer from "../Layouts/Footer";
import { useEffect } from "react";
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
    <Row lg = {3} className="service-expand">
        <Col>
        <div>{selectedService&&<>
    <h4>{selectedService.name}</h4>
    <p>{selectedService.description}</p>
    </>}</div>
        </Col>
    </Row>
    <Footer/>
    </>

  )
}
export default ServiceExpand
