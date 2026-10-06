import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
const Danaplant = () => {
  return (
    <>
            <div className="service-banner">
                <h1>Dana Plant</h1>

                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Our Products</li>
                    </ol>
                </nav></div>
                 {/* content */}
                 <section className="product-section" data-aos="fade-up" data-aos-duration="1500">
                <div>
                    <div className="container">
                        <h1>
                            Dana Plant</h1>
                        <p>Experience the excellence of our Dana Plant, designed to deliver high-quality and reliable production. With over 12 years of experience in manufacturing, supplying, and trading, we have established ourselves as a trusted provider of Dana Plants. Our Dana Plant and Dana Machine are designed to provide efficient and consistent production.</p>
                        <p>Our Dana Plant is equipped with advanced technology to ensure high-quality output with minimum maintenance. It is designed for smooth operation, high productivity, and efficient performance. The plant is known for its durability and reliability, making it a suitable choice for manufacturers looking for dependable production equipment.</p>
                        <p>The key advantages and features of our Dana Plant include high-quality output, low maintenance, durable construction, reliable performance, and efficient production. The plant is suitable for a wide range of manufacturing applications and can meet different production requirements.</p>
                        <p>With our supply capability covering the All India market, we ensure reliable products and services for customers across the country. Choose our Dana Plant for efficient production, consistent quality, and dependable long-term performance.</p>
                    </div>
                </div>
            </section>
            {/* part 1 */}
            <section className="product-section">
  <div className="product-container">

    <div className="product-card">

      {/* LEFT SIDE */}
      <div className="product-left">

        <div className="product-img-box">
          <img
            src="/pro/6.1.png"
            alt="Plastic Dana Machine"
            className="product-main-img"
          />
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="product-right">

        <div className="product-title-row">

          <div>
            <span className="product-category">
              PLASTIC DANA MACHINE
            </span>

            <h2>
              Plastic Dana Machine
            </h2>
          </div>

          <div className="product-small-icon">
            <i className="bi bi-gear-fill"></i>
          </div>

        </div>

        {/* Price */}
        <div className="product-price-area">

          <span className="product-price">
            1.00 - 1.00 INR
          </span>

          <a
            href="/contact"
            className="latest-price-link"
          >
            Get a Price/Quote
          </a>

        </div>

        {/* Specifications */}
        <div className="specification-card">

          <div className="spec-heading">
            Product Details
          </div>

          <div className="spec-grid">

            <div className="spec-item">
              <span>Machine Type</span>
              <strong>Plastic Dana Machine</strong>
            </div>

            <div className="spec-item">
              <span>Automation Grade</span>
              <strong>Automatic</strong>
            </div>

            <div className="spec-item">
              <span>Driven Type</span>
              <strong>Electric</strong>
            </div>

            <div className="spec-item">
              <span>Application</span>
              <strong>Plastic Granule Making</strong>
            </div>

            <div className="spec-item">
              <span>Operation</span>
              <strong>Continuous</strong>
            </div>

            <div className="spec-item">
              <span>Material Processed</span>
              <strong>Plastic Waste / Raw Plastic</strong>
            </div>

            <div className="spec-item spec-item-full">
              <span>Usage & Applications</span>
              <strong>
                Used for processing plastic material into reusable plastic
                granules for recycling and manufacturing applications.
              </strong>
            </div>

          </div>

        </div>

        {/* Buttons */}
        <div className="product-buttons">

          <a
            href="/contact"
            className="enquire-btn"
          >
            Get a Price/Quote
          </a>

          <a
            href="tel:+919899348723"
            className="call-btn"
          >
            Call Now
          </a>

        </div>

      </div>

    </div>

  </div>
</section>
        </>
  )
}

export default Danaplant;
