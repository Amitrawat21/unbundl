import "./Benefit.css";
import choose3 from "../../assets/choose3.png";
import choose4 from "../../assets/choose4.png";
import Frame3 from "../../assets/Frame53.png";
import Frame5 from "../../assets/Frame54.png";
import features from "../../assets/Data/ResultData";
const FeatureCard = ({ feature, index }) => {
  return (
    <article className="feature-card">
      <div className="image-container">
        <div
          className={`decorative-circle ${feature.bgColor} ${feature.decorativePosition}`}
        ></div>
        <img
          src={feature.image}
          alt={feature.title}
          loading={index === 0 ? "eager" : "lazy"}
        />
      </div>
      <div className="feature-content">
        <h2>{feature.title}</h2>
        <p>{feature.description}</p>
      </div>
    </article>
  );
};

const Features = () => {

  return (
    <main className="features-main">
      <section className="features-section">
        <h1 className="features-heading">Why Whistle?</h1>

        <div className="features-container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </div>
        </div>

        <div className="features-mobile-scroll">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Features;
