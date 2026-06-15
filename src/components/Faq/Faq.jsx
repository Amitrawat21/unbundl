
import { useState } from "react";
import "./Faq.css";
import { faqs } from "../../assets/Data/ResultData";



export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (index) => {
    if (openIndexes.includes(index)) {
      
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
   
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">
        <span>Got Questions?</span> We’ve got answers
      </h2>

      <div className="faq-container">
        {faqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <div className="faq-question" onClick={() => toggle(i)}>
              {faq.question}
              <span className="faq-icon">
                {openIndexes.includes(i) ? "-" : "+"}
              </span>
            </div>

            {openIndexes.includes(i) && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}