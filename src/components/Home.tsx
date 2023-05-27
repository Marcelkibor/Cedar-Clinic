import DoctorsPage from "./DoctorsPage"
import LandingPage from "./LandingPage"
import MedicalServices from "./MedicalServices"
import Navigation from "./NavigationBar"
import Testimonials from "./Testimonials"

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
            <MedicalServices/>
        </section>   
        <section id="doctors">
        <DoctorsPage/>
        </section>
        <section id="feedback">
        <Testimonials/>
        </section>
    </div>
  )
}

export default Home
