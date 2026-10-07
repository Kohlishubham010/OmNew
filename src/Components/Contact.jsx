import React, { useState } from "react";

const Contact = () => {

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  // ============================
  // WEB3FORMS SUBMIT FUNCTION
  // ============================

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setResult("");

    const form = event.target;
    const formData = new FormData(form);

    // Web3Forms Access Key
    formData.append(
      "access_key",
      "45a47ce6-772f-4478-9471-bfb6a827b517"
    );

    // Email Subject
    formData.append(
      "subject",
      "New Enquiry From OM Engineering Works Website"
    );

    // Website name
    formData.append(
      "from_name",
      "OM Engineering Works Website"
    );

    try {

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {

        setResult(
          "Thank you! Your message has been sent successfully."
        );

        // Clear form after successful submission
        form.reset();

      } else {

        console.error("Web3Forms Error:", data);

        setResult(
          data.message ||
          "Something went wrong. Please try again."
        );

      }

    } catch (error) {

      console.error("Form Submission Error:", error);

      setResult(
        "Unable to send your message. Please try again later."
      );

    } finally {

      setLoading(false);

    }
  };


  return (
    <>

      {/* contact banner */}

      <section>
        <div>
          <img
            src="./img/contact-banner.png"
            alt="Contact Banner"
            className="img-fluid w-100"
          />
        </div>
      </section>

      {/* end contact banner */}


      {/* heading */}

      <section className="contact-heading">

        <div className="heading-1">

          <h2>Contact Us</h2>

          <p>
            We are here to assist you with any inquiries, support, or
            information you may need regarding our industrial machinery
            and services. Please feel free to reach out to us through the
            contact form below, and our team will get back to you promptly.
          </p>

        </div>

      </section>

      {/* end heading */}


      {/* form */}

      <section className="contact-section">

        <div className="contact-wrapper">


          {/* LEFT SIDE */}

          <div className="contact-info">

            <div className="contact-info-content">

              <span className="contact-label">
                GET IN TOUCH
              </span>


              <h2>
                Let's Work
                <br />
                <span>Together.</span>
              </h2>


              <p className="contact-description">
                Have a project in mind or need more information
                about our engineering solutions? Our team is
                ready to help you.
              </p>


              {/* Phone */}

              <div className="info-item">

                <div className="info-icon">
                  ☎
                </div>

                <div>
                  <span>CALL US</span>

                  <h4>
                    +91 7971190739
                  </h4>
                </div>

              </div>


              {/* Email */}

              <div className="info-item">

                <div className="info-icon">
                  @
                </div>

                <div>
                  <span>EMAIL US</span>

                  <h4>
                    omengineeringwork@gmail.com
                  </h4>
                </div>

              </div>


              {/* Address */}

              <div className="info-item">

                <div className="info-icon">
                  📍
                </div>

                <div>

                  <span>
                    OUR LOCATION
                  </span>

                  <h4>
                    Kh. No. 581, Ground Floor,
                    Street No. 25, Village Siraspur City,
                    Delhi - 110042, India
                  </h4>

                </div>

              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div className="contact-form-box">


            <div className="form-heading">

              <span>
                CONTACT US
              </span>

              <h2>
                Send Us A <strong>Message</strong>
              </h2>

              <p>
                Fill out the form below and our team will
                get back to you shortly.
              </p>

            </div>


            {/* WEB3FORMS FORM */}

            <form onSubmit={onSubmit}>


              {/* Spam Protection */}

              <input
                type="checkbox"
                name="botcheck"
                style={{ display: "none" }}
              />


              {/* ROW 1 */}

              <div className="form-row">


                <div className="form-group">

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    required
                  />

                </div>

              </div>


              {/* ROW 2 */}

              <div className="form-row">


                <div className="form-group">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    Subject
                  </label>

                  <input
                    type="text"
                    name="enquiry_subject"
                    placeholder="Enter subject"
                    required
                  />

                </div>

              </div>


              {/* MESSAGE */}

              <div className="form-group full-width">

                <label>
                  Your Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  placeholder="Write your message here..."
                  required
                ></textarea>

              </div>


              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                className="send-btn"
                disabled={loading}
              >

                {loading
                  ? "Sending..."
                  : "Send Message"
                }

                {!loading && <span>→</span>}

              </button>


              {/* SUCCESS / ERROR MESSAGE */}

              {result && (

                <p
                  className="form-result"
                  style={{
                    marginTop: "15px",
                    color: result.includes("successfully")
                      ? "green"
                      : "red",
                    fontWeight: "500",
                  }}
                >

                  {result}

                </p>

              )}

            </form>

          </div>

        </div>

      </section>

      {/* end form */}



      {/* faq */}

      <section id="faq-1">

        <div className="container">

          <div
            className="col-lg-12 col-md-12"
            data-aos="fade-up"
            data-aos-duration="2500"
          >

            <div className="faq-area">


              <h3>
                Frequently Asked Questions
              </h3>


              <p>
                “Have questions about our industrial machinery,
                manufacturing process, installation, or services?
                Explore our frequently asked questions to find
                detailed information about our products, solutions,
                and customer support.”
              </p>


              {/* FAQ 1 */}

              <div className="faq-item">

                <details open>

                  <summary>
                    What types of machinery do you manufacture?
                  </summary>

                  <p>
                    OM Engineering Works manufactures and supplies
                    a wide range of industrial machinery for different
                    production, processing and manufacturing requirements.
                    Our machines are designed with a focus on reliable
                    performance, strong construction, efficient operation
                    and long-term usability. We offer machinery suitable
                    for various industries and production applications,
                    depending on the specific requirements of our customers.
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
                    Yes, OM Engineering Works can provide customized
                    machinery based on the specific requirements of your
                    production process. We understand that every business
                    may have different production capacities, working
                    conditions and machine specifications. Our team can
                    discuss your requirements and provide suitable machine
                    solutions with the required specifications, dimensions,
                    capacity and features.
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
                    Yes, we provide installation guidance and technical
                    support to help customers set up and operate their
                    machinery properly. Our team can assist with basic
                    installation requirements, machine setup and operating
                    guidance. We also help customers understand the proper
                    use of the equipment so that the machinery can perform
                    efficiently and safely during regular production
                    operations.
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
                    Getting a quotation is simple. You can contact
                    OM Engineering Works through our enquiry form,
                    phone or WhatsApp and share details about the
                    machinery you are looking for. You can provide
                    information such as machine type, required capacity,
                    production requirements and any customization needed.
                    Our team will review your requirements and provide
                    the relevant machine details and quotation accordingly.
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
                    Yes, customer support is an important part of our
                    service. OM Engineering Works provides assistance
                    after the purchase to help customers with machine
                    operation, basic troubleshooting and other
                    service-related requirements. Our team aims to
                    provide proper guidance so that customers can use
                    their machinery efficiently and maintain smooth
                    production operations.
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
                    OM Engineering Works supplies industrial machinery
                    to businesses and customers in different locations.
                    We work with customers from various industries and
                    production requirements. For delivery and transportation
                    details, customers can contact our team with their
                    location and machine requirements. We will provide
                    the necessary information regarding availability,
                    delivery and other requirements.
                  </p>

                </details>

              </div>


            </div>

          </div>

        </div>

      </section>

      {/* end faq */}



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

      {/* end map */}

    </>
  );
};

export default Contact;