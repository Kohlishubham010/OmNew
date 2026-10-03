
import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaUserTie,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();


const Footer = () => {
  return (
    <footer
      className="hk-footer"
      style={{
        "--hk-footer-background": "url('/img/footer.png')",
      }}
    >

      {/* Background */}
      <div className="hk-footer__background"></div>


      <div className="hk-footer__container">

        <div className="hk-footer__grid">


          {/* =========================
              BRAND INFORMATION
          ========================== */}

          <div className="hk-footer__column hk-footer__brand">

            <Link
              to="/"
              className="hk-footer__logo-link"
            >
              <img
                src="./img/logo-1.png"
                alt="Om Engineering Works"
                className="hk-footer__logo"
                loading="lazy"
              />
            </Link>


            <p className="hk-footer__description">
             Om Engineering Works delivers reliable quality and

          innovative solutions for every industrial need. From

          advanced manufacturing plants to essential equipment,

          we provide durable products that ensure efficiency

          and consistent performance for every project.


            </p>


            {/* SOCIAL MEDIA */}

            <div className="hk-footer__socials">

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Om Engineering Works on Facebook"
              >
                <FaFacebookF />
              </a>


              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Om Engineering Works on Instagram"
              >
                <FaInstagram />
              </a>

            </div>

          </div>


          {/* =========================
              QUICK LINKS
          ========================== */}

          <div className="hk-footer__column">

            <h3>
              Quick Links
            </h3>

            <ul>

              <li>
                <Link to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/services">
                  Our Services
                </Link>
              </li>

              <li>
                <Link to="/gallery">
                  Gallery
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>


          {/* =========================
              OUR SERVICES
          ========================== */}

          <div className="hk-footer__column">

            <h3>
              Our Services
            </h3>

            <ul>

              <li>
                <Link to="/serv">
                  PVC Braided Pipe Plant
                </Link>
              </li>

              <li>
                <Link to="/serv">
                  PVC Tubing Pipe Plant
                </Link>
              </li>


              <li>
                <Link to="/serv">
                  Suction Pipe Plant
                </Link>
              </li>
              <li>
                <Link to="/serv">
                  HDPE Pipe Plant
                </Link>
              </li>
              <li>
                <Link to="/serv">
                  Rigid PVC Pipe Making Plant
                </Link>
              </li>

            </ul>

          </div>


          {/* =========================
              CONTACT DETAILS
          ========================== */}

          <div className="hk-footer__column hk-footer__contact">

            <h3>
              Contact Us
            </h3>


            {/* NAME */}

            <a
              href="#"
              className="hk-footer-contact"
              onClick={(e) => e.preventDefault()}
            >

              <span className="hk-footer-contact__icon">
                <FaUserTie />
              </span>

              <span>
                Mr. Om Prakash Singh (Proprietor)
              </span>

            </a>


            {/* PHONE */}

            <a
              href="tel:+91 7971190739"
              className="hk-footer-contact"
            >

              <span className="hk-footer-contact__icon">
                <FaPhone />
              </span>

              <span>
                +91 7971190739
              </span>

            </a>


            {/* EMAIL */}

            <a
              href="mailto:omengineeringwork@gmail.com"
              className="hk-footer-contact"
            >

              <span className="hk-footer-contact__icon">
                <FaEnvelope />
              </span>

              <span>
                omengineeringwork@gmail.com
              </span>

            </a>


            {/* ADDRESS */}

            <a
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.947356653393!2d77.14370707564979!3d28.750988678691243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01030714d7bf%3A0x7f17639429eccf80!2sOM%20ENGINEERING%20WORKS!5e0!3m2!1sen!2sin!4v1790751450492!5m2!1sen!2sin"
              className="hk-footer-contact hk-footer-contact--address"
              target="_blank"
              rel="noopener noreferrer"
            >

              <span className="hk-footer-contact__icon">
                <FaLocationDot />
              </span>

              <span>
                Kh. No. 581, Ground Floor, Street No. 25, Village Siraspur City, Delhi - 110042, India
              </span>

            </a>

          </div>

        </div>


        {/* =========================
            FOOTER BOTTOM
        ========================== */}

        <div className="hk-footer__bottom">

          <p>
            &copy; {currentYear}
            {" "}
            Om Engineering Work. All rights reserved.
          </p>


          <p>
            Designed by{" "}

            <a
              href="https://viraladsmedia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Viral Ads Media
            </a>

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;