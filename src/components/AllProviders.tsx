import { Row, Col, Spinner } from 'react-bootstrap'
import Navigation from './Layouts/NavigationBar'
import ServicesHeader from './Services/ServicesHeader'
import Footer from './Layouts/Footer'
import { useEffect, useState } from 'react'
import { GetInsurance } from './Admin/Operations/M.Insurance'

const AllProviders = () => {

  interface Insurance {
    id: number;
    name: string;
    image: string;
  }

  const [insuranceProviders, setInsuranceProviders] = useState<Insurance[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsurance = async () => {
      try {
        const res = await GetInsurance();
        if (res) {
          setInsuranceProviders(res);
        }
      } catch (error) {
        console.error("Error fetching insurance providers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInsurance();
  }, []);

  return (
    <>
      <Navigation />
      <ServicesHeader pathname={window.location.pathname} />

      <div style={{
        marginTop: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh'
      }}>

        <div style={{ textAlign: 'center' }}>
          <p className='header1'>Insurance Providers</p>
          <p style={{ color: '#0a6654' }}>
            We accept over 15 insurance providers at Cedar Clinic. Take a look at our options.
          </p>
        </div>

        {/* 🔄 LOADING */}
        {loading ? (
          <div style={{ marginTop: '50px' }}>
            <Spinner animation="border" style={{ color: '#0a6654' }} />
          </div>
        ) : (
          <div style={{
            marginBottom: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Row style={{ marginTop: '-10px' }}>
              {insuranceProviders.map((item) => (
                <Col
                  key={item.id}
                  sm={6}
                  md={6}
                  lg={4}
                  style={{
                    paddingTop: '60px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <div style={{
                    backgroundColor: 'white',
                    height: '150px',
                    width: '150px',
                    textAlign: 'center'
                  }}>
                    <img
                      style={{ width: '120px', height: '120px', objectFit: 'contain' }}
                      src={item.image}
                      alt={item.name}
                    />
                    <p style={{
                      color: '#0a6654',
                      fontWeight: 'bold',
                      marginTop: '10px',
                      textAlign: 'center'
                    }}>
                      {item.name}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        )}

        <Footer />
      </div>
    </>
  )
}

export default AllProviders;