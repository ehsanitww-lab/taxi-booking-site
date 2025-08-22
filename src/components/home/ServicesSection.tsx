import "../media.css";
import React from "react";
import { Phone, Globe, Monitor, Rocket } from "lucide-react";
import myImage from "../assets/image/24-hours-support 1.png";
import carImage from "../assets/image/MercCar.png";
import car3Image from "../assets/image/car 3.png";
import driverImage from "../assets/image/driver (1) 1.png";
import responsibleImage from "../assets/image/responsible 1.png";

const Home = () => {
  return (
    <section className="home-section">
      {/* Background TAXINET text */}
      <h1 className="taxinet-bg">TAXINET</h1>

      {/* Icons with Links */}
      <><div className="container">
      <div className="icon-row">
        <a href="#communication" className="icon-link">
  <img src={myImage} alt="Communication Icon" className="icon" />
  <p>Communication</p>
</a>
        <div className="divider"></div>

        <a href="#communication" className="icon-link">
  <img src={car3Image} alt="Car Icon" className="icon" />
  <p>Car Service</p>
</a>
        <div className="divider"></div>

        <a href="#communication" className="icon-link">
  <img src={driverImage} alt="Driver Icon" className="icon" />
  <p>Professional Drivers</p>
</a>
        <div className="divider"></div>

        <a href="#communication" className="icon-link">
  <img src={responsibleImage} alt="Responsible Service Icon" className="icon" />
  <p>Responsible Service</p>
</a>
      </div>
      </div>
      </>

      {/* Car Image */}
      <div className="car-container">
        <img
          src={carImage}
          alt="Car"
          className="car-img"
        />
      </div>
    </section>
  );
};

export default Home;
