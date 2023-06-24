import './App.css' 
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import AllServices from './components/Services/AllServices';
function App() {
  return (
    <Router>
      <Routes>
        <Route element = {<Home/>} path='/'/>
        <Route element = {<AllServices/>} path='/services'/>
      </Routes>
    </Router>
  )
}

export default App
