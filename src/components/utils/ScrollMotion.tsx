import {BsArrowUpSquareFill} from 'react-icons/bs'
import { useEffect, useState } from 'react'
const ScrollMotion = () => {
const [scroller,setScroller] = useState(false);
useEffect(()=>{
const handleScoller =()=>{
    if(window.scrollY>80){
        setScroller(true);
    }else{
        setScroller(false);
    }
}
window.addEventListener('scroll',handleScoller);
},[])
const handleScroll =()=>{
    window.scrollTo({top:0})
}
return (
<>
{scroller &&
    <div  onClick={handleScroll}style={{position:'fixed',zIndex:9999,bottom:'30px',right:"20px"}} >
    <BsArrowUpSquareFill style={{color:'#12CBC4',outline:'no-outline'}} size ={50}/>
</div>
}
</>
  )
}
export default ScrollMotion
