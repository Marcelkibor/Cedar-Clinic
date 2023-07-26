import React, { useState } from 'react';
import Navigation from '../Layouts/NavigationBar';
import { Card, Col, Row } from 'react-bootstrap';
import Pagination from './Pagination';
import ServicesHeader from './ServicesHeader';
import {Mservice,serviceIcons} from '../DataFiles/Mservices';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
const AllServices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [servicePerPage, setServicePerPage] = useState(4);
  const locationPath = window.location.pathname;

  const lastServiceIndex = currentPage * servicePerPage;
  const firstLocationIndex = lastServiceIndex - servicePerPage;
  const displayServices = Mservice.slice(firstLocationIndex, lastServiceIndex);
  const formatNames = (name:string)=>{
    const splitName = name.split(".");
    const formattedName = splitName && splitName.length > 1 && splitName[splitName.length - 1].trim().toLowerCase();
    return formattedName || name.toLowerCase();
  }
  const navigate = (service:any)=>{
    window.location.href =`services/${encodeURIComponent(formatNames(service))}`
  }
  return (
    <>
    <div style = {{position:'relative', height:'fit-content'}}>
      <Navigation/>
     {locationPath && <ServicesHeader pathname = {locationPath}/>}
        <div  className = 'all-sv-main-div'>
  {displayServices.map((service:any) => (
    <Card key={service.id} className="all-sv-card" >
      <div className="all-sv-icons-div">
        {React.createElement(serviceIcons[service.id], { style: { width: '70%', height: '70%', color: '#218c74' } })}
      </div>
      <div style={{ marginLeft: '20%' }}>
        <Card.Body>
          <Card.Title style={{ color: '#218c74' }}>
          <NavLink to={`${encodeURIComponent(formatNames(service.name))}`}>{service.name}</NavLink>
            </Card.Title>
          <Card.Text>{service.description}</Card.Text>
        </Card.Body>
      </div>
    </Card>
  ))}
  <Pagination allServices={Mservice} servicePerPage={servicePerPage} setCurrentPage={setCurrentPage} />
</div>
<div className = 'all-sv-banner'>
        <Col>
          <div style={{ width: '320px', height: '60px', background: '#218c74', display: 'flex', alignItems: 'center' }}>
            <h5 style={{ marginLeft: '20px' }}>All Services</h5>
          </div>
          {Mservice.map((service:any) => (
           
    <div onClick ={()=>{navigate(service.name)}} key={service.id} style={{ display:'flex',justifyContent:'space-between',width: '300px', height: '60px', background: '#218c74',alignItems: 'center', marginTop: '10px', marginLeft: '20px' }}>
              <h5 style={{ marginLeft: '20px' }}>{service.name}</h5>
              <div style={{margin:'0 3% 0% 0%'}}>
              <FaArrowRight color = 'white'/>
            </div>
            </div>
          ))}
        </Col>
        </div>

    </div>
    </>
  );
};

export default AllServices;
