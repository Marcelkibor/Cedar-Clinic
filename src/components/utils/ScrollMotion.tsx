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
    <div  onClick={handleScroll}className='scroll-motion' >
    <BsArrowUpSquareFill style={{color:'gray',outline:'no-outline'}} size ={40}/>
</div>
}
</>
  )
}
export default ScrollMotion
