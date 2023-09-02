import Footer from "./Layouts/Footer"
import InsuranceProviders from "./InsuranceProviders"
import LandingPage from "./LandingPage"
import Navigation from "./Layouts/NavigationBar"
import SliderServices from './Services/SliderServices'
const Home = () => {
  return (
    <div>
        <section id='#navbar'>
        <Navigation/>
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
