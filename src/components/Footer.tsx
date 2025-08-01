import { Phone, MapPin, Mail, Clock } from "lucide-react";
import mdcLogo from "@/assets/mdc-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={mdcLogo} alt="MDC Logo" className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-bold">Sri Manjunatha</h3>
                <p className="text-primary-foreground/80 text-sm">Diagnostic & Clinic</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Quality healthcare services with expert staff, accurate reports, and compassionate care. 
              Your health is our priority.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Quality | Service | Compassion
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-foreground/80 mt-0.5" />
                <div className="text-sm text-primary-foreground/80">
                  105/3/1, 1st Main Rd, Near Lakshmi Theatre<br />
                  Tavarekere, BTM Layout, Bengaluru - 560029
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/80" />
                <span className="text-sm text-primary-foreground/80">mdc.care.info@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/80" />
                <span className="text-sm text-primary-foreground/80">Call for Appointments</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4" />
                <span>Mon - Sat: 7:00 AM - 9:00 PM</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4" />
                <span>Sunday: 7:00 AM - 1:00 PM</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-primary-foreground/10 rounded-lg">
              <p className="text-sm font-semibold">FREE HOME COLLECTION</p>
              <p className="text-xs text-primary-foreground/80 mt-1">
                Convenient sample collection from your home
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Sri Manjunatha Diagnostic & Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
