import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Serv from "./Components/Serv";
import Services from "./Components/Services";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Navigate to="/home" replace />} />
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
