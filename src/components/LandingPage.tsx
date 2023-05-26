import { Card } from 'react-bootstrap';
import Img from '../assets/doc.png';
import { FaClinicMedical } from 'react-icons/fa';
const LandingPage = () => {
    return (
      <div>
        <div style={{display:'flex', justifyContent:'center',position:'relative'}}>
            <img style={{height:'100vh'}} src={Img}/>
        </div>
        <div style={{position:'absolute',top:'40%',left:'6%'}}>
            <div>
                <h4><FaClinicMedical  color = 'green'size={20}/><br></br>Cedar Clinic</h4>
                <Card.Body>
                    <p>Providing complete healthcare support</p>
                    <div style={{display:'flex'}}>
                        <button className='home-bt'>Read More</button>
                        <button className='home-bt'>Services</button>
                    </div>
                </Card.Body>
            </div>
        </div>
      </div>
    )
  }
  
  export default LandingPage
  