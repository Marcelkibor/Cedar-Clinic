import './App.css' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route element = {<Home/>} path='/'/>
      </Routes>
    </Router>
  )
}

export default App
