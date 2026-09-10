import "../style/GallerySection.css";

import cricket1 from "../img/cricket1.jpg";
import cricket2 from "../img/cricket2.jpg";
import cricket3 from "../img/cricket3.jpg";
import cricket4 from "../img/cricket4.jpg";

function GallerySection() {
  const images = [cricket1, cricket2, cricket3, cricket4];

  return (
    <section className="gallery-section">
      {images.map((image, index) => (
        <div className="gallery-item" key={index}>
          <img src={image} alt={`Boundary Club cricket ${index + 1}`} />
        </div>
      ))}
    </section>
  );
}

export default GallerySection;