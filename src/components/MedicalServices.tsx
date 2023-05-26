import { Card, Col, Row } from "react-bootstrap"
import { FaRadiation } from "react-icons/fa"

const MedicalServices = () => {
  return (
    <div style = {{height:'120vh', margin:'3%'}}>
        <h4 style = {{margin:'5%'}}>Medical Services</h4>
     <Row>
     <Col>
            <Card className="service-card">
                <div className="service-icon-div">
                <FaRadiation/>
                </div>
                <Card.Title>
                    Radiation Therapy
                </Card.Title>
                <Card.Body>
                Experience exceptional radiation therapy at our clinic: compassionate care, and remarkable outcomes.
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="service-card">
                <div className="service-icon-div">
                <FaRadiation/>
                </div>
                <Card.Title>
                    Vaccine Therapy
                </Card.Title>
                <Card.Body>
                Discover the transformative power of vaccine therapy at our clinic: compassionate guidance, and remarkable results.                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="service-card">
                <div className="service-icon-div">
                <FaRadiation/>
                </div>
                <Card.Title>
                Histopathology
                </Card.Title>
                <Card.Body>
                Unleash the potential of histopathology at our clinic: expert analysis, precise diagnoses, and effective treatment strategies.                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="service-card">
                <div className="service-icon-div">
                <FaRadiation/>
                </div>
                <Card.Title>
                Nephrology
                </Card.Title>
                <Card.Body>
                Elevate your nephrology care at our clinic: specialized expertise, personalized treatments, and enhanced well-being for your kidneys.                </Card.Body>
            </Card>
        </Col>
     </Row>
     <Row>
     <Col>
            <Card className="service-card">
                <div className="service-icon-div">
                <FaRadiation/>
                </div>
                <Card.Title>
                Palliative care
                </Card.Title>
                <Card.Body>
                Experience compassionate palliative care at our clinic: dedicated support, enhanced comfort, and meaningful moments for patients and their families.                   </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="service-card">
                <div className="service-icon-div">
                <FaRadiation/>
                </div>
                <Card.Title>
                Ultrasound
                </Card.Title>
                <Card.Body>
                Discover the transformative power of vaccine therapy at our clinic: compassionate guidance, and remarkable results.                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="service-card">
                <div className="service-icon-div">
                <FaRadiation/>
                </div>
                <Card.Title>
                Histopathology
                </Card.Title>
                <Card.Body>
                Unleash the potential of histopathology at our clinic: expert analysis, precise diagnoses, and effective treatment strategies.                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="service-card">
                <div className="service-icon-div">
                <FaRadiation/>
                </div>
                <Card.Title>
                Histopathology
                </Card.Title>
                <Card.Body>
                Unleash the potential of histopathology at our clinic: expert analysis, precise diagnoses, and effective treatment strategies. 
                </Card.Body>
            </Card>
        </Col>
     </Row>
        </div>
  )
}

export default MedicalServices
