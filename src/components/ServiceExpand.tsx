import { useParams } from "react-router-dom"
import { Mservice } from "./DataFiles/Mservices";
import Navigation from "./Layouts/NavigationBar";
import ServicesHeader from "./Services/ServicesHeader";
import { Col, Row } from "react-bootstrap";
import Footer from "./Layouts/Footer";
const ServiceExpand = () => {
  const {id} = useParams<{id:string}>();
  if(!id){
    return(<>
    <p>Service does not exist!</p>
    </>)
  }
  const serviceId = parseInt(id);
  const selectedService = Mservice.find((item)=> item.id ===serviceId)
  return (
    <>
    <Navigation/>
    <ServicesHeader pathname = {window.location.pathname}/>
    <Row lg = {3}style={{margin:'80px 3% 0% 3%'}}>
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
