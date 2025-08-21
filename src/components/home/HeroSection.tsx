import "../media.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Calendar, Clock, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 hero-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="hero-title mb-6">
              Welkom bij TaxiNet
              <br />
              <span className="highlight">Nederland</span>
            </h1>
            <p className="hero-subtitle mb-8">
              Als u op zoek bent naar een goedkope en betrouwbare taxi in Den Haag en omstreken, dan bent u bij Taxinet Haaglanden aan het juiste adres. Wij bieden zowel particulier als zakelijk taxivervoer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-lg px-8">
                BOEK DIRECT
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Meer Info
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Acties Bekijken
              </Button>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="icon-box">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">24/7</p>
                  <p className="text-sm text-muted-foreground">Service</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="icon-box">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Heel Nederland</p>
                  <p className="text-sm text-muted-foreground">Dekking</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Booking Form */}
          <div>
            <Card className="shadow-2xl border-0 bg-background/95 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="form-title mb-6">Boek Uw Taxi</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label htmlFor="pickup" className="text-foreground">Ophaallocatie</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="pickup"
                          placeholder="Voer ophaallocatie in"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="destination" className="text-foreground">Bestemming</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="destination"
                          placeholder="Voer bestemming in"
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date" className="text-foreground">Datum</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="date"
                          type="date"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="time" className="text-foreground">Tijd</Label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="time"
                          type="time"
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="passengers" className="text-foreground">Aantal Passagiers</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="passengers"
                        type="number"
                        placeholder="1"
                        min="1"
                        max="8"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <Button size="lg" className="w-full text-lg py-6">
                    BOEK NU
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Inline Styling */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
        
        
      `}</style>
    </section>
  );
};

export default HeroSection;



