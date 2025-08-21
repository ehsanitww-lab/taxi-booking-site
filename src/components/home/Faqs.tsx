import React, { useState } from "react";
import "../media.css";

const faqs = [
  {
    question: "What is Increasy?",
    answer: "Increasy is a powerful platform designed to help businesses grow online through smart tools and strategies.",
  },
  {
    question: "How does the free trial work?",
    answer: "You can sign up for a 14-day free trial without credit card details. Explore all features and cancel anytime.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Yes, you can upgrade or downgrade your subscription at any time directly from your dashboard.",
  },
  {
    question: "Is customer support available?",
    answer: "Absolutely! Our support team is available 24/7 via chat and email to assist you with any questions.",
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <span className="faq-subtitle">Vragen? Wij hebben antwoorden</span>
        <h2 className="faq-title">
          Veelgestelde <span>Vragen</span>
        </h2>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${openIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>
                +
              </span>
            </button>
            <div
              className={`faq-answer ${openIndex === index ? "show" : ""}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
