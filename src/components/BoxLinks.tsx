import {Row,Col} from 'react-bootstrap';
import BoxResource from './DataFiles/BoxFileResource';
const BoxLinks = () => {
  return (
    <div>
    <Row className='boxlinks'>
    {BoxResource.map((item:any)=>(
        <Col style = {{display:'flex',justifyContent:'center',alignItems:'center'}}key={item.id}>
            <div className="boxlink-main">
            <div style={{marginTop:'20%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h3 style={{color:'white'}}>{item.title}</h3>
            </div>
            </div>
        </Col>
    ))}
    </Row>
    </div>
  )
}

export default BoxLinks
