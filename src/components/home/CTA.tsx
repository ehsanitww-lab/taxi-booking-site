import React from "react";
import "../media.css";

const BookTaxiSection: React.FC = () => {
  return (
    <section className="book-taxi-wrapper">
      <div className="book-taxi-container">
        <h2 className="book-taxi-title">Klaar Om Nu Uw Taxi Te Boeken?</h2>
        <div className="book-taxi-buttons">
          <a href="tel:0858000365" className="call-btn">
            <img 
              src="src\assets\image\callicon.png" 
              alt="Phone" 
              className="phone-img"
            />
            0858000365
          </a>
          <a href="#reserveren" className="reserve-btn">
            DIRECT RESERVEREN
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookTaxiSection;
