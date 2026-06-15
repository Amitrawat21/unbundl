import "./Discount.css";
import teeth from "../../assets/teeth.png";

export default function Discount() {
  return (
    <div className="container">
      <div className="left-content">
        <h1 className="headingg">Dream smiles achieved secretly</h1>
        <p className="description first-desc">
          Experience the superior quality of our Whistle Aligners crafted with
          3-layer PU material. With 450+ clinics nationwide, enjoy comfortable
          treatment by expert orthodontists at House of Clove
        </p>
        <p className="description second-desc">
          The pricing is different for every case. Cases with higher complexity
          requiring more aligners and additional time and effort from our
          dentists.
        </p>
      </div>

      <div className="right-card">
        <div className="card-header">
          <div className="card-info">
            <h2 className="card-title">Whistle Aligners</h2>
            <div className="price-section">
              <span className="original-price">₹84,000</span>
              <div className="current-price">
                <span className="starting-text">starting at</span>
                <span className="price">₹47,999</span>
              </div>
              <span className="tax-text">inc. of all taxes</span>
            </div>
          </div>
          <img src={teeth} alt="Whistle Aligners" className="product-image" />
        </div>

        <div className="card-footer">
          <div className="features">
            <div className="feature-item">
              <svg
                className="check-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#22c55e"
                  fill="#22c55e"
                  fillOpacity="0.1"
                />
                <path
                  d="M8 12l3 3 5-6"
                  stroke="#22c55e"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="feature-text">
                Offer valid for a limited time
              </span>
            </div>
            <div className="feature-item">
              <svg
                className="check-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#22c55e"
                  fill="#22c55e"
                  fillOpacity="0.1"
                />
                <path
                  d="M8 12l3 3 5-6"
                  stroke="#22c55e"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="feature-text">Easy financing options</span>
            </div>
          </div>

          <a className="learn-more">
            <span className="learn-more-text">Learn more</span>
            <svg
              className="arrow-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
