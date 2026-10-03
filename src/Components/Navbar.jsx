
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
                className={`products-dropdown ${
                  productOpen ? "dropdown-show" : ""
                }`}
              >

                <li>
                  <Link
                    to="/products"
                    onClick={closeMenu}
                  >
                    All Products
                  </Link>
                </li>

                <li>
                  <Link
                    to="/products/plastic-extrusion"
                    onClick={closeMenu}
                  >
                    Plastic Extrusion Machines
                  </Link>
                </li>

                <li>
                  <Link
                    to="/products/pipe-machines"
                    onClick={closeMenu}
                  >
                    Pipe Machines
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


