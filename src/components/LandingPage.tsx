import { Card } from 'react-bootstrap';
import Img from '../assets/doc.png';
import { FaClinicMedical } from 'react-icons/fa';
const LandingPage = () => {
    return (
  <div>
    <div className = 'landing-img-div'>
        <img style={{height:'100vh'}} src={Img}/>
    </div>
    <div className = 'landing-details'>
        <div>
            <h1><FaClinicMedical  color = 'green'size={20}/><br></br>Cedar Clinic</h1>
                <p>Providing complete healthcare support</p>
                <div style={{display:'flex'}}>
                    <button className='home-bt'>Read More</button>
                    <button className='home-bt'>Services</button>
                </div>   
        </div>
    </div>
  </div>
    )
  }
  
  export default LandingPage
  