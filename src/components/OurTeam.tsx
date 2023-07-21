import { Card, Col, Row } from "react-bootstrap"
import Navigation from "./Layouts/NavigationBar"
import ServicesHeader from "./Services/ServicesHeader"
import clinicMembers from "./BulkItems/ClinicMembers"

const OurTeam = () => {
  return (
    <div>
        <Navigation/>
    <ServicesHeader/>
    <Row style={{margin:'5% 0% 0% 0%'}}>
        {clinicMembers.map((item:any,index:any)=>(
            <Col lg = {4} md = {6} sm = {6}key={index}><Card>
                <Card.Body>
                    <img style = {{width:'100%',height:'100%'}}src={item.src}/>
                </Card.Body>
                <Card.Footer>
                    <Card.Text>{item.name}<br></br>{item.title}</Card.Text>
                </Card.Footer>
                </Card></Col>
            ))}
        </Row>
    </div>
  )
}
export default OurTeam
