import Footer from "./Layouts/Footer"
import InsuranceProviders from "./InsuranceProviders"
import LandingPage from "./LandingPage"
import MedicalServices from "./MedicalServices"
import Navigation from "./Layouts/NavigationBar"
import Services from '../components/Services/Services'

const Home = () => {
  return (
    <div>
        <section>
            <Navigation/>
        </section>
        <section id = "#home">
            <LandingPage/>
        </section>
        <section id = "#services">
            <Services/>
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
