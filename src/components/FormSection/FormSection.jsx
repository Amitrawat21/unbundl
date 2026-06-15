import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import "./FormSection.css";

export default function FormSection() {
  const [selectedGap, setSelectedGap] = useState(null);
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [consent, setConsent] = useState(false);

  const handleBookScan = () => {
    toast.success("Scan Booked Successfully ✅");

    console.log({
      selectedGap,
      fullName,
      mobileNumber,
      consent,
    });

   
    setSelectedGap(null);
    setFullName("");
    setMobileNumber("");
    setConsent(false);
  };

  const isFormValid =  fullName && mobileNumber && consent;

  return (
    <section className="form-section">
      <Toaster position="top-center" />

      <div className="form-container">
       
        <div className="form-question">
          <h2>Do you have Teeth Gaps or Crooked Teeth?</h2>

          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="teeth"
                value="yes"
                checked={selectedGap === "yes"}
                onChange={(e) => setSelectedGap(e.target.value)}
              />
              <span>Yes</span>
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="teeth"
                value="no"
                checked={selectedGap === "no"}
                onChange={(e) => setSelectedGap(e.target.value)}
              />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Row */}
        <div className="form-row">
          <input
            type="text"
            placeholder="Ajay Kumar*"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="form-input"
          />

          <input
            type="tel"
            placeholder="+91 Mobile number*"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="form-input"
          />

          <button
            onClick={handleBookScan}
            disabled={!isFormValid}
            className="submit-button"
          >
            Book a Free Scan
          </button>
        </div>

       
        <label className="consent-group">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span className="consent-text">
            I hereby consent to receive calls/messages from Whizoe and its
            partner override DND setting.
          </span>
        </label>
      </div>
    </section>
  );
}
