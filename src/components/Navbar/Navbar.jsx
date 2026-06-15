import "./Navbar.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showNumber, setShowNumber] = useState(false);
  const [ringing, setRinging] = useState(false);

  useEffect(() => {
    function cycle() {
      setShowNumber(true);
      setRinging(false);

      setTimeout(() => {
        setShowNumber(false);
        setTimeout(() => setRinging(true), 350);
      }, 2000);
    }

    cycle();
    const interval = setInterval(cycle, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>
          whistle<sup className="trademark">™</sup>
        </h2>
        <span>AND SMILE</span>
      </div>

      <a href="tel:+919999999999" className="nav-phone-btn">
        <span className={`phone-number ${showNumber ? "visible" : ""}`}>
          +91 99999 99999
        </span>
        <div className="icon-wrap">
          <svg
            className={`phone-svg ${ringing ? "ringing" : ""}`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
            />
          </svg>

          <div className={`wave-wrap ${ringing ? "active" : ""}`}>
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path className="arc1" d="M22,20 Q26,16 22,12" />
              <path className="arc2" d="M25,20 Q31,14 25,8" />
              <path className="arc3" d="M28,20 Q36,12 28,4" />
            </svg>
          </div>
        </div>
      </a>
    </nav>
  );
}
