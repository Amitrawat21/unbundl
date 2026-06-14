import "./Cta.css";

export default function CTASection() {
  return (
    <div className="cta-container">
      <div className="cta-grid">
        {/* Left Content */}
        <div className="cta-content">
          <h2>
            Book a Free 3D Teeth Scan and Orthodontist Consult in a Clove Dental
            Clinic near you
          </h2>
        </div>

        {/* Right Logo */}
        <div className="cta-logo-section">
          <div className="clinic-logo">
            <div className="clinic-logo-content">
              <div className="clinic-logo-text">
                clove<span>:)</span>
              </div>
              <div className="clinic-logo-subtext">DENTAL</div>
            </div>
          </div>
          <button className="cta-button">Find Clinic</button>
        </div>
      </div>
    </div>
  );
}
