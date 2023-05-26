import LandingPage from "./LandingPage"
import MedicalServices from "./MedicalServices"
import Navigation from "./NavigationBar"

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
    </div>
  )
}

export default Home
