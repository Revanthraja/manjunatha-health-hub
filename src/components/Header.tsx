import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import mdcLogo from "@/assets/mdc-logo.png";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-md bg-background/80">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={mdcLogo} alt="MDC Logo" className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-bold text-primary">Sri Manjunatha</h1>
              <p className="text-sm text-muted-foreground">Diagnostic & Clinic</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">Home</a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">Services</a>
            <a href="#packages" className="text-foreground hover:text-primary transition-smooth">Packages</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">Contact</a>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="appointment" size="sm" className="hidden sm:flex">
              <Phone className="h-4 w-4" />
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;