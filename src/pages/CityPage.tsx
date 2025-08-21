import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useParams } from "react-router-dom";

const CityPage = () => {
  const { slug } = useParams();
  
  // This will later be connected to your Supabase cities table
  const cityData = {
    amsterdam: { name: "Amsterdam", title: "Taxi Service Amsterdam" },
    rotterdam: { name: "Rotterdam", title: "Taxi Service Rotterdam" },
    "the-hague": { name: "Den Haag", title: "Taxi Service Den Haag" },
    utrecht: { name: "Utrecht", title: "Taxi Service Utrecht" },
    eindhoven: { name: "Eindhoven", title: "Taxi Service Eindhoven" }
  };

  const city = cityData[slug as keyof typeof cityData];

  if (!city) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center">City not found</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            {city.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Betrouwbare taxiservice in {city.name}. Content wordt binnenkort toegevoegd.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CityPage;