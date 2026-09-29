
import About from "./Compact/About";
import Gallery from "./Compact/Gallery";
import Navbar from "./Compact/Navbar";
import Footer from "./Compact/Footer";
import Contact from "./Compact/Contact";
import Home from "./Compact/Home";
import Services from "./Compact/Services";

import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
