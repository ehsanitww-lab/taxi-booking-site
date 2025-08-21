import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CityPage from "./pages/CityPage";
import NotFound from "./pages/NotFound";
import LeerlingenvervoerPage from "./pages/LeerlingenvervoerPage";
import TrouwvervoerPage from "./pages/TrouwvervoerPage";
import GroepsvervoerPage from "./pages/GroepsvervoerPage";
import RolstoelTaxiPage from "./pages/RolstoelTaxiPage";
import OverOnsPage from "./pages/OverOnsPage";
import NieuwsPage from "./pages/NieuwsPage";
import ContactPage from "./pages/ContactPage";
import DirectReserverenPage from "./pages/DirectReserverenPage";
import BlankPage from "./components/BlankPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/city/:slug" element={<CityPage />} />
          
          {/* Service Pages */}
          <Route path="/leerlingenvervoer" element={<LeerlingenvervoerPage />} />
          <Route path="/trouwvervoer" element={<TrouwvervoerPage />} />
          <Route path="/groepsvervoer" element={<GroepsvervoerPage />} />
          <Route path="/rolstoel-taxi" element={<RolstoelTaxiPage />} />
          <Route path="/hotel-taxi-service" element={<BlankPage title="Hotel Taxi Service" />} />
          <Route path="/taxi-den-haag-schiphol" element={<BlankPage title="Taxi Den Haag - Schiphol" />} />
          
          {/* Taxi Service Cities */}
          <Route path="/taxi-service-den-haag" element={<BlankPage title="Taxi Service Den Haag" />} />
          <Route path="/taxi-service-rotterdam" element={<BlankPage title="Taxi Service Rotterdam" />} />
          <Route path="/taxi-service-barendrecht" element={<BlankPage title="Taxi Service Barendrecht" />} />
          <Route path="/taxi-service-schiedam" element={<BlankPage title="Taxi Service Schiedam" />} />
          <Route path="/taxi-service-hoogvliet" element={<BlankPage title="Taxi Service Hoogvliet" />} />
          <Route path="/taxi-service-spijkenisse" element={<BlankPage title="Taxi Service Spijkenisse" />} />
          <Route path="/taxi-service-brielle" element={<BlankPage title="Taxi Service Brielle" />} />
          <Route path="/taxi-service-geervliet" element={<BlankPage title="Taxi Service Geervliet" />} />
          
          {/* Tarieven Pages */}
          <Route path="/tarieven/standaard" element={<BlankPage title="Standaard Tarieven" />} />
          <Route path="/tarieven/airport" element={<BlankPage title="Airport Tarieven" />} />
          <Route path="/tarieven/nacht" element={<BlankPage title="Nacht Tarieven" />} />
          <Route path="/tarieven/groep" element={<BlankPage title="Groep Tarieven" />} />
          
          {/* Bestellen Pages */}
          <Route path="/bestellen/online" element={<BlankPage title="Online Bestellen" />} />
          <Route path="/bestellen/telefoon" element={<BlankPage title="Telefoon Bestellen" />} />
          <Route path="/bestellen/app" element={<BlankPage title="App Bestellen" />} />
          <Route path="/bestellen/vooruit" element={<BlankPage title="Vooruit Bestellen" />} />
          
          {/* Airport Pages */}
          <Route path="/airport/schiphol" element={<BlankPage title="Schiphol Taxi" />} />
          <Route path="/airport/rotterdam" element={<BlankPage title="Rotterdam Airport" />} />
          <Route path="/airport/eindhoven" element={<BlankPage title="Eindhoven Airport" />} />
          <Route path="/airport/naar-airport" element={<BlankPage title="Taxi naar Airport" />} />
          
          {/* Bedrijven Pages */}
          <Route path="/bedrijven/zakelijk" element={<BlankPage title="Zakelijke Ritten" />} />
          <Route path="/bedrijven/contracten" element={<BlankPage title="Contracten" />} />
          <Route path="/bedrijven/facturen" element={<BlankPage title="Facturen" />} />
          <Route path="/bedrijven/account" element={<BlankPage title="Account Aanmaken" />} />
          
          {/* Info Pages */}
          <Route path="/over-ons" element={<OverOnsPage />} />
          <Route path="/nieuws" element={<NieuwsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/direct-reserveren" element={<DirectReserverenPage />} />
          <Route path="/taxi-den-haag-contact" element={<ContactPage />} />
          
          {/* Legal Pages */}
          <Route path="/voorwaarden" element={<BlankPage title="Voorwaarden" />} />
          <Route path="/privacy" element={<BlankPage title="Privacy" />} />
          <Route path="/sitemap" element={<BlankPage title="Sitemap" />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
