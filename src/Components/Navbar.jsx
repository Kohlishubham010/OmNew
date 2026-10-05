
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container">

//         <Link className="navbar-brand" to="/">
//           <img
//             src="./src/assets/logo-1.png"
//             alt="Logo"
//             className="img-fluid"
//           />
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">

//             <li className="nav-item">
//               <Link className="nav-link animated-link" to="/">
//                 Home
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link animated-link" to="/about">
//                 About
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link animated-link" to="/services">
//                 Services
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link animated-link" to="/gallery">
//                 Gallery
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link animated-link" to="/contact">
//                 Contact
//               </Link>
//             </li>

//           </ul>
//         </div>

//       </div>
//     </nav>
//   );
// }


//   export default Navbar;


import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-1.png";


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setProductOpen(false);
  };

  return (
    <>

      <section className="announcement-bar">

        <div className="announcement-track">

          <div className="announcement-content">

            <span className="offer-text">
              🔥 Special Offer! Get High-Quality Plastic Extrusion Machines at Competitive Prices
            </span>

            <span className="separator">|</span>

            <span>
              📞 07971190739
            </span>

            <span className="separator">|</span>

            <span>
              📱 +91 80108 68917
            </span>

            <span className="separator">|</span>

            <span>
              ✉️ omengineeringwork@gmail.com
            </span>

            <span className="separator">|</span>

            <span className="offer-text">
              🚚 Contact Us Today for Machine Details & Bulk Enquiries!
            </span>

            <span className="separator">|</span>

          </div>


          {/* Duplicate content for continuous scrolling */}

          <div className="announcement-content">

            <span className="offer-text">
              🔥 Special Offer! Get High-Quality Plastic Extrusion Machines at Competitive Prices
            </span>

            <span className="separator">|</span>

            <span>
              📞 07971190739
            </span>

            <span className="separator">|</span>

            <span>
              📱 +91 80108 68917
            </span>

            <span className="separator">|</span>

            <span>
              ✉️ omengineeringwork@gmail.com
            </span>

            <span className="separator">|</span>

            <span className="offer-text">
              🚚 Contact Us Today for Machine Details & Bulk Enquiries!
            </span>

            <span className="separator">|</span>

          </div>

        </div>

      </section>


      <nav className="main-navbar">

        <div className="navbar-container">

          {/* ================= LOGO ================= */}

          <Link
            className="navbar-logo"
            to="/"
            onClick={closeMenu}
          >
            <img
              src={logo}
              alt="OM Engineering Works"
            />
          </Link>


          {/* ================= MOBILE MENU BUTTON ================= */}

          <button
            className={`mobile-menu-btn ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >

            <span></span>
            <span></span>
            <span></span>

          </button>


          {/* ================= NAVIGATION ================= */}

          <div
            className={`navbar-menu ${menuOpen ? "show" : ""}`}
          >

            <ul className="navbar-links">

              {/* HOME */}

              <li>
                <Link
                  className="nav-link active"
                  to="/"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>


              {/* ABOUT */}

              <li>
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </li>


              {/* PRODUCTS */}

              <li className="products-menu">

                <button
                  className="nav-link product-button"
                  onClick={() => setProductOpen(!productOpen)}
                >

                  Products

                  <span className="dropdown-arrow">
                    ⌄
                  </span>

                </button>


                <ul
                  className={`products-dropdown ${productOpen ? "dropdown-show" : ""
                    }`}
                >

                  

                  <li>
                    <Link
                      to="/PVC-braided-hose-pipe-plant"
                      onClick={closeMenu}
                    >
                      PVC Braided Hose Pipe Plant
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/Tubing-pipe-plant"
                      onClick={closeMenu}
                    >
                      PVC Tubing Pipe Plant
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Suction-pipe-plant"
                      onClick={closeMenu}
                    >
                      Suction Hose Pipe Plant
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/HDPE-pipe-plant"
                      onClick={closeMenu}
                    >
                      HDPE Pipe Plant
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Rigid-pvc-pipe-plant"
                      onClick={closeMenu}
                    >
                      Rigid PVC Pipe Plant
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Dana-plant"
                      onClick={closeMenu}
                    >
                      Dana Plant
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Machinary-parts"
                      onClick={closeMenu}
                    >
                      Machinary Parts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Soft-pvc-garden-pipe-plant"
                      onClick={closeMenu}
                    >
                      Soft PVC Garden Pipe Plant
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Nylon-tube-plant"
                      onClick={closeMenu}
                    >
                      Nylon Tube Plant
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/LLDPE-delivery-pipe-kissan-pipe-plant"
                      onClick={closeMenu}
                    >
                      LLDPE Delivery Pipe Kissan Pipe Plant
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/PVC-profile-plant"
                      onClick={closeMenu}
                    >
                      PVC Profile Plant
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Single-screw-extruder"
                      onClick={closeMenu}
                    >
                      Single Screw Extruder
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Extruder-plant"
                      onClick={closeMenu}
                    >
                      Extruder Plant
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/PVC-sleeve-making-machine"
                      onClick={closeMenu}
                    >
                      PVC Sleeve Making Machine
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/PVC-suction-hose-pipe-plant"
                      onClick={closeMenu}
                    >
                      PVC Suction Hose Pipe Plant
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Nylon-mendel-plant"
                      onClick={closeMenu}
                    >
                      Nylon Mendel Plant
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Caterpillar"
                      onClick={closeMenu}
                    >
                      Caterpillar
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/LLDPE-nylon-spiral-cutting-machine"
                      onClick={closeMenu}
                    >
                      LLDPE Nylon Spiral Cutting Machine
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Jockey-extruder-lining-machine"
                      onClick={closeMenu}
                    >
                      Jockey Extruder Lining Machine
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Pu-tube-plant"
                      onClick={closeMenu}
                    >
                      PU Tube Plant
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/High-speed-mixer"
                      onClick={closeMenu}
                    >
                      High Speed Mixer
                    </Link>
                  </li>

                </ul>

              </li>


              {/* GALLERY */}

              <li>
                <Link
                  className="nav-link"
                  to="/gallery"
                  onClick={closeMenu}
                >
                  Gallery
                </Link>
              </li>


              {/* CONTACT */}

              <li>
                <Link
                  className="nav-link"
                  to="/contact"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>

            </ul>


            {/* ================= RIGHT SIDE ================= */}

            <div className="navbar-right">

              {/* PHONE */}

              <a
                href="tel:+917971190739"
                className="navbar-phone"
              >

                <span className="phone-icon">
                  ☎
                </span>

                +91 79711 90739

              </a>


              {/* CONTACT BUTTON */}

              <Link
                to="/contact"
                className="contact-btn"
                onClick={closeMenu}
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </nav>
    </>
  );
};

export default Navbar;


