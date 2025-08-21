import React from "react";
import "../media.css";
import carImg from "../assets/image/car.png";


const Orangesection: React.FC = () => {
  return (
    <section className="orange-section-wrapper">
      <div className="orange-section">
        {/* Left side image */}
        <div className="orange-section-left">
          <div className="orange-image-wrapper">
            <img
              src="https://github.com/ehsanitww-lab/taxi-booking-site/blob/7d9c396365a24267a824a71e2c5ddc12a7ea77ec/src/assets/image/image%20(1).png"
              alt="Taxi driver standing near car"
              className="orange-section-image"
            />
          </div>
        </div>

        {/* Right side content */}
        <div className="orange-section-right">
          <h2 className="orange-section-heading">
            Reserveer 24/7 Uw Taxi In Den Haag En Omstreken
          </h2>
          <p className="orange-section-text">
            Individueel vervoer of groepsvervoer binnen en buiten Den Haag
            behoren beiden tot ons aanbod. Ook biedt Taxinet Haaglanden
            leerlingenvervoer, trouwvervoer, Schiphol taxi, groepsvervoer,
            zakelijk vervoer, rolstoeltaxi en hotel taxivservice aan. U kunt
            stiptheid en veilige betaalmogelijkheden van ons verwachten.
            Bovendien staan we 24 uur per dag en 7 dagen in de week voor u
            klaar. Bel ons op <strong>0858000365</strong> en u ziet onze taxi in
            Den Haag en omstreken snel verschijnen!
          </p>
          <p className="orange-section-text">
            Al jarenlang brengt Taxinet Haaglanden u 24/7 naar de gewenste
            bestemming.
          </p>

          {/* Feature grid */}
          <div className="orange-section-features">
            <div className="feature-item">
                <img src="https://cdn-icons-png.flaticon.com/256/9716/9716259.png" alt="24/7" className="feature-icon" />
              <p>24/7 Bereikbaar, Ook Voor Luchthavenvervoer</p>
            </div>
            <div className="feature-item">
            <img src="https://cdn-icons-png.flaticon.com/256/9716/9716259.png" alt="24/7" className="feature-icon" />

              <p>Taxi Often Within 10 Minutes</p>
            </div>
            <div className="feature-item">
                <img src="https://cdn-icons-png.flaticon.com/256/9716/9716259.png" alt="24/7" className="feature-icon" />

              <p>Klantvriendelijke Chauffeurs</p>
            </div>
            <div className="feature-item">
                <img src="https://cdn-icons-png.flaticon.com/256/9716/9716259.png" alt="24/7" className="feature-icon" />

              <p>Zeer Scherpe Tarieven</p>
            </div>
            <div className="feature-item">
                <img src="https://cdn-icons-png.flaticon.com/256/9716/9716259.png" alt="24/7" className="feature-icon" />

              <p>Betrouwbare En Klantgerichte Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orangesection;
