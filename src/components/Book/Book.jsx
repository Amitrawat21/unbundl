import "./Book.css";

export default function CtaBar() {
  return (
    <div className="cta-bar">
      <div className="cta-container">
        <h3 className="cta-heading">Ready for your perfect smile?</h3>

        <div className="cta-buttons">
          <button className="cta-btn">Book Scan at Home</button>
          <button className="cta-btn">Book Scan at Clinic</button>
        </div>
      </div>
    </div>
  );
}
