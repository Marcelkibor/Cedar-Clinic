import { Card, Col, Row } from "react-bootstrap"
import { FaHandHoldingMedical, FaHands, FaHeart, FaMicroscope, FaRadiation, FaRulerHorizontal, FaSoundcloud, FaSpeakerDeck, FaSyringe  } from "react-icons/fa"

const MedicalServices = () => {
  return (
    <div className = 'services-div'>
        <h1 style = {{margin:'5%'}}>Our Services</h1>
     <div className="service-rows">
     <Row>
     <Col>
            <Card className="service-card">
                <div className="service-icon-div">
                <FaRadiation color = 'white' size = {40}/>
                </div>
                <Card.Title>
                    Radiation Therapy
                </Card.Title>
                <Card.Body>
                Experience exceptional radiation therapy at our clinic: compassionate care, and remarkable outcomes.
                </Card.Body>
                <button className="home-bt">Learn More</button>
            </Card>
        </Col>
        <Col>
            <Card className="service-card">
                <div className="service-icon-div">
                <FaSyringe color = 'white' size = {40}/>
                </div>
                <Card.Title>
                    Vaccine Therapy
                </Card.Title>
                <Card.Body>
                Discover the transformative power of vaccine therapy at our clinic: compassionate guidance, and remarkable results.                </Card.Body>
                <button className="home-bt">Learn More</button>
            </Card>
        </Col>
        <Col>
            <Card className="service-card">
                <div className="service-icon-div">
                <FaMicroscope color = 'white' size = {40}/>
                </div>
                <Card.Title>
                Histopathology
                </Card.Title>
                <Card.Body>
                Unleash the potential of histopathology at our clinic: expert analysis, precise diagnoses, and effective treatment strategies.                </Card.Body>
                <button className="home-bt">Learn More</button>
            </Card>
        </Col>
     <Col>
            <Card className="service-card">
                <div className="service-icon-div">
                <FaHands color = 'white' size = {40} />
                </div>
                <Card.Title>
                Palliative care
                </Card.Title>
                <Card.Body>
                Experience compassionate palliative care at our clinic: dedicated support, enhanced comfort, and meaningful moments for patients and their families.                   </Card.Body>
                <button className="home-bt">Learn More</button>
            </Card>
        </Col>
        <Col>
            <Card className="service-card">
                <div className="service-icon-div">
                <FaRadiation color = 'white' size = {40} />
                </div>
                <Card.Title>
                Histopathology
                </Card.Title>
                <Card.Body>
                Unleash the potential of histopathology at our clinic: expert analysis, precise diagnoses, and effective treatment strategies.                </Card.Body>
                <button className="home-bt">Learn More</button>

            </Card>
        </Col>
        <Col>
            <Card className="service-card">
                <div className="service-icon-div">
                <FaRadiation color = 'white' size = {40}/>
                </div>
                <Card.Title>
                Histopathology
                </Card.Title>
                <Card.Body>
                Unleash the potential of histopathology at our clinic: expert analysis, precise diagnoses, and effective treatment strategies. 
                </Card.Body>
                <button className="home-bt">Learn More</button>
            </Card>
        </Col>
     </Row>
     </div>

        </div>
  )
}

export default MedicalServices
