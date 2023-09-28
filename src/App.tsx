import './App.css' 
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import AllServices from './components/Services/AllServices';
import AboutUs from './components/AboutUs';
import Contacts from './components/Contacts';
import OurTeam from './components/OurTeam';
import TeamSelect from './components/TeamSelect';
import ServiceExpand from './components/Services/ServiceExpand';
import AllProviders from './components/AllProviders';

function App() {
  return (
    <Router>
      <Routes>
        <Route element = {<Home/>} path='/'/>
        <Route element = {<AllServices/>} path='/services'/>
        <Route path = '/about-us' element = {<AboutUs/>}/>
        <Route path='/contacts' element = {<Contacts/>}/>
        <Route path = '/our-team' element = {<OurTeam/>}/>
        <Route path="/our-team/:name" element={<TeamSelect/>}/>
        <Route path = '/services/:name' element ={<ServiceExpand/>}/>
        <Route path='/insurance-providers' element={<AllProviders/>}/>
      </Routes>
    </Router>
  )
}

export default App
