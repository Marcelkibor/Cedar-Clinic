import React, { useState } from 'react';
import Navigation from '../Layouts/NavigationBar';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { Card, Col, Row } from 'react-bootstrap';
import {FaRadiation,FaSyringe,FaMicroscope,FaHands} from 'react-icons/fa'
import Pagination from './Pagination';
import { IconType } from 'react-icons';

const AllServices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [servicePerPage, setServicePerPage] = useState(4);

  const services = [
    { id: 1, title: 'Radiology', description: 'New radiology services' },
    { id: 2, title: 'Oncology Services', description: 'Our Comprehensive Oncology Centre is fully equipped with the latest state of the art equipment for cancer diagnosis and treatment.' },
    { id: 3, title: 'Histopathology', description: 'New radiology services' },
    { id: 4, title: 'Palliative Care', description: 'New radiology services' },
    { id: 5, title: 'Renal Services', description: 'New radiology services' },
    { id: 6, title: 'Tuberculosis (TB)', description: 'Our Comprehensive Oncology Centre is fully equipped with the latest state of the art equipment for cancer diagnosis and treatment.' },
    { id: 7, title: 'Lab Services', description: 'New radiology services' },
  ];
  const serviceIcons: { [key: number]: IconType } = {
    1: FaRadiation,
    2: FaSyringe,
    3: FaMicroscope,
    4: FaHands,
    5: FaRadiation,
    6: FaSyringe,
    7: FaMicroscope,
    8: FaHands,
  };
  

  const lastServiceIndex = currentPage * servicePerPage;
  const firstLocationIndex = lastServiceIndex - servicePerPage;
  const displayServices = services.slice(firstLocationIndex, lastServiceIndex);

  return (
    <>
      <Navigation />
      <div style={{ display: 'flex', width: '100vw', height: '20vh', background: '#00b894', position: 'relative', top: '70px' }}>
        <div style={{position:'absolute', display:'flex',top:'30%',left:'2%'}}>
        <BsArrowRightCircleFill color = 'white' size={30} />
        <div style={{outline:'no-outline'}}>
        <a style = {{color:"white", marginLeft:'10px'}} href='/'>Home</a>
        <a style = {{color:'white',marginLeft:'10px'}}href='/services'>All Services</a>
        </div>
      </div>
      </div>
    
      <Row >
        <Col className='all-sv-banner' style={{ width: '25vw' }}>
          <div style={{ width: '370px', height: '60px', background: '#218c74', display: 'flex', alignItems: 'center' }}>
            <h5 style={{ marginLeft: '20px' }}>All Services</h5>
          </div>
          {services.map(service => (
            <div key={service.id} style={{ width: '350px', height: '60px', background: '#218c74', display: 'flex', alignItems: 'center', marginTop: '10px', marginLeft: '20px' }}>
              <h5 style={{ marginLeft: '20px' }}>{service.title}</h5>
            </div>
          ))}
        </Col>
        <Col>
          <Row className = 'all-sv-row'>
            {displayServices.map(service => (
              <Col key={service.id} style={{ marginBottom: '10px' }}>
                <Card className="all-sv-card">
      <div className="all-sv-icons-div">
      {React.createElement(serviceIcons[service.id], { style: { width: '70%', height: '70%', color:'#218c74' } })}
      </div>
      <div style={{ marginLeft: '20%' }}>
        <Card.Body>
          <Card.Title style={{ color: '#218c74' }}>{service.title}</Card.Title>
          <Card.Text>{service.description}</Card.Text>
        </Card.Body>
      </div>
    </Card>
              </Col>
            ))}
          </Row>
          <Pagination allServices={services} servicePerPage={servicePerPage} setCurrentPage={setCurrentPage} />
        </Col>
      </Row>
    </>
  );
};

export default AllServices;
