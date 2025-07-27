import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail, Navigation } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to take care of your health? Contact us for appointments, queries, or home collection services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card shadow-soft border-primary/10">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Our Location</h3>
                  <p className="text-muted-foreground mb-4">
                    105/3/1, 1st Main Rd<br />
                    Near Lakshmi Theatre, Tavarekere<br />
                    Krishnappa Garden, 1st Stage<br />
                    BTM Layout, Bengaluru, Karnataka 560029
                  </p>
                  <Button variant="outline" size="sm">
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-soft border-primary/10">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Working Hours</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p><strong>Monday - Saturday:</strong> 6:30 AM - 7:30 PM</p>
                    <p><strong>Sunday:</strong> 6:30 AM - 1:00 PM</p>
                    <p className="text-sm text-primary mt-2">Currently Open • Closes 7 PM</p>
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

          <div className="space-y-6">
            <Card className="p-8 bg-gradient-hero shadow-medical border-primary/20">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-foreground">
                  Schedule Your Appointment
                </CardTitle>
                <p className="text-muted-foreground">
                  Call us or visit our clinic for comprehensive diagnostic services
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="text-center">
                  <Button variant="medical" size="lg" className="w-full text-lg py-6">
                    <Phone className="h-5 w-5" />
                    Call for Appointment
                  </Button>
                </div>

                <div className="text-center">
                  <Button variant="appointment" size="lg" className="w-full text-lg py-6">
                    <Phone className="h-5 w-5" />
                    Request Home Collection
                  </Button>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold text-foreground mb-4 text-center">Why Choose Us?</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                      <div className="font-semibold text-primary">Expert Staff</div>
                      <div className="text-muted-foreground">Qualified professionals</div>
                    </div>
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                      <div className="font-semibold text-primary">Fast Reports</div>
                      <div className="text-muted-foreground">Quick accurate results</div>
                    </div>
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                      <div className="font-semibold text-primary">Affordable</div>
                      <div className="text-muted-foreground">Low cost services</div>
                    </div>
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                      <div className="font-semibold text-primary">Home Collection</div>
                      <div className="text-muted-foreground">Free pickup service</div>
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