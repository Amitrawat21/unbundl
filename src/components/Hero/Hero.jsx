import "./Hero.css";

export default function Index() {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <h1>Invisible Aligners for a dream smile</h1>
            <p>Book a Scan and avail a free</p>
            <p className="highlight">
              Orthodontist Consult <span className="price">worth ₹1500</span>
            </p>
          </div>

          {/* Right Image */}
          <div className="hero-image">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F50c19e0ba2214518aace3b85de8e9096%2Fe74a50af81c14268a87f47dfbfedbb07?format=webp&width=400"
              alt="Smiling woman with invisible aligners"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

//https://www.csspicker.dev/project/8f392a70-166a-4dba-874e-966cd155506e