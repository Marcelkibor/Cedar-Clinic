import { useParams } from "react-router-dom";
import clinicMembers from "./DataFiles/ClinicMembers";
import Navigation from "./Layouts/NavigationBar";
import ServicesHeader from "./Services/ServicesHeader";
import Doc from '../assets/doc.png'
import { Row,Col } from "react-bootstrap";
import Footer from "./Layouts/Footer";
const TeamSelect = () => {
  const { name } = useParams<{ name?:string }>();
  if (!name) {
    return <div>No team member selected</div>;
  }
  const capitalizeFirstLetter = (word:string)=>{
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
const firstName = capitalizeFirstLetter(name.split(" ")[0]);
const selectedMember = clinicMembers.find((member)=>member.name.split(" ")[0]===firstName)
    return (
    <div>
      <Navigation/>
      <ServicesHeader pathname = {window.location.pathname}/>
      <Row style = {{margin:'100px 0 0 0'}}>
        <Col style={{margin:'0% '}}sm = {12} md = {7}>
        <div style={{width:'100%',height:'100%', backgroundColor:`${selectedMember?.divColor}`}}>
        <img style = {{width:'100%',height:'100%'}} src={Doc}/>
      </div>
        </Col>
        <Col style={{display:'flex',alignItems:'center'}}>
        {selectedMember&&<>
        <div style={{display:'block'}}>
        <h2 style={{fontWeight:'bolder'}}>Bio</h2>
        <h5 style={{marginTop:'40px'}}>{selectedMember.name}</h5>
        <p>{selectedMember.title}</p>
          </div>
        </>}
        </Col>
      </Row>
      <Row style = {{margin:'3% 5% 0% 5%'}}>
        <Col>
        <p>{selectedMember?.description}</p>
        </Col>
      </Row>
      <Footer/>
    </div>
  );
};

export default TeamSelect;
