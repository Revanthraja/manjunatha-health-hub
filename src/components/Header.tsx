import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import mdcLogo from "@/assets/mdc-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-md bg-background/80">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <img src={mdcLogo} alt="MDC Logo" className="h-12 w-12" />
            <div>
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-500 to-purple-500 bg-clip-text text-transparent">
                  Sri Manjunatha Diagnostic & Clinic
                </h1>
            
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">Home</a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">Services</a>
            <a href="#packages" className="text-foreground hover:text-primary transition-smooth">Packages</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">Contact</a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {/* Book Button (hidden on very small screens) */}
            <Button asChild variant="appointment" size="sm" className="hidden sm:flex items-center gap-2">
              <a href="#contact">
                <Phone className="h-4 w-4" />
                Book Appointment
              </a>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-md text-primary hover:bg-primary/10 transition"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Nav Panel */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 animate-slide-down">
            <a href="#home" className="text-foreground hover:text-primary">Home</a>
            <a href="#services" className="text-foreground hover:text-primary">Services</a>
            <a href="#packages" className="text-foreground hover:text-primary">Packages</a>
            <a href="#contact" className="text-foreground hover:text-primary">Contact</a>
            <Button asChild variant="appointment" size="sm" className="w-full flex items-center justify-center gap-2">
              <a href="#contact">
                <Phone className="h-4 w-4" />
                Book Appointment
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
