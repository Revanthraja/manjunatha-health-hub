import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Navigation,
  Calendar,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-center mb-6 font-poppins text-primary">
            <span className="inline-block animate-pulse-soft">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-inter">
            Ready to take care of your health? Contact us for appointments,
            queries, or home collection services.
            <span className="block mt-2 text-primary font-semibold">
              Your health is our priority! 🌟
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Location Card */}
            <Card className="p-6 shadow-soft border-primary/10 hover:shadow-md transition-all hover:-translate-y-1 group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary transition-all">
                  <MapPin className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-2 text-lg font-poppins">
                    📍 Our Location
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    <span className="font-semibold text-primary">
                      105/3/1, 1st Main Rd
                    </span>
                    <br />
                    Near Lakshmi Theatre, Tavarekere
                    <br />
                    Krishnappa Garden, 1st Stage
                    <br />
                    BTM Layout, Bengaluru, Karnataka 560029
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="mt-3">
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="font-poppins">
                          📍 Clinic Location
                        </DialogTitle>
                      </DialogHeader>
                      <p className="font-inter">Navigate to our clinic easily!</p>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="font-semibold">Address:</p>
                        <p>
                          105/3/1, 1st Main Rd, near LAKSHMI THEATRE, Tavarekere,
                          Krishnappa Garden, 1st Stage, BTM Layout, Bengaluru,
                          Karnataka 560029
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </Card>

            {/* Working Hours Card */}
            <Card className="p-6 shadow-soft border-primary/10 group hover:shadow-md transition-all hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary/10 rounded-full group-hover:bg-secondary transition-all">
                  <Clock className="h-6 w-6 text-secondary group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2 font-poppins text-lg">
                    ⏰ Working Hours
                  </h3>
                  <div className="space-y-2 text-muted-foreground font-inter">
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-3 rounded-lg">
                      <p className="font-semibold text-primary">
                        <strong>Monday - Saturday:</strong> 7:00 AM - 9:00 PM
                      </p>
                      <p className="font-semibold text-secondary">
                        <strong>Sunday:</strong> 7:00 AM - 1:00 PM
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse-soft"></span>
                      <p className="text-sm text-green-600 font-bold">
                        Currently Open • Closes 9 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Email Card */}
            <Card className="p-6 shadow-soft border-primary/10">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Email Us
                  </h3>
                  <p className="text-muted-foreground">
                    mdc.care.info@gmail.com
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Appointment Card */}
          <div className="space-y-6">
            <Card className="p-4 md:p-8 shadow-medical border-primary/20 hover:shadow-glow transition-all">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl md:text-3xl font-bold text-foreground font-poppins">
                  🩺 Schedule Your Appointment
                </CardTitle>
                <p className="text-foreground font-inter text-base md:text-lg">
                  Call us or visit our clinic for comprehensive diagnostic
                  services
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Call Button */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="medical"
                      size="lg"
                      className="w-full text-lg py-6 flex items-center justify-center gap-2 animate-pulse-soft"
                    >
                      <Phone className="h-5 w-5" />
                      📞 Call for Appointment
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="font-poppins">
                        📞 Contact Information
                      </DialogTitle>
                    </DialogHeader>
                    <div className="text-center p-6 bg-white rounded-lg border space-y-4">
                      <h3 className="text-2xl font-bold text-primary font-poppins">
                        Call Us Now!
                      </h3>
                      <a
                        href="tel:9900088282"
                        className="block p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                      >
                        <p className="text-lg font-bold text-primary">
                          📞 9900088282
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Primary Contact
                        </p>
                      </a>
                      <a
                        href="tel:9900088181"
                        className="block p-3 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors"
                      >
                        <p className="text-lg font-bold text-secondary">
                          📞 9900088181
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Alternate Contact
                        </p>
                      </a>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Home Collection Button */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="appointment"
                      size="lg"
                      className="w-full py-6 text-base md:text-lg flex flex-wrap items-center justify-center gap-2 text-center"
                    >
                      <Calendar className="h-5 w-5" />
                      🏠 Request Home Collection
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="font-poppins">
                        🏠 Home Collection Service
                      </DialogTitle>
                    </DialogHeader>
                    <div className="text-center p-6 bg-white rounded-lg border space-y-4">
                      <h3 className="text-xl font-bold text-secondary font-poppins">
                        Free Home Collection!
                      </h3>
                      <p className="font-inter text-foreground">
                        Convenient sample collection at your doorstep
                      </p>
                      <a
                        href="tel:9900088282"
                        className="block p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                      >
                        <p className="text-lg font-bold text-primary">
                          📞 9900088282
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Call for home collection
                        </p>
                      </a>
                      <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <div className="font-semibold text-primary">📅 Same Day</div>
                          <div className="text-muted-foreground">Quick scheduling</div>
                        </div>
                        <div className="bg-secondary/10 p-3 rounded-lg">
                          <div className="font-semibold text-secondary">🆓 Free Service</div>
                          <div className="text-muted-foreground">No extra charges</div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Why Choose Us */}
                <div className="border-t border-border pt-6">
                  <h4 className="font-bold text-foreground mb-4 text-center font-poppins text-lg">
                    ✨ Why Choose Us?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-all group">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                        👨‍⚕️
                      </div>
                      <div className="font-bold text-primary font-poppins">
                        Expert Staff
                      </div>
                      <div className="text-muted-foreground font-inter">
                        Qualified professionals
                      </div>
                    </div>
                    <div className="text-center p-4 bg-secondary/5 rounded-lg hover:bg-secondary/10 transition-all group">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                        ⚡
                      </div>
                      <div className="font-bold text-secondary font-poppins">
                        Fast Reports
                      </div>
                      <div className="text-muted-foreground font-inter">
                        Quick accurate results
                      </div>
                    </div>
                    <div className="text-center p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-all group">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                        💰
                      </div>
                      <div className="font-bold text-primary font-poppins">
                        Affordable
                      </div>
                      <div className="text-muted-foreground font-inter">
                        Low cost services
                      </div>
                    </div>
                    <div className="text-center p-4 bg-secondary/5 rounded-lg hover:bg-secondary/10 transition-all group">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                        🏠
                      </div>
                      <div className="font-bold text-secondary font-poppins">
                        Home Collection
                      </div>
                      <div className="text-muted-foreground font-inter">
                        Free pickup service
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
