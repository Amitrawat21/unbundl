import "./WhisteDifference.css";
import Frame from "../../assets/Frame.svg";
import Price from "../../assets/Price.svg";
import Predictable from "../../assets/Predictable.svg";
import TeethMachine from "../../assets/TeethMachine.png";
import { feature } from "../../assets/Data/ResultData";



export default function WhistleDifference() {
  return (
    <section className="whistle-section">
      <div className="whistle-card">
        <div className="whistle-content">
          <h2 className="whistle-title">The Whistle Difference</h2>

          <div className="whistle-features">
            {feature.map((f) => (
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

        <div className="whistle-image">
          <img src={TeethMachine} alt="aligner" />
        </div>
      </div>
    </section>
  );
}
