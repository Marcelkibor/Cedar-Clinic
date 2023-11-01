
import {Row,Col} from 'react-bootstrap'
import Iproviders from './DataFiles/IProviders'
import Navigation from './Layouts/NavigationBar'
import ServicesHeader from './Services/ServicesHeader'
import Footer from './Layouts/Footer'
const AllProviders = () => {
  return (
    <>
    <Navigation/>
    <ServicesHeader pathname={window.location.pathname}/>
    <div style={{ marginTop:'100px',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
    <div style={{ textAlign: 'center' }}>
      <p className='header1'>Insurance Providers</p>
      <p style={{color:'#0a6654'}}>We accept over 10 insurance providers at Cedar Clinic. Take a look at our options.</p>
    </div>
    <div style={{ marginBottom:'50px',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Row style={{marginTop:'-10px'}}>
        {Iproviders.map((item: any) => (
          <Col style={{ paddingTop:'60px',display: 'flex', flexDirection: 'column', alignItems: 'center' }} key={item.id} sm={6} md={6} lg={4}>
            <div style={{ backgroundColor:'white',height: '150px', width: '150px', textAlign: 'center' }}>
              <img style={{ width: '120px', height: '120px' }} src={item.src} />
              <p style={{ color:'#0a6654',fontWeight: 'bold', marginTop: '10px', textAlign: 'center' }}>{item.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
    <Footer />
  </div>
    </>
  
  )
}

export default AllProviders
