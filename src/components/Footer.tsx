import { Compass } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 lg:py-16">
      <div className="container-wide mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="stamp-badge w-24 h-24 flex items-center justify-center mb-6 bg-primary/10">
              <div className="text-center">
                <Compass className="w-8 h-8 text-primary mx-auto" />
                <p className="text-[8px] font-bold text-foreground mt-1">CLARITAS</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Making immigration simple, transparent, and accessible for everyone.
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 tracking-wide">ABOUT</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">our story</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">mission</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">portfolio</a></li>
            </ul>
          </div>

          {/* Work With Us */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 tracking-wide">WORK WITH US</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">services</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">resources</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">other</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 tracking-wide">CONTACT</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">phone</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">email</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">inquiry form</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">TERMS</a>
            <a href="#" className="hover:text-foreground transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-foreground transition-colors">ACCESSIBILITY</a>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            CLARITAS VISA CONSULTING
          </p>
          <p className="text-sm text-muted-foreground">
            ©CLARITAS. ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;