import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Links */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Book a Free Scan</li>
            <li>How it Works</li>
            <li>Range of Aligners</li>
            <li>Aligners vs Braces</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3>Get in Touch Now!</h3>
          <p>📞 011-6932-8350</p>
          <p>✉️ support@whistle.in</p>
        </div>

        {/* Social */}
        <div>
          <h3>Follow us on</h3>
          <div className="social-icons">
            <span>📷</span>
            <span>f</span>
            <span>X</span>
          </div>
        </div>

        {/* Policy */}
        <div>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
