import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header className="p-4 bg-yellow-400 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">TaxiBooking</Link>
        <nav className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/over-ons">Over Ons</Link>
          <Link to="/nieuws">Nieuws</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/direct-reserveren">Reserveren</Link>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="p-4 bg-gray-800 text-white text-center">
        © {new Date().getFullYear()} TaxiBooking. Alle rechten voorbehouden.
      </footer>
    </div>
  );
};

export default Layout;
