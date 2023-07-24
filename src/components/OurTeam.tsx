import { Card, Col, NavLink, Row } from "react-bootstrap"
import Navigation from "./Layouts/NavigationBar"
import ServicesHeader from "./Services/ServicesHeader"
import Doc from '../assets/doc.png'
import clinicMembers from "./DataFiles/ClinicMembers"
import Footer from "./Layouts/Footer"

const OurTeam = () => {
    const findDoctor:number = 1;
    const headDoctor = clinicMembers.find((item)=>item.id ===findDoctor)
  return (
    <div>
        <Navigation/>
    <ServicesHeader pathname = {window.location.pathname}/>
    <Row style={{margin:'8% 0% 0% 0%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div style={{width:'600px',height:'350px', textAlign:'center'}}>
    <img src={Doc} style={{height:'100%',width:'100%'}}/>
    <div style={{marginTop:'15px'}}>
        {headDoctor && <>
            <h4 style={{textDecoration:'underline', color:'#1B1464'}}><NavLink href = 'our-team/1'>{headDoctor.name}</NavLink></h4>
            <p>{headDoctor.title}</p>
        </>}
    </div>
    </div>
    </Row>
    <Row style={{margin:'10% 3% 0% 3%', textAlign:'center'}}>
    {clinicMembers.map((item:any,index:any)=>(
            item.id !== 1 ? (
                <Col lg={4} md={6} sm={6} key={index}>
                <div style={{ backgroundColor: `${item.divColor}` }}>
                    <div>
                    <img style={{ width: '100%', height: '100%' }} src={item.src} />
                    </div>
                    <div style={{ paddingTop: '10px', backgroundColor: 'white', outline: 'outline' }}>
                    <h6 style={{textDecoration:'underline', color:'#1B1464'}}>
                        <NavLink href={`/our-team/${encodeURIComponent(item.id)}`}>{item.name}</NavLink>
                    </h6>
                    <p>{item.title}</p>
                    </div>
                </div>
                </Col>
            ) : null
            ))}
        </Row>
        <Footer/>
    </div>
  )
}
export default OurTeam
