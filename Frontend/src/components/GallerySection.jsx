import "../style/GallerySection.css";

import cricket1 from "../img/cricket1.jpg";
import cricket2 from "../img/cricket2.jpg";
import cricket3 from "../img/cricket3.jpg";
import cricket4 from "../img/cricket4.jpg";

function GallerySection() {
  const images = [
    { src: cricket1, caption: "Perfect cover drive" },
    { src: cricket2, caption: "Bowled clean" },
    { src: cricket3, caption: "Match day energy" },
    { src: cricket4, caption: "Power hitting" },
  ];

  // duplicate the array so the loop is seamless
  const trackImages = [...images, ...images];

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <span className="gallery-eyebrow">Gallery</span>
        <h2>Moments on the Ground</h2>
        <p>A glimpse of the action at Boundary Club</p>
      </div>

      <div className="gallery-slider">
        <div className="gallery-track">
          {trackImages.map((img, index) => (
            <div className="gallery-slide" key={index}>
              <img
                src={img.src}
                alt={`Boundary Club cricket ${(index % images.length) + 1}`}
              />
              <div className="gallery-overlay">
                <div className="gallery-caption">
                  {img.caption.split(" ").map((word, i) => (
                    <span
                      className="caption-word"
                      key={i}
                      style={{ transitionDelay: `${i * 0.08}s` }}
                    >
                      <span className="caption-word-inner">{word}</span>
                    </span>
                  ))}
                  <span className="gallery-caption-line"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;