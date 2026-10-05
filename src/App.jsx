import { Navigate, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Serv from "./Components/Serv";
import Service from "./Components/Service";
import PVCbraidedhosepipeplant from "/src/Components/Services/PVC-braided-hose-pipe-plant";
import Tubingpipeplant from "/src/Components/Services/Tubing-pipe-plant";
import Suctionpipeplant from "/src/Components/Services/Suction-pipe-plant";
import HDPEpipeplant from "/src/Components/Services/HDPE-pipe-plant";
import Rigidpvcpipeplant from "/src/Components/Services/Rigid-pvc-pipe-plant";
import Danaplant from "/src/Components/Services/Dana-plant";
import Machinaryparts from "/src/Components/Services/Machinary-parts";
import Softpvcgardenpipeplant from "/src/Components/Services/Soft-pvc-garden-pipe-plant";
import Nylontubeplant from "/src/Components/Services/Nylon-tube-plant";
import LLDPEdeliverypipekissanpipeplant from "/src/Components/Services/LLDPE-delivery-pipe-kissan-pipe-plant";
import PVCprofileplant from "/src/Components/Services/PVC-profile-plant";
import Singlescrewextruder from "/src/Components/Services/Single-screw-extruder";
import Extruderplant from "/src/Components/Services/Extruder-plant";
import PVCsleevemakingmachine from "/src/Components/Services/PVC-sleeve-making-machine";
import PVCsuctionhosepipeplant from "/src/Components/Services/PVC-suction-hose-pipe-plant";
import Nylonmendelplant from "/src/Components/Services/Nylon-mendel-plant";
import Caterpillar from "/src/Components/Services/Caterpillar";
import LLDPEnylonspiralcuttingmachine from "/src/Components/Services/LLDPE-nylon-spiral-cutting-machine";
import Jockeyextruderliningmachine from "/src/Components/Services/Jockey-extruder-lining-machine";
import Putubeplant from "/src/Components/Services/Pu-tube-plant";
import Highspeedmixer from "/src/Components/Services/High-speed-mixer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
			
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/service" element={<Service />} />
				<Route path="/serv" element={<Serv />} />

				<Route path="/pvc-braided-hose-pipe-plant" element={<PVCbraidedhosepipeplant />} />
				<Route path="/tubing-pipe-plant" element={<Tubingpipeplant />} />
				<Route path="/suction-pipe-plant" element={<Suctionpipeplant />} />
				<Route path="/hdpe-pipe-plant" element={<HDPEpipeplant />} />
				<Route path="/rigid-pvc-pipe-plant" element={<Rigidpvcpipeplant />} />
				<Route path="/dana-plant" element={<Danaplant />} />
				<Route path="/machinary-parts" element={<Machinaryparts />} />
				<Route path="/soft-pvc-garden-pipe-plant" element={<Softpvcgardenpipeplant />} />
				<Route path="/nylon-tube-plant" element={<Nylontubeplant />} />
				<Route path="/lldpe-delivery-pipe-kissan-pipe-plant" element={<LLDPEdeliverypipekissanpipeplant />} />
				<Route path="/pvc-profile-plant" element={<PVCprofileplant />} />
				<Route path="/single-screw-extruder" element={<Singlescrewextruder />} />
				<Route path="/extruder-plant" element={<Extruderplant />} />
				<Route path="/pvc-sleeve-making-machine" element={<PVCsleevemakingmachine />} />
				<Route path="/PVC-suction-hose-pipe-plant" element={<PVCsuctionhosepipeplant />} />
				<Route path="/nylon-mendel-plant" element={<Nylonmendelplant />} />
				<Route path="/caterpillar" element={<Caterpillar />} />
				<Route path="/lldpe-nylon-spiral-cutting-machine" element={<LLDPEnylonspiralcuttingmachine />} />
				<Route path="/jockey-extruder-lining-machine" element={<Jockeyextruderliningmachine />} />
				<Route path="/pu-tube-plant" element={<Putubeplant />} />
				<Route path="/high-speed-mixer" element={<Highspeedmixer />} />

				<Route path="/gallery" element={<Gallery />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
