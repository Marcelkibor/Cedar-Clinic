import { useParams } from "react-router-dom";
import clinicMembers from "./DataFiles/ClinicMembers";
import Navigation from "./Layouts/NavigationBar";
import ServicesHeader from "./Services/ServicesHeader";
import { Row,Col } from "react-bootstrap";
import Footer from "./Layouts/Footer";
import { useEffect } from "react";
import { ImWoman } from "react-icons/im";
const TeamSelect = () => {
  const { name } = useParams<{ name?:string }>();

useEffect(() => {
  const nav = document.getElementById("navigation");
  if(nav){
    nav.scrollIntoView({behavior:'smooth'})
  }
  }, []);
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
      <section id="navigation">
      <Navigation/>
      </section>
      <ServicesHeader pathname = {window.location.pathname}/>
      <Row style = {{margin:'80px 0 0 0'}}>
        <Col style={{margin:'0% '}}sm = {12} md = {7}>
        <div style={{width:'100%',height:'100%', display:'flex',justifyContent:'center',alignItems:'center'}}>
        {selectedMember?.src==="ImWoman"? <ImWoman style={{ width: '150px', height: '300px',color:'#0d8069' }} />:
            <img src={selectedMember?.src} className="team-select-img" alt=""/>
        }
      </div>
        </Col>
        <Col style={{display:'flex',alignItems:'center'}}>
        {selectedMember&&<>
        <div style={{display:'block'}}>
        <p style={{fontWeight:'bolder',fontSize:'25px'}}>Bio</p>
        <h5 style={{marginTop:'10px'}}>{selectedMember.name}</h5>
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
