import { Card, Col, Row } from "react-bootstrap"
import Navigation from "./Layouts/NavigationBar"
import ServicesHeader from "./Services/ServicesHeader"
import Doc from '../assets/doc.png'
import clinicMembers from "./BulkItems/ClinicMembers"

const OurTeam = () => {
  return (
    <div>
        <Navigation/>
    <ServicesHeader/>
    <Row style={{margin:'8% 0% 0% 0%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div style={{width:'600px',height:'350px', textAlign:'center'}}>
    <img src={Doc} style={{height:'100%',width:'100%'}}/>
    <div style={{marginTop:'15px'}}>
    <h4>Dr Jakait</h4>
    <p>Head Doctor</p>
    </div>
    </div>
    </Row>

    <Row style={{margin:'10% 3% 0% 3%', textAlign:'center'}}>
        {clinicMembers.map((item:any,index:any)=>(
            <Col lg = {4} md = {6} sm = {6}key={index}><div style={{backgroundColor:`${item.divColor}`}}>
                <div>
                    <img style = {{width:'100%',height:'100%'}}src={item.src}/>
                </div>
                <div style={{paddingTop:'10px', backgroundColor:'white'}}>
                    <h5>{item.name}</h5>
                    <p>{item.title}</p>
                </div>
                </div></Col>
            ))}
        </Row>
    </div>
  )
}
export default OurTeam
