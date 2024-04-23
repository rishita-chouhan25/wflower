import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componants/Home";
import About from "./componants/About";
import Rooms from "./componants/Rooms";
import Services from "./componants/Services";
import Gallery from "./componants/Gallery";
import Contact from "./componants/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/services" element={<Services/>}/>
        <Route  path="/rooms" element={<Rooms/>}/>
        <Route  path="/gallery" element={<Gallery/>}/>
        <Route  path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
