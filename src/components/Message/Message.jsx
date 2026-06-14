import "./Message.css";
import Rectangle from "../../assets/Rectangle.png"
export default function DoctorLed({  onCallbackClick }) {
  return (
    <section className="doctor-section">
      {/* Left: content */}
      <div className="doctor-content">
        <h2 className="doctor-headline">
          We are Doctor-led, not
          <br />
          direct-to-customers
        </h2>

        <p className="doctor-body">
          We don't offer direct-to-customer invisible aligners. We treat you in
          a Dental clinic with an Orthodontist. Aligners are just the beginning;
          we ensure comprehensive treatment in over 450+ clinics nationwide.
        </p>

        <button className="doctor-btn" onClick={onCallbackClick}>
          Get a Callback
        </button>
      </div>

      {/* Right: image */}
      <div className="doctor-image">
        <img src={Rectangle} alt="Orthodontist at a dental clinic" />
      </div>
    </section>
  );
}
