
import "./Benefit.css";
import choose3 from "../../assets/choose3.png";
import choose4 from "../../assets/choose4.png";
import Frame3 from "../../assets/Frame53.png"
 import Frame5 from "../../assets/Frame54.png" ;


const FeatureCard = ( { feature, index } ) =>
{
  return (
    <article className="feature-card">
      {/* Image */}
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

      {/* Content */}
      <div className="feature-content">
        <h2>{feature.title}</h2>
        <p>{feature.description}</p>
      </div>
    </article>
  );
};


const Features = () => {
  const features = [
    {
      id: 1,
      title: "Custom-made & invisible",
      description:
        "Tailored for your teeth and smile with a clear, discreet appearance.",
      image: Frame3,
      bgColor: "bg-primary",
      decorativePosition: "left-100",
    },
    {
      id: 2,
      title: "Predictable results",
      description:
        "Advanced 3D modeling and AI-technology for precise planning.",
      image: Frame5,
      bgColor: "bg-primary",
      decorativePosition: "right-56",
    },
    {
      id: 3,
      title: "Expert Orthodontists",
      description: "Highly experienced dental professionals.",
      image: choose3,
      bgColor: "bg-primary",
      decorativePosition: "left-71",
    },
    {
      id: 4,
      title: "Unlimited Aligners",
      description: "No extra cost for aligners and consultations.",
      image: choose4,
      bgColor: "bg-neutral",
      decorativePosition: "left-40",
    },
  ];

  return (
    <>

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
        </section>
      </main>
    </>
  );
};

export default Features;
