import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Phone, MapPin, Clock, Mail, Navigation, Calendar, Users, Award, Shield } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl overflow-hidden">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-poppins bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-slide-up">
                Get&nbsp;In <span className="animate-pulse-soft">Touch</span>
                                          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-inter animate-slide-up delay-200">
            Ready to take care of your health? Contact us for appointments, queries, or home collection services.
            <span className="block mt-2 text-primary font-semibold">Your health is our priority! 🌟</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6 animate-slide-up delay-300">
            <Card className="p-6 bg-gradient-card shadow-soft border-primary/10 hover:shadow-medical transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary transition-all duration-300 animate-bounce-in">
                  <MapPin className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-2 font-poppins text-lg">📍 Our Location</h3>
                  <p className="text-muted-foreground mb-4 font-inter leading-relaxed">
                    <span className="font-semibold text-primary">105/3/1, 1st Main Rd</span><br />
                    Near Lakshmi Theatre, Tavarekere<br />
                    Krishnappa Garden, 1st Stage<br />
                    BTM Layout, Bengaluru, Karnataka 560029
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="hover:scale-105 transition-transform duration-200">
                        <Navigation className="h-4 w-4" />
                        Get Directions
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="animate-fade-in">
                      <DialogHeader>
                        <DialogTitle className="font-poppins">📍 Clinic Location</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <p className="font-inter">Navigate to our clinic easily!</p>
                        <div className="bg-muted p-4 rounded-lg">
                          <p className="font-semibold">Address:</p>
                          <p>105/3/1, 1st Main Rd, near LAKSHMI THEATRE, Tavarekere, Krishnappa Garden, 1st Stage, BTM Layout, Bengaluru, Karnataka 560029</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-soft border-primary/10 hover:shadow-medical transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary/10 rounded-full group-hover:bg-secondary transition-all duration-300 animate-bounce-in delay-100">
                  <Clock className="h-6 w-6 text-secondary group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2 font-poppins text-lg">⏰ Working Hours</h3>
                  <div className="space-y-2 text-muted-foreground font-inter">
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-3 rounded-lg">
                      <p className="font-semibold text-primary"><strong>Monday - Saturday:</strong> 7:00 AM - 9:00 PM</p>
                      <p className="font-semibold text-secondary"><strong>Sunday:</strong> 7:00 AM - 1:00 PM</p>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse-soft"></span>
                      <p className="text-sm text-green-600 font-bold">Currently Open • Closes 9 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-soft border-primary/10">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                  <p className="text-muted-foreground">
                    mdc.care.info@gmail.com
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6 animate-slide-up delay-500">
            <Card className="p-4 md:p-8 bg-white shadow-medical border-primary/20 hover:shadow-glow transition-all duration-500 animate-bounce-in delay-700">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl md:text-3xl font-bold text-foreground font-poppins">
                  🩺 Schedule Your Appointment
                </CardTitle>
                <p className="text-foreground font-inter text-base md:text-lg">
                  Call us or visit our clinic for comprehensive diagnostic services
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="text-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="medical" size="lg" className="w-full text-lg py-6 hover:scale-105 transition-all duration-300 animate-pulse-soft flex items-center justify-center gap-2">
                        <Phone className="h-5 w-5" />
                        📞 Call for Appointment
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="animate-fade-in">
                      <DialogHeader>
                        <DialogTitle className="font-poppins">📞 Contact Information</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="text-center p-6 bg-white rounded-lg border">
                          <h3 className="text-2xl font-bold text-primary font-poppins mb-4">Call Us Now!</h3>
                          <div className="space-y-3">
                            <a href="tel:9900088282" className="block p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors cursor-pointer">
                              <p className="text-lg font-bold text-primary">📞 9900088282</p>
                              <p className="text-sm text-muted-foreground">Primary Contact</p>
                            </a>
                            <a href="tel:9900088181" className="block p-3 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors cursor-pointer">
                              <p className="text-lg font-bold text-secondary">📞 9900088181</p>
                              <p className="text-sm text-muted-foreground">Alternate Contact</p>
                            </a>
                          </div>
                          <div className="mt-4 space-y-2">
                            <p className="text-sm text-muted-foreground">For appointments & queries</p>
                            <p className="text-sm text-muted-foreground">Expert medical consultation available</p>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="text-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                            variant="appointment"
                            size="lg"
                            className="w-full text-lg py-6 flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300"
                          >
                            <Calendar className="h-5 w-5 shrink-0" />
                            <span className="truncate">🏠 Request Home Collection</span>
                          </Button>


                    </DialogTrigger>
                    <DialogContent className="animate-fade-in">
                      <DialogHeader>
                        <DialogTitle className="font-poppins">🏠 Home Collection Service</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="text-center p-6 bg-white rounded-lg border">
                          <h3 className="text-xl font-bold text-secondary font-poppins mb-2">Free Home Collection!</h3>
                          <p className="font-inter text-foreground">Convenient sample collection at your doorstep</p>
                          <div className="mt-4 space-y-3">
                            <a href="tel:9900088282" className="block p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors cursor-pointer">
                              <p className="text-lg font-bold text-primary">📞 9900088282</p>
                              <p className="text-sm text-muted-foreground">Call for home collection</p>
                            </a>
                          </div>
                          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
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
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-bold text-foreground mb-4 text-center font-poppins text-lg">✨ Why Choose Us?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-all duration-300 group animate-bounce-in delay-1000">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">👨‍⚕️</div>
                      <div className="font-bold text-primary font-poppins">Expert Staff</div>
                      <div className="text-muted-foreground font-inter">Qualified professionals</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/5 rounded-lg hover:bg-secondary/10 transition-all duration-300 group animate-bounce-in delay-1100">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">⚡</div>
                      <div className="font-bold text-secondary font-poppins">Fast Reports</div>
                      <div className="text-muted-foreground font-inter">Quick accurate results</div>
                    </div>
                    <div className="text-center p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-all duration-300 group animate-bounce-in delay-1200">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">💰</div>
                      <div className="font-bold text-primary font-poppins">Affordable</div>
                      <div className="text-muted-foreground font-inter">Low cost services</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/5 rounded-lg hover:bg-secondary/10 transition-all duration-300 group animate-bounce-in delay-1300">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">🏠</div>
                      <div className="font-bold text-secondary font-poppins">Home Collection</div>
                      <div className="text-muted-foreground font-inter">Free pickup service</div>
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

export default Contact;
