import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Clock, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import six from "@/assets/six.png";
import four from "@/assets/four.png";
import three from "@/assets/three.png";
import two from "@/assets/two.png";
import one from "@/assets/one.png";

const Hero = () => {
  const bannerImages = [one, two, three, four, six];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  return (
    <section
      id="home"
      className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Healthcare facility scene ${index + 1}`}
              className="w-full h-full object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left text-white"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Quality Healthcare
              <span className="text-primary block">You Can Trust</span>
            </h1>

            <p className="text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed text-white/90">
              Comprehensive diagnostic services with expert staff, accurate reports,
              and compassionate care at affordable prices.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 mb-8">
              {/* Animated Call Button */}
              <a href="tel:9900088282" aria-label="Call Now" className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  animate={{ scale: [1, 1.05, 1], opacity: [1, 0.95, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                >
                  <Button
                    variant="medical"
                    size="lg"
                    className="w-full sm:w-auto text-lg px-10 py-6 flex items-center justify-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Book Appointment
                  </Button>
                </motion.div>
              </a>

              <a href="#services" aria-label="View Services" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-primary font-semibold"
                >
                  View Services
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 text-sm text-white text-center">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>4.8 Rating</span>
              </div>
              <span>•</span>
              <span>1000+ Happy Patients</span>
              <span>•</span>
              <span>Expert Staff</span>
            </div>
          </motion.div>

          {/* Right: Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 pt-6">
            <Card className="p-6 bg-white/90 shadow-medical border-primary/20">
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

            <Card className="p-6 bg-white/90 shadow-medical border-primary/20">
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

            <Card className="p-6 bg-white/90 shadow-medical border-primary/20">
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
