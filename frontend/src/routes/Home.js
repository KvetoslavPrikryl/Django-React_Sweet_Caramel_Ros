import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import About from '../components/About';

const Home = () => {
  return (
    <div>
        <HeroImg />
        <Navbar />
        <About />
        <Footer />
    </div>
  )
}

export default Home