import { FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container-wide mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-medium text-foreground">
                Claritas
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Making immigration simple, transparent, and accessible for everyone.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Work Visas</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Student Visas</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Family Immigration</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Business Immigration</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Claritas. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Licensed immigration consultancy. Not a law firm.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
