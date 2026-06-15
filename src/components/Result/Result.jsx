import { resultsData } from "../../assets/Data/ResultData";
import "./Result.css";

const ResultCard = ({ beforeImage, afterImage, concern, duration }) => {
  return (
    <div className="cardd">
      <div className="card-images">
        <div className="image-box">
          <img src={beforeImage} alt="Before" />
          <p>Before</p>
        </div>
        <div className="image-box">
          <img src={afterImage} alt="After" />
          <p>After</p>
        </div>
      </div>

      <div className="card-content">
        <div className="row">
          <span className="label">Concern</span>
          <span className="value">{concern}</span>
        </div>
        <div className="row">
          <span className="label">Treatment Duration</span>
          <span className="value">{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default function Result() {
  return (
    <div className="containerR">
      <div className="wrapperr">
        <h2 className="headingr">Results You'll Love</h2>
        <div className="grid">
          {resultsData.map((item) => (
            <ResultCard
              key={item.id}
              beforeImage={item.beforeImage}
              afterImage={item.afterImage}
              concern={item.concern}
              duration={item.duration}
            />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="mobile-scroll">
          {resultsData.map((item) => (
            <ResultCard
              key={item.id}
              beforeImage={item.beforeImage}
              afterImage={item.afterImage}
              concern={item.concern}
              duration={item.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
