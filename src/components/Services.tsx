import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Microscope, Heart, TestTube, Stethoscope, Brain, Dna } from "lucide-react";
import labEquipment from "@/assets/lab-equipment.jpg";
import medicalStaff from "@/assets/medical-staff.jpg";

const services = [
  {
    icon: <TestTube className="h-8 w-8" />,
    title: "Hematology",
    description: "Complete blood count and blood-related diagnostic tests"
  },
  {
    icon: <Microscope className="h-8 w-8" />,
    title: "Clinical Pathology",
    description: "Comprehensive pathological examinations and analysis"
  },
  {
    icon: <Dna className="h-8 w-8" />,
    title: "Cytology",
    description: "Cellular analysis and microscopic examinations"
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Histopathology",
    description: "Tissue analysis and biopsy examinations"
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Biochemistry",
    description: "Blood chemistry and metabolic function tests"
  },
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: "Immunology",
    description: "Immune system function and antibody testing"
  },
  {
    icon: <TestTube className="h-8 w-8" />,
    title: "Serology",
    description: "Blood serum analysis and infectious disease testing"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-poppins">
            Our <span className="text-primary">Medical Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive diagnostic services with state-of-the-art equipment and expert medical professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-2 border-primary/10 bg-gradient-card">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 space-y-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative overflow-hidden rounded-lg shadow-medical">
              <img src={labEquipment} alt="Modern Laboratory Equipment" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-medical">
              <img src={medicalStaff} alt="Professional Medical Staff" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-secondary/20"></div>
            </div>
          </div>
          
          <Card className="max-w-4xl mx-auto p-8 bg-white border border-gray-300 shadow-md">
            <h3 className="text-2xl font-bold text-black mb-4">All Types of Blood & Other Investigations Done Here</h3>
            <p className="text-gray-700 text-lg mb-6">
              We provide comprehensive diagnostic services with fast, accurate reports and expert medical staff. 
              Quality service with compassion at affordable costs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">On Time Sample Collection</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">Fast & Accurate Reports</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">Expert Staff</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">Low Cost</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
