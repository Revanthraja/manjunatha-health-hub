import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Clock, Star } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] bg-gradient-hero flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Quality Healthcare
              <span className="text-primary block">You Can Trust</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Comprehensive diagnostic services with expert staff, accurate reports,
              and compassionate care at affordable prices.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 mb-8">
              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  variant="medical"
                  size="lg"
                  className="w-full sm:w-auto text-lg px-8 py-5 flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Book Appointment
                </Button>
              </a>
              <a href="#services" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-lg px-8 py-5"
                >
                  View Services
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 text-sm text-muted-foreground text-center">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>4.8 Rating</span>
              </div>
              <span>•</span>
              <span>1000+ Happy Patients</span>
              <span>•</span>
              <span>Expert Staff</span>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 pt-6">
            {/* Location Card */}
            <Card className="p-6 bg-gradient-card shadow-medical border-primary/20">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground text-sm">
                    105/3/1, 1st Main Rd, near Lakshmi Theatre
                    <br />
                    Tavarekere, BTM Layout, Bengaluru - 560029
                  </p>
                </div>
              </div>
            </Card>

            {/* Hours Card */}
            <Card className="p-6 bg-gradient-card shadow-medical border-primary/20">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Mon - Sat: 7:00 AM - 9:00 PM
                    <br />
                    Sunday: 7:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </Card>

            {/* Contact Card */}
            <Card className="p-6 bg-gradient-card shadow-medical border-primary/20">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Contact</h3>
                  <p className="text-muted-foreground text-sm">
                    Free Home Collection Available
                    <br />
                    Call for appointments & queries
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
