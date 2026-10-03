import React, { useEffect, useState } from "react";


const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const galleryData = [
    {
      image: "./img/pc-1.jpg",
      title: "Suction Pipe Plant",
      category: "Products",
    },
    {
      image: "./img/pc-2.jpg",
      title: "Rigid PVC Pipe Making Plant",
      category: "Manufacturing",
    },
    {
      image: "./img/pc-3.jpg",
      title: "PVC Tubing Pipe Plant",
      category: "Machinery",
    },
    {
      image: "./img/pc-4.jpg",
      title: "PVC Braided Pipe Plant",
      category: "Factory",
    },
    {
      image: "./img/pc-5.jpg",
      title: "Braided Pipe Machine",
      category: "Products",
    },
    {
      image: "./img/pc-6.jpg",
      title: "High Speed HDPE Pipe Plant",
      category: "Installation",
    },
    {
      image: "./img/pc-7.jpg",
      title: "PVC Braided Hose Plant",
      category: "Fabrication",
    },
    {
      image: "./img/pc-8.jpg",
      title: "Strong PVC Braided Hose Pipe Plant",
      category: "Engineering",
    },
    {
      image: "./img/pc-9.png",
      title: "Braided Pipe Machine",
      category: "Projects",
    },
  ];

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const previousImage = (e) => {
    e.stopPropagation();

    setActiveIndex((prev) =>
      prev === 0 ? galleryData.length - 1 : prev - 1
    );
  };

  const nextImage = (e) => {
    e.stopPropagation();

    setActiveIndex((prev) =>
      prev === galleryData.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleKeyboard = (e) => {
      if (activeIndex === null) return;

      if (e.key === "Escape") {
        closeLightbox();
      }

      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === 0 ? galleryData.length - 1 : prev - 1
        );
      }

      if (e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === galleryData.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <>
    <section>
            <div>
                <img src="./img/gallery-banner.png" alt="Contact Banner" className="img-fluid w-100" />
            </div>  
        </section>
      <section className="oe-gallery-section">
        
        <div className="oe-gallery-container">

          <div className="oe-gallery-heading">
            <h2>Our Gallery</h2>
            <p>
              Explore the precision, quality, and engineering excellence behind our HDPE Pipe Plants, PVC Pipe Plants, Suction Hose Pipe Plants, and other industrial manufacturing solutions.
            </p>
          </div>

          <div className="oe-gallery-grid">

            {galleryData.map((item, index) => (
              <div
                className="oe-gallery-card"
                key={index}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="oe-gallery-image"
                />

                <div className="oe-gallery-gradient"></div>

                <div className="oe-gallery-bottom">

                  <div className="oe-gallery-text">
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                  </div>

                  <div className="oe-gallery-view">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 12C2 12 5.5 6 12 6C18.5 6 22 12 22 12C22 12 18.5 18 12 18C5.5 18 2 12 2 12Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />

                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                    </svg>

                    <span>View Image</span>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {activeIndex !== null && (
        <div
          className="oe-lightbox"
          onClick={closeLightbox}
        >

          <button
            type="button"
            className="oe-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ×
          </button>

          <button
            type="button"
            className="oe-lightbox-arrow oe-lightbox-prev"
            onClick={previousImage}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="oe-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryData[activeIndex].image}
              alt={galleryData[activeIndex].title}
            />

            <h3>{galleryData[activeIndex].title}</h3>
          </div>

          <button
            type="button"
            className="oe-lightbox-arrow oe-lightbox-next"
            onClick={nextImage}
            aria-label="Next image"
          >
            ›
          </button>

        </div>
      )}
    </>
  );
};

export default Gallery;