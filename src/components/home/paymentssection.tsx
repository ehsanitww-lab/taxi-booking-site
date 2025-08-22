import React from "react";
import "../media.css";
import cardsImage from "../assets/image/cards.png";
import blackHalfCarImage from "../assets/image/blackhalfcar.png";
import boxImage1 from "../assets/image/Boximage (1).png";
import boxImage2 from "../assets/image/Boximage (2).png";
import boxImage3 from "../assets/image/Boximage (3).png";

const ExtraDetails = () => {
  return (
    <section className="extra-details">
      {/* Payment Methods */}
      <div className="payment-section">
        <div className="payment-text">
          <h2>Wij Accepteren Alle Soorten Online Betalingen</h2>
        </div>
        <div className="payment-image">
          <img
            src={cardsImage}
            alt="Online Betalingen"
          />
        </div>
      </div>

      {/* Taxi Info Section */}
      <div className="taxi-info">
        <div className="taxi-banner">
          <img
            src={blackHalfCarImage}
            alt="Taxi Banner"
            className="taxi-car"
          />
          <div className="taxi-banner-text">
            <h3>
              TAXINET HAAGLANDEN IS DE TAXI SERVICE IN DE REGIO DEN HAAG
            </h3>
            <div className="banner-buttons">
              <button className="btn-orange">Alle Taxidiensten</button>
              <button className="btn-black">€ Onze Tarieven</button>
            </div>
          </div>
        </div>

        <div className="taxi-description">
          <p>
            Heeft u een taxi nodig in de regio Den Haag? Dan bent u bij Taxinet Haaglanden aan het juiste adres! 
            Wij bieden u uitstekende service aan voor concurrerende prijzen. Profiteer van onze taxidiensten in de Haagse regio. 
            Ook voor taxivervoer buiten de regio, zoals Wassenaar, Rijswijk, Scheveningen en Nootdorp staan wij 7 dagen per week, 
            24 uur per dag voor u klaar! En wilt u naar Schiphol of een ander vliegveld? Wij brengen u comfortabel met de taxi naar 
            elke gewenste luchthaven.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="services">
        <div className="service-card">
          <img 
            src={boxImage1} 
            alt="Taxi Den Haag" 
          />
          <h4>Taxi Den Haag</h4>
          <p>
            Snel een taxi in Den Haag nodig? Wij zijn altijd telefonisch, per e-mail of online bereikbaar. 
            Dag en nacht! Wij staan voor u klaar!
          </p>
        </div>

        <div className="service-card">
          <img 
            src={boxImage3} 
            alt="Vliegveld Taxi" 
          />
          <h4>Vliegveld Taxi</h4>
          <p>
            Taxinet is ook uw aanspreekpunt voor luchthavenvervoer met zéér scherpe prijzen. 
            Wij brengen u naar elk gewenst vliegveld.
          </p>
        </div>

        <div className="service-card">
          <img 
            src={boxImage2} 
            alt="Leerlingen Vervoer" 
          />
          <h4>Leerlingen Vervoer</h4>
          <p>
            Kies voor veilig en betrouwbaar leerlingenvervoer van Taxinet Haaglanden. 
            Altijd stipt op tijd vervoer van en naar school.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExtraDetails;
