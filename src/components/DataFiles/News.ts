import Tb from '../../assets/tb.avif'
type NewsBody={
    id:number,
    date:string,
    title:string,
    text:string,
    src:string
}
type EventBody={
    id:number,
    title:string,
    date:string,
    text:string
}
const NewsArticle:NewsBody[]=[
    {id:1,date:'14/10/2023',src:Tb,title:'Cheking for Signs of Tuberculosis',text:'In a groundbreaking development in the fight against tuberculosis (TB), scientists have unveiled a cutting-edge diagnostic technique for early detection of the disease. Leveraging advanced molecular technologies and artificial intelligence, researchers have devised a rapid and highly accurate method for checking for signs of tuberculosis. This innovative approach promises to revolutionize TB diagnosis, allowing for quicker intervention and treatment, ultimately saving lives and curbing the spread of this infectious disease. With TB remaining a global health concern, this breakthrough could represent a significant milestone in the ongoing battle against this ancient and persistent threat.'},
]
const EventItem:EventBody[]=[

]
export {NewsArticle,EventItem}
