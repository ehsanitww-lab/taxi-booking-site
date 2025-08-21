import "../media.css";
import React from "react";
import { Phone, Globe, Monitor, Rocket } from "lucide-react";

const Home = () => {
  return (
    <section className="home-section">
      {/* Background TAXINET text */}
      <h1 className="taxinet-bg">TAXINET</h1>

      {/* Icons with Links */}
      <><div className="container">
      <div className="icon-row">
        <a href="#communication" className="icon-link">
  <img src="src\assets\image\24-hours-support 1.png" alt="Communication Icon" className="icon" />
  <p>Communication</p>
</a>
        <div className="divider"></div>

        <a href="#communication" className="icon-link">
  <img src="src\assets\image\car 3.png" alt="Communication Icon" className="icon" />
  <p>Communication</p>
</a>
        <div className="divider"></div>

        <a href="#communication" className="icon-link">
  <img src="src\assets\image\driver (1) 1.png" alt="Communication Icon" className="icon" />
  <p>Communication</p>
</a>
        <div className="divider"></div>

        <a href="#communication" className="icon-link">
  <img src="src\assets\image\responsible 1.png" alt="Communication Icon" className="icon" />
  <p>Communication</p>
</a>
      </div>
      </div>
      </>

      {/* Car Image */}
      <div className="car-container">
        <img
          src="src\assets\image\MercCar.png"
          alt="Car"
          className="car-img"
        />
      </div>
    </section>
  );
};

export default Home;
