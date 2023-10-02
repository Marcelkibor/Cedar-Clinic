import {Row,Col} from 'react-bootstrap';
import BoxResource from './DataFiles/BoxFileResource';
const BoxLinks = () => {
  return (
    <div>
    <Row style={{margin:'2% 3% 0% 3%'}}>
    {BoxResource.map((item:any)=>(
        <Col key={item.id}>
            <div style={{width:'400px',height:'300px',position:'relative'}}>
            <img src={item.src} style={{width:'100%',height:'100%'}}/>
            <div style={{position:'absolute',top:'10px', left:'25%'}}>
            <h3>{item.title}</h3>
            </div>
            </div>
        </Col>
    ))}
    </Row>
    </div>
  )
}

export default BoxLinks
