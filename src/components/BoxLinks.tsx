import { Row, Col } from 'react-bootstrap';
import { BoxResource, BxIcons } from './DataFiles/BoxFileResource';
import React from 'react';
import { NavLink } from 'react-router-dom';

const BoxLinks = () => {
  const handleNavigation = (item: any) => {
    switch (item) {
      case 1:
        return <NavLink to="/services">Find Service</NavLink>;
      case 2:
        return <NavLink to="/contacts">Contact Us</NavLink>;
      case 3:
        return <NavLink to="/our-team">Find Doctor</NavLink>;
      default:
        return <NavLink to="/">Home</NavLink>;
    }
  };

  return (
    <Row className="boxlink-main g-3">
      {BoxResource.map((item) => (
        <Col key={item.id} md={4}>
          <div className="box-card">
            <img src={item.src} className="box-image" alt="" />

            <div className="box-overlay" />

            <div className="box-content">
              {React.createElement(BxIcons[item.id], {
                className: "box-icon",
              })}

              <h4>{item.title}</h4>
              <p>{item.description}</p>

              <div className="box-link">
                {handleNavigation(item.id)}
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default BoxLinks;