import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {
  FaChartLine,
  FaGears,
  FaHeadset,
  FaLightbulb,
  FaRegSquareCheck,
} from "react-icons/fa6";


const Home = () => {

  return (
    <>
      {/* banner part */}
      <div className="home-banner">

        <Carousel
          controls={true}
          indicators={false}
          interval={3000}
          pause={false}
        >

          {/* Banner 1 */}
          <Carousel.Item>
            <img
              src="./banner-1.png"
              className="d-block w-100"
              alt="Banner"
            />
          </Carousel.Item>


          {/* Banner 2 */}
          <Carousel.Item>
            <img
              src="./banner-2.png"
              className="d-block w-100"
              alt="Banner"
            />
          </Carousel.Item>


          {/* Banner 3 */}
          <Carousel.Item>
            <img
              src="./banner-3.png"
              className="d-block w-100"
              alt="Banner"
            />
          </Carousel.Item>


          {/* Banner 4 */}
          {/* <Carousel.Item>
          <img
            src="/img/banner-11.png"
            className="d-block w-100"
            alt="Banner"
          />
        </Carousel.Item> */}

        </Carousel>

      </div>
      {/* end banner part */}
      <section className="about-section">

        <div className="about-container" >


          {/* LEFT IMAGE AREA */}

          <div className="about-images" data-aos="fade-right" data-aos-duration="1500">


            <div className="image-main">
              <img
                src="./img/ab-1.png"
                alt="OM Engineering Extrusion Machine"
              />
            </div>


            <div className="image-bottom">
              <img
                src="./img/ab-2.png"
                alt="Plastic Pipe Plant Machine"
              />
            </div>


            <div className="image-roll">
              <img
                src="./img/ab-3.png"
                alt="Pipe Extrusion Machine"
              />
            </div>



            <div className="round-shape"></div>



            <div className="quality-badge">

              <h2>100%</h2>

              <p>
                Quality<br />
                Assurance
              </p>

            </div>


          </div>





          {/* RIGHT CONTENT */}


          <div className="about-content" data-aos="fade-left" data-aos-duration="1500">


            <div className="about-title">
              ⚙ About Us
            </div>



            <h1>
              Advanced
              <span> Industrial Machinery Solutions </span>
              Manufacturer
            </h1>


            <p className="about-text">

              OM Engineering Work is a trusted manufacturer and supplier of
              advanced plastic extrusion machinery and complete pipe plant
              solutions. With years of industrial experience, we specialize in
              designing and developing high-performance machines that deliver
              accuracy, durability, and excellent production efficiency.

              Our expertise includes innovative extrusion solutions for PVC,
              HDPE, rigid pipe, and tubing applications, helping industries achieve
              reliable and cost-effective manufacturing processes.

            </p>





            <div className="content-grid">


              <div className="features-box">


                <div className="feature-item">

                  <div className="icon">
                    ⚙
                  </div>


                  <div>

                    <h3>
                      High Quality Machines
                    </h3>


                    <p>
                      We manufacture durable extrusion machines with advanced
                      technology, precision engineering, and long operational life.
                    </p>

                  </div>

                </div>





                <div className="feature-item">

                  <div className="icon">
                    ⚙
                  </div>


                  <div>

                    <h3>
                      Customized Solutions
                    </h3>


                    <p>
                      We provide customized machinery solutions according to
                      specific production requirements and industrial needs.
                    </p>

                  </div>

                </div>


              </div>





              <ul className="machine-list">

                <li>PVC Pipe Plant</li>

                <li>HDPE Pipe Plant</li>

                <li>Rigid PVC Pipe Machine</li>

                <li>PVC Tubing Pipe Plant</li>

                <li>Plastic Extrusion Lines</li>


              </ul>


            </div>





            <button className="read-btn">
              Read More →
            </button>



          </div>



        </div>


      </section>
      {/* about us start */}
      {/* our product */}
      <section className="machines-section">

        <div className="container">

          {/* Section Heading */}
          <div
            className="machines-heading"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2>Explore Our Plastic Extrusion Machines</h2>

            <p>
              At <span> OM Engineering Works,</span> we provide a wide range of high-performance plastic extrusion machines designed for efficient production, durability, and consistent output. Our advanced machinery is suitable for manufacturing various types of pipes, tubes, profiles, and other plastic products, combining reliable technology, precision engineering, and excellent production performance.

            </p>
          </div>


          {/* Machine Cards */}
          <div className="machines-grid">


            {/* Card 1 */}
            <div
              className="machine-card"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="machine-image">
                <img
                  src="./img/pc-1.jpg"
                  alt="PVC Garden Pipe Plant"
                />
              </div>

              <div className="machine-content">
                <h3>PVC Garden Pipe Plant</h3>

                <p>
                  High-performance PVC Garden Pipe Plant designed for efficient
                  production and consistent output.
                </p>

                <button className="machine-btn">
                  View Details <span>↗</span>
                </button>
              </div>
            </div>


            {/* Card 2 */}
            <div
              className="machine-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="machine-image">
                <img
                  src="./img/pc-2.jpg"
                  alt="PVC Braided Hose Pipe Plant"
                />
              </div>

              <div className="machine-content">
                <h3>PVC Braided Hose Pipe Plant</h3>

                <p>
                  Specialized extrusion system for manufacturing high-quality PVC
                  braided hose pipes.
                </p>

                <button className="machine-btn">
                  View Details <span>↗</span>
                </button>
              </div>
            </div>


            {/* Card 3 */}
            <div
              className="machine-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="machine-image">
                <img
                  src="./img/pc-3.jpg"
                  alt="LLDPE Delivery Kissan Pipe Plant"
                />
              </div>

              <div className="machine-content">
                <h3>LLDPE Delivery Kissan Pipe Plant</h3>

                <p>
                  Advanced LLDPE extrusion plant designed for durable and efficient
                  pipe production.
                </p>

                <button className="machine-btn">
                  View Details <span>↗</span>
                </button>
              </div>
            </div>


            {/* Card 4 */}
            <div
              className="machine-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="machine-image">
                <img
                  src="./img/pc-4.jpg"
                  alt="PVC Suction Hose Pipe Plant"
                />
              </div>

              <div className="machine-content">
                <h3>PVC Suction Hose Pipe Plant</h3>

                <p>
                  High-performance machinery for manufacturing strong and flexible
                  PVC suction hoses.
                </p>

                <button className="machine-btn">
                  View Details <span>↗</span>
                </button>
              </div>
            </div>


            {/* Card 5 */}
            <div
              className="machine-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div className="machine-image">
                <img
                  src="./img/pc-5.jpg"
                  alt="PVC Spiral Hose Pipe Plant"
                />
              </div>

              <div className="machine-content">
                <h3>PVC Spiral Hose Pipe Plant</h3>

                <p>
                  Modern extrusion solution for producing durable PVC spiral hose
                  pipes.
                </p>

                <button className="machine-btn">
                  View Details <span>↗</span>
                </button>
              </div>
            </div>


            {/* Card 6 */}
            <div
              className="machine-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <div className="machine-image">
                <img
                  src="./img/pc-6.jpg"
                  alt="PVC Transparent Pipe Plant"
                />
              </div>

              <div className="machine-content">
                <h3>PVC Transparent Pipe Plant</h3>

                <p>
                  Efficient extrusion plant for manufacturing transparent PVC pipes.
                </p>

                <button className="machine-btn">
                  View Details <span>↗</span>
                </button>
              </div>
            </div>


            {/* Card 7 */}
            <div
              className="machine-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <div className="machine-image">
                <img
                  src="./img/pc-7.jpg"
                  alt="HDPE Pipe Plant"
                />
              </div>

              <div className="machine-content">
                <h3>HDPE Pipe Plant</h3>

                <p>
                  High-quality HDPE pipe extrusion plant for reliable industrial
                  production.
                </p>

                <button className="machine-btn">
                  View Details <span>↗</span>
                </button>
              </div>
            </div>


            {/* Card 8 */}
            <div
              className="machine-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <div className="machine-image">
                <img
                  src="./img/pc-8.jpg"
                  alt="PVC Profile Plant"
                />
              </div>

              <div className="machine-content">
                <h3>PVC Profile Plant</h3>

                <p>
                  Precision extrusion machinery for manufacturing different PVC
                  profiles.
                </p>

                <button className="machine-btn">
                  View Details <span>↗</span>
                </button>
              </div>
            </div>


            {/* Card 9 */}
            <div
              className="machine-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <div className="machine-image">
                <img
                  src="./img/pc-9.png"
                  alt="PVC Electrical Conduit Plant"
                />
              </div>

              <div className="machine-content">
                <h3>PVC Electrical Conduit Plant</h3>

                <p>
                  Advanced extrusion system for producing durable electrical conduit
                  pipes.
                </p>

                <button className="machine-btn">
                  View Details <span>↗</span>
                </button>
              </div>
            </div>


            {/* Card 10 */}
            <div
              className="machine-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="900"
            >
              <div className="machine-image">
                <img
                  src="./img/pc-10.jpg"
                  alt="PVC Duct Pipe Plant"
                />
              </div>

              <div className="machine-content">
                <h3>PVC Duct Pipe Plant</h3>

                <p>
                  Industrial-grade extrusion plant designed for high-quality PVC
                  duct pipes.
                </p>

                <button className="machine-btn">
                  View Details <span>↗</span>
                </button>
              </div>
            </div>


            {/* Card 11 */}
            <div
              className="machine-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <div className="machine-image">
                <img
                  src="./img/pc-11.jpg"
                  alt="PPR Pipe Plant"
                />
              </div>

              <div className="machine-content">
                <h3>PPR Pipe Plant</h3>

                <p>
                  Modern PPR pipe extrusion machinery offering efficient production
                  and consistent quality.
                </p>

                <button className="machine-btn">
                  View Details <span>↗</span>
                </button>
              </div>
            </div>


            {/* Card 12 */}
            <div
              className="machine-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1100"
            >
              <div className="machine-image">
                <img
                  src="./img/pc-12.jpg"
                  alt="Multilayer Pipe Plant"
                />
              </div>

              <div className="machine-content">
                <h3>Multilayer Pipe Plant</h3>

                <p>
                  Advanced multilayer extrusion technology designed for precision
                  production.
                </p>

                <button className="machine-btn">
                  View Details <span>↗</span>
                </button>
              </div>
            </div>


          </div>

        </div>

      </section>
      {/* end our products */}

      {/* end about us */}
      {/* why choose us */}
      {/* mission and vision */}
      <section className="mission-section">

        <div className="mission-container">

          {/* Section Heading */}

          <div className="mission-heading" data-aos="fade-up" data-aos-duration="1500">

            <h2>
              Our Mission, Vision <span>and Quality</span> Commitment
            </h2>

            <p>
              Our commitment to innovation, quality and reliable
              engineering solutions.
            </p>

          </div>


          {/* Cards */}

          <div className="mission-grid" >


            {/* =================================
                MISSION
            ================================== */}

            <div className="mission-card" data-aos="fade-right" data-aos-duration="2500">

              <div className="mission-card-content">

                <div className="mission-icon">
                  ⚙
                </div>

                <h3>
                  Our Mission
                </h3>

                <p>
                  Our mission is to design and manufacture
                  high-performance plastic extrusion machines
                  that deliver efficiency, reliability and
                  long-term value. We aim to support industries
                  with advanced technology solutions that
                  enhance productivity and reduce operational
                  costs.
                </p>

              </div>

            </div>



            {/* =================================
                VISION
            ================================== */}

            <div className="mission-card" data-aos="fade-up" data-aos-duration="2500">

              <div className="mission-card-content" >

                <div className="mission-icon">
                  👁
                </div>

                <h3>
                  Our Vision
                </h3>

                <p>
                  Our vision is to become a leading and globally
                  recognized manufacturer of plastic extrusion
                  machinery by continuously innovating,
                  adopting modern technologies and delivering
                  superior quality products that meet
                  international standards.
                </p>

              </div>

            </div>



            {/* =================================
                QUALITY
            ================================== */}

            <div className="mission-card" data-aos="fade-left" data-aos-duration="2500">

              <div className="mission-card-content">

                <div className="mission-icon">
                  🏆
                </div>

                <h3>
                  Quality Commitment
                </h3>

                <p>
                  We are committed to maintaining the highest
                  standards of quality by using premium-grade
                  materials and advanced manufacturing processes.
                  Each machine undergoes strict quality checks
                  to ensure durability, performance and
                  consistent output.
                </p>

              </div>

            </div>


          </div>

        </div>

      </section>
      {/* why choose us */}
      {/* =========================================
    WHY CHOOSE US
========================================= */}

      <section className="why-choose-section">

        <div className="why-choose-container">

          {/* LEFT CONTENT */}
          <div className="why-choose-content" data-aos="fade-right" data-aos-duration="1500">

            {/* Small Heading */}
            <div className="why-small-title">
              <FaRegSquareCheck />
              <span>Why Choose Us</span>
            </div>


            {/* Main Heading */}
            <h2 className="why-main-title">
              Reliable & High-Performance Machine
              <span>Solutions</span>
            </h2>


            {/* Description */}
            <p className="why-description">
              OM Engineering Works is committed to delivering
              high-quality plastic extrusion machines with advanced
              technology, durability and precision engineering. With
              years of experience, we ensure reliable performance,
              efficient production and complete customer satisfaction
              for every industrial requirement.
            </p>


            {/* =================================
                FEATURE 1
            ================================== */}

            <div className="why-feature-card">

              <div className="why-feature-icon">
                <FaGears />
              </div>

              <div className="why-feature-content">

                <h3>
                  Premium Quality Machines
                </h3>

                <p>
                  Our machines are manufactured using high-grade
                  materials and modern technology to ensure
                  durability, strength and long service life.
                </p>

              </div>

            </div>


            {/* =================================
                FEATURE 2
            ================================== */}

            <div className="why-feature-card" >

              <div className="why-feature-icon">
                <FaLightbulb />
              </div>

              <div className="why-feature-content">

                <h3>
                  Customized Solutions
                </h3>

                <p>
                  We provide tailor-made machinery solutions based
                  on client requirements to maximize productivity
                  and operational efficiency.
                </p>

              </div>

            </div>


            {/* =================================
                FEATURE 3
            ================================== */}

            <div className="why-feature-card">

              <div className="why-feature-icon">
                <FaHeadset />
              </div>

              <div className="why-feature-content">

                <h3>
                  Expert Support & Service
                </h3>

                <p>
                  Our experienced team offers complete installation
                  guidance, training and reliable after-sales support
                  for smooth machine operation.
                </p>

              </div>

            </div>


            {/* =================================
                FEATURE 4
            ================================== */}

            <div className="why-feature-card">

              <div className="why-feature-icon">
                <FaChartLine />
              </div>

              <div className="why-feature-content">

                <h3>
                  High Efficiency & Performance
                </h3>

                <p>
                  Our machines are designed for high output,
                  energy efficiency and consistent production
                  quality in demanding industrial environments.
                </p>

              </div>

            </div>

          </div>


          {/* =================================
            RIGHT IMAGE
        ================================== */}

          <div className="why-choose-image" data-aos="fade-left" data-aos-duration="1500">

            <div className="machine-image-wrapper">

              <img
                src="./img/whychoose-1.png"
                alt="OM Engineering Plastic Extrusion Machine"
              />

            </div>

            {/* Decorative Background */}
            <div className="machine-decoration"></div>

          </div>

        </div>

      </section>

      {/* =========================================
    END WHY CHOOSE US
========================================= */}

      {/* faq */}
      <section className="faq-contact-section">

        <div className="container">

          {/* Section Heading */}
          <div className="section-heading text-center">

            <span>CONTACT US</span>

            <h2>
              Frequently Asked Questions
            </h2>

            <p>
              Have questions about our machinery? Find answers to common questions
              or send us your enquiry.
            </p>

          </div>


          <div className="row align-items-start">


            {/* =========================
          FAQ SECTION
      ========================== */}

            <div className="col-lg-6 col-md-12" data-aos="fade-right" data-aos-duration="1500">

              <div className="faq-area">

                <h3>
                  Frequently Asked Questions
                </h3>
                <p>“Have questions about our industrial machinery, manufacturing process, installation, or services? Explore our frequently asked questions to find detailed information about our products, solutions, and customer support.”</p>


                {/* FAQ 1 */}
                <div className="faq-item">

                  <details open>

                    <summary>
                      What types of machinery do you manufacture?
                    </summary>

                    <p>
                      OM Engineering Works manufactures and supplies a wide range of
                      industrial machinery for different production, processing and
                      manufacturing requirements. Our machines are designed with a focus
                      on reliable performance, strong construction, efficient operation
                      and long-term usability. We offer machinery suitable for various
                      industries and production applications, depending on the specific
                      requirements of our customers.
                    </p>

                  </details>

                </div>


                {/* FAQ 2 */}
                <div className="faq-item">

                  <details>

                    <summary>
                      Can you provide customized machinery?
                    </summary>

                    <p>
                      Yes, OM Engineering Works can provide customized machinery based on
                      the specific requirements of your production process. We understand
                      that every business may have different production capacities, working
                      conditions and machine specifications. Our team can discuss your
                      requirements and provide suitable machine solutions with the required
                      specifications, dimensions, capacity and features.
                    </p>

                  </details>

                </div>


                {/* FAQ 3 */}
                <div className="faq-item">

                  <details>

                    <summary>
                      Do you provide installation support?
                    </summary>

                    <p>
                      Yes, we provide installation guidance and technical support to help
                      customers set up and operate their machinery properly. Our team can
                      assist with basic installation requirements, machine setup and
                      operating guidance. We also help customers understand the proper use
                      of the equipment so that the machinery can perform efficiently and
                      safely during regular production operations.
                    </p>

                  </details>

                </div>


                {/* FAQ 4 */}
                <div className="faq-item">

                  <details>

                    <summary>
                      How can I get a quotation for machinery?
                    </summary>

                    <p>
                      Getting a quotation is simple. You can contact OM Engineering Works
                      through our enquiry form, phone or WhatsApp and share details about
                      the machinery you are looking for. You can provide information such
                      as machine type, required capacity, production requirements and any
                      customization needed. Our team will review your requirements and
                      provide the relevant machine details and quotation accordingly.
                    </p>

                  </details>

                </div>


                {/* FAQ 5 */}
                <div className="faq-item">

                  <details>

                    <summary>
                      Do you provide after-sales service?
                    </summary>

                    <p>
                      Yes, customer support is an important part of our service. OM
                      Engineering Works provides assistance after the purchase to help
                      customers with machine operation, basic troubleshooting and other
                      service-related requirements. Our team aims to provide proper
                      guidance so that customers can use their machinery efficiently and
                      maintain smooth production operations.
                    </p>

                  </details>

                </div>


                {/* FAQ 6 */}
                <div className="faq-item">

                  <details>

                    <summary>
                      Where do you supply your machinery?
                    </summary>

                    <p>
                      OM Engineering Works supplies industrial machinery to businesses and
                      customers in different locations. We work with customers from
                      various industries and production requirements. For delivery and
                      transportation details, customers can contact our team with their
                      location and machine requirements. We will provide the necessary
                      information regarding availability, delivery and other requirements.
                    </p>

                  </details>

                </div>

              </div>

            </div>



            {/* =========================
          CONTACT FORM
      ========================== */}

            <div className="col-lg-6 col-md-12" data-aos="fade-left" data-aos-duration="1500">

              <div className="contact-form-box">

                <div className="contact-form-heading">

                  <span>GET IN TOUCH</span>

                  <h3>
                    Send Us Your Enquiry
                  </h3>

                  <p>
                    Tell us about your machinery requirements and our team
                    will get back to you.
                  </p>

                </div>


                <form>

                  {/* Name */}
                  <div className="form-group">

                    <label>
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />

                  </div>


                  {/* Email */}
                  <div className="form-group">

                    <label>
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />

                  </div>


                  {/* Phone */}
                  <div className="form-group">

                    <label>
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      required
                    />

                  </div>





                  {/* Message */}
                  <div className="form-group">

                    <label>
                      Your Message
                    </label>

                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Tell us about your requirement..."
                    ></textarea>

                  </div>


                  {/* Submit */}
                  <button
                    type="submit"
                    className="contact-submit-btn"
                  >
                    Send Enquiry
                    <span> → </span>
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* end faq */}
      {/* testimonal */}
      <section className="testimonial-section">

        <div className="container">

          {/* Heading */}
          <div className="testimonial-heading text-center">
            <span>TESTIMONIALS</span>

            <h2>What Our Customers Say</h2>

            <p>
              Our customers share their experience with OM Engineering Works
              machinery and services.
            </p>
          </div>


          {/* Testimonial Slider */}
          <div className="testimonial-slider">

            {/* Previous Button */}
            {/* <button className="testimonial-arrow testimonial-prev">
        &#10094;
      </button> */}


            {/* Cards */}
            <div className="testimonial-track">


              {/* Card 1 */}
              <div className="testimonial-card">

                <div className="testimonial-user">

                  <img
                    src="./img/p-1.png"
                    alt="Shree Balaji Industries"
                  />

                  <div>
                    <h4>Shree Balaji Industries</h4>

                    <div className="testimonial-rating">
                      ★★★★★
                    </div>
                  </div>

                </div>

                <p>
                  "We purchased machinery from OM Engineering Works and are very
                  satisfied with its performance. The machine quality is excellent
                  and works smoothly with minimum maintenance."
                </p>

                <span className="testimonial-quote">
                  ❝
                </span>

              </div>


              {/* Card 2 */}
              <div className="testimonial-card">

                <div className="testimonial-user">

                  <img
                    src="./img/p-2.png"
                    alt="Agarwal Industries"
                  />

                  <div>
                    <h4>Agarwal Industries</h4>

                    <div className="testimonial-rating">
                      ★★★★★
                    </div>
                  </div>

                </div>

                <p>
                  "The machinery quality is very good and the team provided proper
                  guidance during installation. We are happy with the product and
                  after-sales support."
                </p>

                <span className="testimonial-quote">
                  ❝
                </span>

              </div>


              {/* Card 3 */}
              <div className="testimonial-card">

                <div className="testimonial-user">

                  <img
                    src="./img/p-3.png"
                    alt="OM Food Products"
                  />

                  <div>
                    <h4>OM Food Products</h4>

                    <div className="testimonial-rating">
                      ★★★★★
                    </div>
                  </div>

                </div>

                <p>
                  "We are using OM Engineering Works machinery for our production
                  process. The machine is strong, reliable and gives excellent
                  production results."
                </p>

                <span className="testimonial-quote">
                  ❝
                </span>

              </div>


              {/* Card 4 */}
              <div className="testimonial-card">

                <div className="testimonial-user">

                  <img
                    src="./img/p-4.png"
                    alt="Sharma Manufacturing"
                  />

                  <div>
                    <h4>Sharma Manufacturing</h4>

                    <div className="testimonial-rating">
                      ★★★★★
                    </div>
                  </div>

                </div>

                <p>
                  "OM Engineering Works delivered a high-quality machine according
                  to our requirements. The build quality is impressive and the
                  machine has been performing very well."
                </p>

                <span className="testimonial-quote">
                  ❝
                </span>

              </div>


              {/* Card 5 */}
              <div className="testimonial-card">

                <div className="testimonial-user">

                  <img
                    src="./img/p-5.png"
                    alt="Gupta Enterprises"
                  />

                  <div>
                    <h4>Gupta Enterprises</h4>

                    <div className="testimonial-rating">
                      ★★★★★
                    </div>
                  </div>

                </div>

                <p>
                  "We appreciate the professional service provided by OM Engineering
                  Works. The machinery is easy to operate, efficient and built with
                  good-quality components."
                </p>

                <span className="testimonial-quote">
                  ❝
                </span>

              </div>


              {/* Card 6 */}
              <div className="testimonial-card">

                <div className="testimonial-user">

                  <img
                    src="./img/p-6.png"
                    alt="Shree Ganesh Industries"
                  />

                  <div>
                    <h4>Shree Ganesh Industries</h4>

                    <div className="testimonial-rating">
                      ★★★★★
                    </div>
                  </div>

                </div>

                <p>
                  "Excellent machinery and dependable service. The OM Engineering
                  Works team understood our requirements and supplied a machine
                  that suits our production needs perfectly."
                </p>

                <span className="testimonial-quote">
                  ❝
                </span>

              </div>


            </div>


            {/* Next Button */}
            {/* <button className="testimonial-arrow testimonial-next">
        &#10095;
      </button> */}

          </div>


          {/* Slider Dots */}
          {/* <div className="testimonial-dots">

      <span className="active"></span>
      <span></span>

    </div> */}

        </div>

      </section>
      {/* map */}
      <section className="map-section">

        <div className="cd">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.947356653393!2d77.14370707564979!3d28.750988678691243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01030714d7bf%3A0x7f17639429eccf80!2sOM%20ENGINEERING%20WORKS!5e0!3m2!1sen!2sin!4v1790770390629!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="OM Engineering Works Location"
          ></iframe>

        </div>

      </section>
    </>




  )
}
export default Home;