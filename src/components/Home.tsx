import Footer from "./Layouts/Footer"
import InsuranceProviders from "./InsuranceProviders"
import LandingPage from "./LandingPage"
import Navigation from "./Layouts/NavigationBar"
import SliderServices from './Services/SliderServices'
import { useEffect,useState } from "react"
import Menu from "./Menu"
const Home = () => {
const [menuActive,setMenuActive] = useState(false)
const[sroll,setScroll] = useState(false)
useEffect(()=>{
  if(window.innerWidth<=720){
    setMenuActive(true);
  }
  else{
    setMenuActive(false);
  }
  const isScrolled =()=>{
    if(window.scrollY>20){
      setScroll(true)
    }
    else{
      setScroll(false);
    }
  }
const getWidth = ()=>{
  const h = window.innerWidth
  if(h<=720){
setMenuActive(true)
  }else{
    setMenuActive(false)
  }
}
window.addEventListener('resize',getWidth)
window.addEventListener('scroll',isScrolled)
return ()=>{
  window.removeEventListener('resize',getWidth)
  window.removeEventListener('scroll',isScrolled)
}
},[])
  return (
    <div>
        <section id='#navbar'>
          {menuActive?<div><Menu/></div>:<Navigation/>}
        </section>
        <section id = "#home">
            <LandingPage/>
        </section>
        <section id = "#services">
            <SliderServices/>
        </section>
        <section id = 'providers'>
      <InsuranceProviders/>
        </section>   
        <section id = 'footer'>
          <Footer/>
        </section>
      
    </div>
  )
}

export default Home
