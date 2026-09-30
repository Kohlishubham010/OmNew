
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Serv from "./Components/Serv";

import "./App.css";

import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
       

        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />
        <Route path="/serv" element={<Serv />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
