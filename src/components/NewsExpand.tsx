import Navigation from "./Layouts/NavigationBar"
import {Col, Row} from 'react-bootstrap';
import {AiTwotoneCalendar} from 'react-icons/ai'
import {NewsArticle} from "./DataFiles/News";
import { useParams } from "react-router-dom";
import Footer from "./Layouts/Footer";
import { useEffect } from "react";
import ServicesHeader from "./Services/ServicesHeader";
const NewsExpand = () => {
    useEffect(()=>{
        const nav = document.getElementById("nav");
        if(nav){
            nav.scrollIntoView();
        }
    },[])
    const {id} = useParams<{id:string}>();
    const findNews = (id:any)=>{
        return NewsArticle.find((news)=>(news.id)==id)
    }
    const matchedArticle = findNews(String(id))
    if(matchedArticle){
        console.log(matchedArticle)
    }else{
        console.log('Nothing matches')
    }
  return (
<div>
    <section id="nav">
    <Navigation/>
    <ServicesHeader pathname={`/News`}/>
    </section>
    <Row style={{margin:'100px 0px 0px 0px',width:'100%',height:'100%'}}>
        <Col>
        {matchedArticle?
    <>
    <p style={{fontSize:'20px',color:'#085a4a',textDecoration:'underline',fontWeight:'bold'}}> News</p>
    <p className="header1">{matchedArticle.title}</p>
        <hr style={{ width:'90%', border: 'none', borderBottom: '1px solid #2c3e50' }} />
        <div style={{display:'flex'}} id={String(matchedArticle.id)}>
        <AiTwotoneCalendar size={20} color="gray"/>
        <h6>{matchedArticle.date}</h6>
    </div>
    <hr style={{ width:'350px', border: 'none', borderBottom: '1px solid #2c3e50' }} />
    <Col>
    <div style={{height:'500px',maxWidth:'600px'}}>
    <img style={{height:'100%',width:'100%'}} src={matchedArticle.src}/>
</div>
<div>
<p style={{marginTop:'10px',maxWidth:'900px'}}>{matchedArticle.text}</p>
</div>
<hr style={{ width:'90vw', border: 'none', borderBottom: '1px solid black' }} />
    </Col>
    </>
    :<p>
    Event not found
    </p>}
        </Col>
    </Row>
    <Footer/>
    </div>
  )
}

export default NewsExpand
