import "./Footer.css";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiPhoneCall, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
   
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

  
        <div>
          <h3>Get in Touch Now!</h3>
          <p className="contact-item">
            <FiPhoneCall className="icon" /> 011-6932-8350
          </p>
          <p className="contact-item">
            <FiMail className="icon" /> support@whistle.in
          </p>
        </div>

        <div>
          <h3>Follow us on</h3>
          <div className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
          </div>
        </div>

        <div>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
