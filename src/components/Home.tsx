import Footer from "./Layouts/Footer"
import InsuranceProviders from "./InsuranceProviders"
import LandingPage from "./LandingPage"
import Navigation from "./Layouts/NavigationBar"
import SliderServices from './Services/SliderServices'
import { useEffect,useState } from "react"
import Menu from "./Menu"
const Home = () => {
const [menuActive,setMenuActive] = useState(false)
useEffect(()=>{
const getWidth = ()=>{
  const h = window.innerWidth
  if(h<=720){
setMenuActive(true)
  }else{
    setMenuActive(false)
  }
}
window.addEventListener('resize',getWidth)
return ()=>{
  window.removeEventListener('resize',getWidth)
}
},[])
  return (
    <div>
        <section id='#navbar'>
          {menuActive?<div><Menu/></div>:<div><Navigation/></div>}
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
