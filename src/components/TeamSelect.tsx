// TeamSelect.js
import React from "react";
import { useParams } from "react-router-dom"; // Import useParams
import clinicMembers from "./DataFiles/ClinicMembers";
import Navigation from "./Layouts/NavigationBar";
import ServicesHeader from "./Services/ServicesHeader";
import Doc from '../assets/doc.png'
import { Row,Col } from "react-bootstrap";
import Footer from "./Layouts/Footer";
const TeamSelect = () => {
  const { id } = useParams<{ id?: string }>(); // Provide type for id to handle undefined

  if (!id) {
    return <div>No team member selected</div>;
  }
  const memberId = parseInt(id);
  const selectedMember = clinicMembers.find((item:any) => item.id === memberId);
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
