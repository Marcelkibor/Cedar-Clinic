import React, { useEffect, useState } from 'react';
import Navigation from '../Layouts/NavigationBar';
import { Card, Col} from 'react-bootstrap';
import Pagination from './Pagination';
import ServicesHeader from './ServicesHeader';
import  {formatNames}  from '../utils/Functions';
import {Mservice,serviceIcons} from '../DataFiles/Mservices';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Footer from '../Layouts/Footer';
const AllServices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [servicePerPage] = useState(4);
  const locationPath = window.location.pathname;
  useEffect(()=>{
    const top = document.getElementById("layout");
    if(top){
      top.scrollIntoView();
    }
  },[])
  const lastServiceIndex = currentPage * servicePerPage;
  const firstLocationIndex = lastServiceIndex - servicePerPage;
  const displayServices = Mservice.slice(firstLocationIndex, lastServiceIndex);
  const handlePageChange =(page:any)=>{
    setCurrentPage(page)
  }
  const navigate = (service:any)=>{
    window.location.href =`services/${encodeURIComponent(formatNames(service))}`
  }
  return (
    <>
    <div className='all-services' id='layout'>
      <Navigation/>
     {locationPath && <ServicesHeader pathname = {locationPath}/>}
        <div style={{marginRight:'5%'}}  className = 'all-sv-main-div'>
  {displayServices.map((service:any) => (
    <Card key={service.id} className="all-sv-card" >
      <div className="all-sv-icons-div">
        {React.createElement(serviceIcons[service.id], { style: { width: '70%', height: '70%', color: '#218c74' } })}
      </div>
      <div style={{ marginLeft: '20%' }}>
        <Card.Body>
          <Card.Title>
          <NavLink  style={{color:'#006266',fontWeight:'bold'}}to={`${encodeURIComponent(formatNames(service.name))}`}>{service.name}</NavLink>
            </Card.Title>
          <Card.Text style={{color:'#0a3d62'}}>{service.description}</Card.Text>
        </Card.Body>
      </div>
    </Card>
  ))}
  <Pagination allServices={Mservice} servicePerPage={servicePerPage} setCurrentPage={handlePageChange} currentPage={currentPage} />
</div>
<div className = 'all-sv-banner'>
        <Col>
          <div className='banner-header'>
            <h5 style={{ marginLeft: '20px' }}>All Services</h5>
          </div>
          {Mservice.map((service:any) => (
           
    <div onClick ={()=>{navigate(service.name)}} key={service.id} className='service-header-items'>
              <h5 style={{ marginLeft: '20px',cursor:'pointer' }}>{service.name}</h5>
              <div style={{margin:'0 3% 0% 0%'}}>
              <FaArrowRight color = 'white'/>
            </div>
            </div>
          ))}
        </Col>
        </div>
    </div>
    <Footer/>
    </>
  );
};

export default AllServices;
