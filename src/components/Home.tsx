import Footer from "./Footer"
import InsuranceProviders from "./InsuranceProviders"
import LandingPage from "./LandingPage"
import MedicalServices from "./MedicalServices"
import Navigation from "./NavigationBar"
import Services from "./Services"

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
