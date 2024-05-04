import './App.css';
import Home from './componants/Home';
import About from './componants/About';
import Service from './componants/Service';
import Room from './componants/Room';
import Gallery from './componants/Gallery';
import Contact from './componants/Contact';
import BackToTopButton from './componants/BacktoTop';
import Footer from './componants/Footer';
import Banner from './componants/Banner';
import Map from './componants/Map';

function App() {
  return (
    <div>
      <Home/>
      <About />
            <Room />
            <Service />
            <Banner/>
            <Gallery />
            <Contact />
            <Map/>
            <Footer/>
            <BackToTopButton/>
    </div>
  );
}

export default App;
