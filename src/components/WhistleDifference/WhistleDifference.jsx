import "./WhisteDifference.css";
import Frame from "../../assets/Frame.svg";
import Price from "../../assets/Price.svg";
import Predictable from "../../assets/Predictable.svg";
import TeethMachine from "../../assets/TeethMachine.png";


const features = [
  {
    icon: Frame,
    title: "Next-Gen",
    desc: "Crafted with top-notch 3D printing, laser tech, and Zendura FLX material.",
  },
  {
    icon: Predictable,

    title: "Hassle-Free",
    desc: "Predictable, comfortable & lifestyle-friendly for an easy smile transformation.",
  },
  {
    icon: Price,
    title: "Transparent Pricing",
    desc: "Predictable, comfortable & lifestyle-friendly for an easy smile transformation.",
  },
];

export default function WhistleDifference() {
  return (
    <section className="whistle-section">
      <div className="whistle-card">
        {/* Left */}
        <div className="whistle-content">
          <h2 className="whistle-title">The Whistle Difference</h2>

          <div className="whistle-features">
            {features.map((f) => (
              <div className="feature-item" key={f.title}>
                <div className="feature-icon">
                  <img src={f.icon} alt={f.title} />
                </div>

                <div className="feature-text">
                  <p className="feature-title">{f.title}</p>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="whistle-image">
          <img src={TeethMachine} alt="aligner" />
        </div>
      </div>
    </section>
  );
}
