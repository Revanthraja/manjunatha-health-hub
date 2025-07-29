import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone } from "lucide-react";

const packages = [
  {
    name: "Advanced Diabetes Package",
    originalPrice: "₹2,000",
    price: "₹1,000.00",
    discount: "50%",
    popular: true
  },
  {
    name: "Comprehensive Body Checkup",
    originalPrice: "₹6,000",
    price: "₹3,000.00",
    discount: "50%"
  },
  {
    name: "Diabetes Screening Package",
    originalPrice: "₹1,000",
    price: "₹500.00",
    discount: "50%"
  },
  {
    name: "Healthy Body Package",
    originalPrice: "₹1,700",
    price: "₹850.00",
    discount: "50%"
  },
  {
    name: "Healthy Child Package",
    originalPrice: "₹1,900",
    price: "₹850.00",
    discount: "55%"
  },
  {
    name: "Healthy Heart Package",
    originalPrice: "₹2,200",
    price: "₹1,100.00",
    discount: "50%"
  },
  {
    name: "Healthy Woman Package",
    originalPrice: "₹5,000",
    price: "₹2,500.00",
    discount: "50%"
  },
  {
    name: "Liver & Kidney Package",
    originalPrice: "₹2,000",
    price: "₹1,000.00",
    discount: "50%"
  },
  {
    name: "Senior Citizen Package (M)",
    originalPrice: "₹4,600",
    price: "₹2,300.00",
    discount: "50%"
  },
  {
    name: "Senior Citizen Package (F)",
    originalPrice: "₹4,000",
    price: "₹2,000.00",
    discount: "50%"
  },
  {
    name: "Obesity Package",
    originalPrice: "₹4,000",
    price: "₹2,000.00",
    discount: "50%"
  }
];

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
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative group hover:shadow-medical transition-all duration-300 hover:-translate-y-1 ${pkg.popular ? 'border-secondary shadow-glow' : 'border-primary/10'}`}>
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
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Comprehensive Tests</span>
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

                <a href="#contact" className="w-full">
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Book Now
                    </Button>
                  </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="relative max-w-3xl mx-auto p-8 bg-gradient-hero border-primary/20 shadow-medical">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-4">FREE HOME COLLECTION FACILITY</h3>
                <p className="text-muted-foreground text-lg mb-6">
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
