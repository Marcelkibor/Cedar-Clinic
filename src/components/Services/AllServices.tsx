import React, { useState } from 'react';
import Navigation from '../NavigationBar';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { Card, Col, Row } from 'react-bootstrap';
import Services from '../Services';
import Pagination from './Pagination';

const AllServices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [servicePerPage, setServicePerPage] = useState(4);

  const services = [
    { id: 1, title: 'Radiology', description: 'New radiology services' },
    { id: 2, title: 'Oncology Services', description: 'Our Comprehensive Oncology Centre is fully equipped with the latest state of the art equipment for cancer diagnosis and treatment.' },
    { id: 3, title: 'Histopathology', description: 'New radiology services' },
    { id: 4, title: 'Palliative Care', description: 'New radiology services' },
    { id: 5, title: 'Radiology', description: 'New radiology services' },
    { id: 6, title: 'Oncology Services', description: 'Our Comprehensive Oncology Centre is fully equipped with the latest state of the art equipment for cancer diagnosis and treatment.' },
    { id: 7, title: 'Histopathology', description: 'New radiology services' },
    { id: 8, title: 'Palliative Care', description: 'New radiology services' },
  ];

  const lastServiceIndex = currentPage * servicePerPage;
  const firstLocationIndex = lastServiceIndex - servicePerPage;
  const displayServices = services.slice(firstLocationIndex, lastServiceIndex);

  return (
    <>
      <Navigation />
      <div style={{ display: 'flex', width: '100vw', height: '20vh', background: '#00b894', position: 'relative', top: '70px' }}>
        <BsArrowRightCircleFill style={{ top: '25%', left: '7%', color: 'white', position: 'absolute' }} size={50} />
        <div style={{display:'flex', position:'absolute',top:'28%',left:'12%',outline:'no-outline'}}>
        <a href='/'>Home</a>
        <a style = {{marginLeft:'20px'}}href='/services'>All Services</a>
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
                <Card className = 'all-sv-card'>
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
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
