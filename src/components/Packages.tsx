import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, TestTube } from "lucide-react";
import { healthPackages } from "@/data/packageData";

const Packages = () => {
  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary text-secondary-foreground text-lg px-6 py-2">
            Save 50% on All Packages
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Specialty Specific <span className="text-secondary">Health Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive health checkup packages designed for specific medical conditions and age groups
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {healthPackages.map((pkg, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className={`relative group hover:shadow-medical transition-all duration-300 hover:-translate-y-1 cursor-pointer ${pkg.popular ? 'border-secondary shadow-glow' : 'border-primary/10'}`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg font-semibold text-foreground leading-tight">
                      {pkg.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      {pkg.originalPrice && (
                        <p className="text-sm text-muted-foreground line-through">
                          {pkg.originalPrice}
                        </p>
                      )}
                      <p className="text-3xl font-bold text-primary">{pkg.price}</p>
                      <Badge variant="secondary" className="text-xs">
                        Save {pkg.discount}
                      </Badge>
                    </div>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center justify-center space-x-2">
                        <TestTube className="h-4 w-4 text-primary" />
                        <span>{pkg.tests.length} Tests Included</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Expert Analysis</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Fast Reports</span>
                      </div>
                    </div>

                    <p className="text-sm text-primary font-medium">Click to view tests included</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-primary flex items-center gap-3">
                    <TestTube className="h-6 w-6" />
                    {pkg.name}
                  </DialogTitle>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </DialogHeader>
                
                <div className="mt-6 space-y-6">
                  <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
                    <div>
                      <p className="text-2xl font-bold text-primary">{pkg.price}</p>
                      <p className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</p>
                    </div>
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                      Save {pkg.discount}
                    </Badge>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-foreground">
                      Tests Included ({pkg.tests.length} tests)
                    </h4>
                    <div className="grid gap-2">
                      {pkg.tests.map((test, testIndex) => (
                        <div key={testIndex} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium">{test.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      <strong>Package Benefits:</strong> Free home collection, expert analysis, and fast report delivery
                    </p>
                    <a href="#contact" className="w-full block">
                      <Button className="w-full" size="lg">
                        <Phone className="h-4 w-4 mr-2" />
                        Book This Package Now
                      </Button>
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="relative max-w-3xl mx-auto p-8 bg-gradient-hero border-primary/20 shadow-medical">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">FREE HOME COLLECTION FACILITY</h3>
                <p className="text-white/90 text-lg mb-6">
                  Convenient sample collection from the comfort of your home. 
                  Available Monday to Saturday from 6:30 AM to 7:30 PM, Sunday 6:30 AM to 1:00 PM
                </p>
                <Button variant="medical" size="lg">
                  <Phone className="h-5 w-5" />
                  Schedule Home Collection
                </Button>
              </div>
            </Card>

        </div>
      </div>
    </section>
  );
};

export default Packages;
