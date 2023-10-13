import Navigation from "./Layouts/NavigationBar"
import {Col, Row} from 'react-bootstrap';
import {AiTwotoneCalendar} from 'react-icons/ai'
import {NewsArticle} from "./DataFiles/News";
import { useParams } from "react-router-dom";
import Footer from "./Layouts/Footer";
import { useEffect } from "react";
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
    </section>
<Row>
    <Col>
    <div  style={{margin:'150px 0px 20px 50px'}}>
    {matchedArticle?
    <>
    <h3>{matchedArticle.title}</h3>
        <hr style={{ width:'350px', border: 'none', borderBottom: '1px solid #2c3e50' }} />
        <div style={{display:'flex'}} id={String(matchedArticle.id)}>
        <AiTwotoneCalendar size={20} color="gray"/>
        <h6 style={{marginLeft:'10px'}}>{matchedArticle.date}</h6>
    </div>
    <hr style={{ width:'350px', border: 'none', borderBottom: '1px solid #2c3e50' }} />
    <Col>
    <div style={{height:'500px',width:'60vw'}}>
    <img style={{height:'100%',width:'100%'}} src={matchedArticle.src}/>
</div>
<div style={{margin:'5% 0% 5% 0%'}}>
<p>{matchedArticle.text}</p>
</div>
<hr style={{ width:'90vw', border: 'none', borderBottom: '1px solid black' }} />
    </Col>
    </>
    :<p>
    Event not found
    </p>}
    </div>
    </Col>
    </Row>
    <Footer/>
    </div>
  )
}

export default NewsExpand
