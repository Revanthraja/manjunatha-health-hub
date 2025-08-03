import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Microscope,
  Heart,
  TestTube,
  Stethoscope,
  Brain,
  Dna,
  Activity,
} from "lucide-react";
import labEquipment from "@/assets/lab-equipment.jpg";
import medicalStaff from "@/assets/medical-staff.jpg";
import { serviceTestData } from "@/data/testData";
import { useState } from "react";

const services = [
  {
    icon: <TestTube className="h-8 w-8" />,
    title: "Hematology",
    description: "Complete blood count and blood-related diagnostic tests",
    key: "hematology",
  },
  {
    icon: <Microscope className="h-8 w-8" />,
    title: "Clinical Pathology",
    description: "Comprehensive pathological examinations and analysis",
    key: "pathology",
  },
  {
    icon: <Dna className="h-8 w-8" />,
    title: "Cytology",
    description: "Cellular analysis and microscopic examinations",
    key: "cytology",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Histopathology",
    description: "Tissue analysis and biopsy examinations",
    key: "histopathology",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Biochemistry",
    description: "Blood chemistry and metabolic function tests",
    key: "biochemistry",
  },
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: "Serology & Immunology",
    description: "Immune system function and infectious disease testing",
    key: "serology",
  },
  {
    icon: <Activity className="h-8 w-8" />,
    title: "Hormones",
    description: "Comprehensive hormone level analysis",
    key: "hormones",
  },
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
            Comprehensive diagnostic services with state-of-the-art equipment
            and expert medical professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-2 border-primary/10 bg-gradient-card cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="mx-auto p-4 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{service.description}</p>
                    <p className="text-sm text-primary mt-2 font-medium">
                      Click to view tests
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-primary flex items-center gap-3">
                    {service.icon}
                    {serviceTestData[service.key]?.title || service.title}
                  </DialogTitle>
                  <p className="text-muted-foreground">
                    {serviceTestData[service.key]?.description ||
                      service.description}
                  </p>
                </DialogHeader>

                {serviceTestData[service.key] && (
                  <div className="mt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-semibold">
                            Test Name
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {serviceTestData[service.key].tests.map(
                          (test, testIndex) => (
                            <TableRow
                              key={testIndex}
                              className="hover:bg-muted/50"
                            >
                              <TableCell className="font-medium">
                                {test.name}
                              </TableCell>
                            </TableRow>
                          )
                        )}
                      </TableBody>
                    </Table>
                    <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                      <p className="text-sm text-muted-foreground text-center">
                        <strong>Note:</strong> Contact us for test packages and
                        home collection services.
                      </p>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="mt-16 space-y-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative overflow-hidden rounded-lg shadow-medical">
              <img
                src={labEquipment}
                alt="Modern Laboratory Equipment"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-medical">
              <img
                src={medicalStaff}
                alt="Professional Medical Staff"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-secondary/20"></div>
            </div>
          </div>

          <Card className="max-w-4xl mx-auto p-8 rounded-xl bg-gradient-to-r from-green-800 via-teal-700 to-purple-700 border border-primary/20 shadow-medical">
            <h3 className="text-2xl font-bold text-white mb-4 text-center font-poppins">
              All Types of Blood & Other Investigations Done Here
            </h3>
            <p className="text-white/90 text-lg mb-6 text-center">
              We provide comprehensive diagnostic services with fast, accurate
              reports and expert medical staff. Quality service with compassion
              at affordable costs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-white/90 text-purple-800 rounded-full shadow-sm">
                On Time Sample Collection
              </span>
              <span className="px-4 py-2 bg-white/90 text-purple-800 rounded-full shadow-sm">
                Fast & Accurate Reports
              </span>
              <span className="px-4 py-2 bg-white/90 text-purple-800 rounded-full shadow-sm">
                Expert Staff
              </span>
              <span className="px-4 py-2 bg-white/90 text-purple-800 rounded-full shadow-sm">
                Low Cost
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
