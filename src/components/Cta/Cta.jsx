import "./Cta.css";

export default function CTASection() {
  return (
    <div className="cta-container">
      <div className="cta-grid">
        <div className="cta-content">
          <h2>
            Book a Free Orthodontist Consult in a Clove Dental Clinic. 450+ near
            you
          </h2>
        </div>

        <div className="cta-logo-section">
          <div className="clinic-logo">
            <div className="clinic-logo-content">
              <div className="clinic-logo-text">
                clove<span>:)</span>
              </div>
              <div className="clinic-logo-subtext">DENTAL</div>
            </div>
          </div>
          <button className="cta-button">
            Find Clinic
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
