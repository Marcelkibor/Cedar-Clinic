import {Row,Col} from 'react-bootstrap'
import {AiTwotoneCalendar} from 'react-icons/ai'
import {EventItem, NewsArticle} from './DataFiles/News'
import { NavLink } from 'react-router-dom'
const NewsAndEvents = () => {
  return (
    <div>
        <Row style={{margin:'50px 10px 200px 10px'}}>
        
    <Col style={{margin:'10px 0px 10px 20px'}}>
    <h3 style={{margin:'0px 0px 10px 10px',color:'#006266'}}>News</h3>
    <hr style={{ width:'350px', border: 'none', borderBottom: '1px solid gray' }} />
    {NewsArticle.length>0?NewsArticle.map((news:any)=>(
    <div id={news.id}>
        <div style={{display:'flex',margin:'10px'}}>
            <AiTwotoneCalendar size={20} color="gray"/>
            <h6>{news.date}</h6>
        </div>
        <div style={{position:'relative',width:'100%',height:"fit-content",display:'block'}}>
            <NavLink to={`article/${encodeURIComponent(news.id)}`} style={{textDecoration:'none',fontSize:'22px',color:'#006266',fontWeight:'bold'}}>{news.title}</NavLink>
            <div>
            <button onClick={()=>{window.location.pathname=`article/${encodeURIComponent(news.id)}`}}className='bt'>Read More</button>
            </div>
        </div>
    </div>
)):<h5>No News</h5>}
</Col>
          <Col style={{margin:'10px 0px 10px 20px'}}>
          <h3 style={{color:'#006266'}}>Events</h3>
          <hr style={{ width:'350px', border: 'none', borderBottom: '1px solid gray' }} />
          {EventItem.length>0? EventItem.map((event:any)=><div>
            <div id={event.id}>
        <div style={{display:'flex',margin:'10px'}}>
            <AiTwotoneCalendar size={20} color="gray"/>
            <h6>{event.date}</h6>
        </div>
        <div style={{position:'relative',width:'100%',height:"fit-content",display:'block'}}>
            <NavLink to={`article/${encodeURIComponent(event.id)}`} style={{textDecoration:'none',fontSize:'22px',color:'#006266',fontWeight:'bold'}}>{event.title}</NavLink>
            <div>
            <button onClick={()=>{window.location.pathname=`article/${encodeURIComponent(event.id)}`}}className='bt'>Read More</button>
            </div>
        </div>
    </div>
          </div>):
            <h5>No Upcoming Events</h5>
          }
          </Col>
        </Row>
    </div>
  )
}

export default NewsAndEvents
