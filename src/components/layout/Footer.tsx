import { MapPin, Phone, Mail } from "lucide-react";
import "../media.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-company">
          <a href="/" className="footer-logo-link">
            <img
              src="https://taxinet.nl/wp-content/uploads/taxinet.png"
              alt="TaxiNet"
              className="footer-logo-img"
            />
          </a>
        </div>

        {/* Services Column 1 */}
        <div className="footer-column">
          <ul>
            <li><a href="/leerlingenvervoer">Leerlingenvervoer</a></li>
            <li><a href="/trouwvervoer">Trouwvervoer</a></li>
            <li><a href="/taxi-den-haag-schiphol">Taxi Den Haag - Schiphol</a></li>
            <li><a href="/groepsvervoer">Groepsvervoer</a></li>
            <li><a href="/rolstoel-taxi">Rolstoel Taxi</a></li>
            <li><a href="/hotel-taxi-service">Hotel Taxi Service</a></li>
          </ul>
        </div>

        {/* Services Column 2 */}
        <div className="footer-column">
          <ul>
            <li><a href="/taxi-service-den-haag">Taxi service Den Haag</a></li>
            <li><a href="/taxi-service-rotterdam">Taxi service Rotterdam</a></li>
            <li><a href="/taxi-service-barendrecht">Taxi service Barendrecht</a></li>
            <li><a href="/taxi-service-schiedam">Taxi service Schiedam</a></li>
            <li><a href="/taxi-service-hoogvliet">Taxi service Hoogvliet</a></li>
            <li><a href="/taxi-service-spijkenisse">Taxi service Spijkenisse</a></li>
            <li><a href="/taxi-service-brielle">Taxi service Brielle</a></li>
            <li><a href="/taxi-service-geervliet">Taxi service Geervliet</a></li>
          </ul>
        </div>

        {/* Services Column 3 */}
        <div className="footer-column">
          <ul>
            <li><a href="/over-ons">Overons</a></li>
            <li><a href="/nieuws">Nieuws</a></li>
            <li><a href="/direct-reserveren">Direct Reserveren</a></li>
            <li><a href="/taxi-den-haag-contact">Taxi Den Haag-Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Contact Info */}
      <div className="footer-bottom">
        <div className="footer-contact-info">
          <div className="footer-contact-item">
            <MapPin className="footer-icon" />
            <span>Rederijkerstraat 159, 2531VK Den Haag, Nederland</span>
          </div>
          <div className="footer-contact-item">
            <Phone className="footer-icon" />
            <span>085800365</span>
          </div>
          <div className="footer-contact-item">
            <Mail className="footer-icon" />
            <span>info@taxinet.nl</span>
          </div>
        </div>

        <div className="footer-company-number">
          Kvknummer - 94898499
        </div>

        <div className="footer-legal">
          <a href="/voorwaarden">Voorwaarden</a>
          <span>|</span>
          <a href="/privacy">Privacy</a>
          <span>|</span>
          <a href="/sitemap">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
