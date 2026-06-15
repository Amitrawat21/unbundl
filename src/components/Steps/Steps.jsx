import { useState } from "react";
import "./Steps.css";
import playvideo from "../../assets/playvideo.png";
import STEPS from "../../assets/Data/ResultData";

export default function FourSteps() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="steps-outer">
      <div className="steps-card">
        <h2 className="steps-title steps-title-mobile">
          Get your perfect smile in four simple steps
        </h2>

        <div className="steps-left">
          <h2 className="steps-title steps-title-desktop">
            Get your perfect smile in four simple steps
          </h2>

          <div className="steps-grid">
            {STEPS.map((step) => (
              <div key={step.num} className="steps-item">
                <div className="steps-num">
                  <div className="steps-num-inner">{step.num}</div>
                </div>
                <div>
                  <p className="steps-item-title">{step.title}</p>
                  <p className="steps-item-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="steps-video">
          {!isPlaying ? (
            <>
              <img src={playvideo} alt="thumbnail" />
              <button className="steps-play" onClick={() => setIsPlaying(true)}>
                <svg className="steps-play-icon" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </>
          ) : (
            <iframe
              className="video-element"
              src="https://www.youtube.com/embed/PFESibutTjk?autoplay=1"
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}
