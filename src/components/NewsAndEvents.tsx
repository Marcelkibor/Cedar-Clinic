import {Row,Col} from 'react-bootstrap'
import {AiTwotoneCalendar} from 'react-icons/ai'
import {EventItem, NewsArticle} from './DataFiles/News'
import { NavLink } from 'react-router-dom'
const NewsAndEvents = () => {
  return (
    <div style={{backgroundColor:'#2f927e'}}>
        <Row style={{margin:'0px 10px 0px 10px',paddingBottom:'20px'}}>
        
    <Col>
    <p style={{fontSize:'25px',color:'white',fontWeight:'bold'}}>News</p>
    <hr style={{ width:'350px', border: 'none', borderBottom: '1px solid gray' }} />
    {NewsArticle.length>0?NewsArticle.map((news:any)=>(
    <div id={news.id}>
        <div style={{display:'flex',margin:'10px'}}>
            <AiTwotoneCalendar size={20} color="white"/>
            <p style={{fontSize:'18px',color:'white',fontWeight:'bold'}}>{news.date}</p>
        </div>
        <div style={{position:'relative',width:'100%',height:"fit-content",display:'block'}}>
            <p >
            <NavLink style={{color:'white',fontSize:'18px'}} to={`article/${encodeURIComponent(news.id)}`}>{news.title}</NavLink>
              </p>
            <div>
            <button onClick={()=>{window.location.pathname=`article/${encodeURIComponent(news.id)}`}}className='bt'>Read More</button>
            </div>
        </div>
    </div>
)):<p style={{fontSize:'25px',color:'white',fontWeight:'bold'}}>No News</p>
}
</Col>
          <Col>
          <p style={{fontSize:'25px',color:'white',fontWeight:'bold'}}>Events</p>
          <hr style={{ width:'350px', border: 'none', borderBottom: '1px solid gray' }} />
          {EventItem.length>0? EventItem.map((event:any)=><div>
            <div id={event.id}>
        <div style={{display:'flex',margin:'10px'}}>
            <AiTwotoneCalendar size={20} color="white"/>
            <h6>{event.date}</h6>
        </div>
        <div style={{position:'relative',width:'100%',height:"fit-content",display:'block'}}>
            <NavLink to={`article/${encodeURIComponent(event.id)}`} style={{textDecoration:'none',fontSize:'22px',fontWeight:'bold'}}>{event.title}</NavLink>
            <div>
            <button onClick={()=>{window.location.pathname=`article/${encodeURIComponent(event.id)}`}}className='bt'>Read More</button>
            </div>
        </div>
    </div>
          </div>):
             <p style={{fontSize:'20px',color:'white',fontWeight:'bold'}}>No Upcoming Events</p>

          }
          </Col>
        </Row>
    </div>
  )
}

export default NewsAndEvents
