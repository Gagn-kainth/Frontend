import "../style/AboutCardsHor.css";

import image1 from "../img/comp.jpg";
import image2 from "../img/cricket_community.jpg";
import image3 from "../img/access.jpg";

function AboutCardsHor() {
  const cards = [
    {
      image: image1,
      title: "Competitive Spirit",
      description:
        "Every game at Boundary Club is more than fun, it’s about strategy, skill, and the thrill of winning.",
    },
    {
      image: image2,
      title: "Community & Lifestyle",
      description:
        "More than just cricket, Boundary Club is a place to connect, relax, train, and become part of a passionate sporting community.",
    },
    {
      image: image3,
      title: "Seamless Access",
      description:
        "Enjoy premium facilities, convenient access, and everything you need to make every visit to Boundary Club memorable.",
    },
  ];

  return (
    <section className="about-cards-hor">


      <div className="about-cards-hor__grid">
        {cards.map((card, index) => (
          <div className="about-cards-hor__card" key={index}>
            <img src={card.image} alt={card.title} />
            <div className="about-cards-hor__overlay"></div>
            <div className="about-cards-hor__content">
              <h3 className="about-cards-hor__title">{card.title}</h3>
              <p className="about-cards-hor__text">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutCardsHor;