
import {Row,Col} from 'react-bootstrap'
import Iproviders from './DataFiles/IProviders'
import Navigation from './Layouts/NavigationBar'
import ServicesHeader from './Services/ServicesHeader'
import Footer from './Layouts/Footer'
const AllProviders = () => {
  return (
    <div>
        <Navigation/>
        <ServicesHeader pathname={window.location.pathname}/>
        <div style={{textAlign:'center',marginTop:'100px',color:'#079992'}}>
            <h1>Insurance Providers</h1>
        </div>
        <Row className='extended-providers'>
        {Iproviders.map((item:any)=>(
            <Col className='provider-col' key={item.id}sm={6} md={6} lg={4}>
                <div style={{height:'150px',width:'150px'}}>
                <img style={{width:'150px',height:'150px'}} src={item.src}/>
                <p style={{fontWeight:'bold',marginTop:'10px'}}>{item.name}</p>
                </div>
            </Col>
        ))}
        </Row>
        <Footer/>
    </div>
  )
}

export default AllProviders
