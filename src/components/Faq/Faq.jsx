import { useState } from "react";
import "./Faq.css";

const faqs = [
  "What are Aligners?",
  "How do Aligners work?",
  "Can any dentist do irregular teeth treatment?",
  "Are there any restriction on eating or drinking?",
  "How long does the treatment take?",
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">
        <span>Got Questions?</span> We’ve got answers
      </h2>

      <div className="faq-container">
        {faqs.map((q, i) => (
          <div key={i} className="faq-item" onClick={() => toggle(i)}>
            <div className="faq-question">
              {q}
              <span className="faq-icon">{openIndex === i ? "-" : "+"}</span>
            </div>

            {openIndex === i && (
              <p className="faq-answer">
                This is a sample answer. Replace with real content.
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
