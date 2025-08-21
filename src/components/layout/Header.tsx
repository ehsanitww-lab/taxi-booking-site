import "../media.css";
import { useState } from "react";
import { Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "TaxiDiensten", items: [{ name: "Item 1", href: "#" }, { name: "Item 2", href: "#" }, { name: "Item 3", href: "#" }, { name: "Item 4", href: "#" }] },
    { title: "Taxi Service", items: [{ name: "Item 1", href: "#" }, { name: "Item 2", href: "#" }, { name: "Item 3", href: "#" }, { name: "Item 4", href: "#" }] },
    { title: "Taxi Tarieven", items: [{ name: "Item 1", href: "#" }, { name: "Item 2", href: "#" }, { name: "Item 3", href: "#" }, { name: "Item 4", href: "#" }] },
    { title: "Taxi Bestellen", items: [{ name: "Item 1", href: "#" }, { name: "Item 2", href: "#" }, { name: "Item 3", href: "#" }, { name: "Item 4", href: "#" }] },
    { title: "Airport Taxi", items: [{ name: "Item 1", href: "#" }, { name: "Item 2", href: "#" }, { name: "Item 3", href: "#" }, { name: "Item 4", href: "#" }] },
    { title: "Taxi Bedrijven", items: [{ name: "Item 1", href: "#" }, { name: "Item 2", href: "#" }, { name: "Item 3", href: "#" }, { name: "Item 4", href: "#" }] },
    { title: "Over Taxinet", items: [{ name: "Item 1", href: "#" }, { name: "Item 2", href: "#" }, { name: "Item 3", href: "#" }, { name: "Item 4", href: "#" }] },
  ];

  return (
    <header className="header">
      <div className="header-inner">

        {/* Logo Container */}
        <div className="header-logo">
          <a href="/" className="logo">
            <img src="https://taxinet.nl/wp-content/uploads/taxinet.png" alt="TaxiNet Logo" />
          </a>
        </div>

        {/* Menu Container */}
        <div className="header-menu">
          <nav className="nav">
            {menuItems.map((menu, idx) => (
              <div key={idx} className="nav-item">
                <button className="nav-button">{menu.title}</button>
                <div className="dropdown">
                  <ul className="dropdown-list">
                    {menu.items.map((item, subIdx) => (
                      <li key={subIdx}>
                        <a href={item.href} className="dropdown-link">{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* CTA Button Container */}
        <div className="header-cta">
          <button className="contact-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon" width="14" height="14">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.74 3.86.74a1 1 0 011 1v3.5a1 1 0 01-1 1C9.85 21.5 2.5 14.15 2.5 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.36.26 2.66.74 3.86a1 1 0 01-.21 1.11l-2.2 2.2z" />
            </svg>
            Taxi Den Haag Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="icon" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        {menuItems.map((menu, idx) => (
          <div key={idx} className="mobile-menu-item">
            <div className="mobile-title">{menu.title}</div>
            <div className="mobile-submenu">
              {menu.items.map((item, subIdx) => (
                <a key={subIdx} href={item.href} className="mobile-link">{item.name}</a>
              ))}
            </div>
          </div>
        ))}

        <button className="mobile-contact-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon" width="14" height="14">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.74 3.86.74a1 1 0 011 1v3.5a1 1 0 01-1 1C9.85 21.5 2.5 14.15 2.5 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.36.26 2.66.74 3.86a1 1 0 01-.21 1.11l-2.2 2.2z" />
          </svg>
          Taxi Den Haag Contact
        </button>
      </div>
    </header>
  );
};

export default Header;
