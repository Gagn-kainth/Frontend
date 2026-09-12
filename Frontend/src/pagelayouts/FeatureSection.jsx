import "./FeatureSection.css";

function FeatureSection({
  image,
  imageAlt = "",
  label,
  title,
  paragraphs = [],
  imagePosition = "right", // "left" | "right"
}) {
  const isImageLeft = imagePosition === "left";

  return (
    <section
      className={`feature-section ${
        isImageLeft ? "feature-section--img-left" : "feature-section--img-right"
      }`}
    >
      <div className="feature-image">
        <img src={image} alt={imageAlt} />
      </div>

      <div className="feature-content">
        {label && <span className="feature-label">{label}</span>}
        <h2>{title}</h2>
        {paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;