import React from "react";
import "../media.css";

const LogosSection: React.FC = () => {
  return (
    <section className="logos-section">
      <div className="logos-container">
        <img src="https://taxinet.nl/wp-content/uploads/logo.png" alt="Logo 1" />
        <img src="https://taxinet.nl/wp-content/uploads/logo.png" alt="Logo 2" />
        <img src="https://taxinet.nl/wp-content/uploads/logo.png" alt="Logo 3" />
        <img src="https://taxinet.nl/wp-content/uploads/logo.png" alt="Logo 4" />
        <img src="https://taxinet.nl/wp-content/uploads/logo.png" alt="Logo 5" />
      </div>
    </section>
  );
};

export default LogosSection;
