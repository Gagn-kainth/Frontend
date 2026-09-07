import "./ComingSoonLayout.css";

function ComingSoonLayout({
  title,
  subtitle = "Coming Soon..",
  backgroundImage,
}) {
  return (
    <section
      className="coming-soon-layout"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="coming-soon-overlay"></div>

      <div className="coming-soon-content">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}

export default ComingSoonLayout;