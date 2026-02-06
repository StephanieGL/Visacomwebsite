import { Button } from "@/components/ui/button";
import { FileText, Check, Compass } from "lucide-react";
import handshakeImage from "@/assets/handshake.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return <section className="relative overflow-hidden">
      {/* Main Hero Content */}
      <div className="bg-secondary">
        <div className="container-wide mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Decorative Element */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Organic decorative shape */}
                <div className="w-80 h-80 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                  <img src={handshakeImage} alt="Professional handshake" className="w-72 h-72 rounded-full object-cover" />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-accent flex items-center justify-center animate-bounce" style={{
                animationDuration: '3s'
              }}>
                  <FileText className="w-8 h-8 text-accent-foreground" />
                </div>
                <div className="absolute -bottom-6 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center animate-bounce" style={{
                animationDuration: '2.5s',
                animationDelay: '0.5s'
              }}>
                  <Compass className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="text-center lg:text-left">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-8">NAVIGATE YOUR VISA JOURNEY WITH VISAS.COM' EXPERT-GUIDED IMMIGRATION SERVICES</h1>
              
              <Link to="/schedule">
                <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-sm font-semibold tracking-wide">
                  Schedule your appointment now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stamp Badge */}
      <div className="absolute top-4 right-4 lg:top-8 lg:right-8 hidden md:block">
        <div className="stamp-badge w-24 h-24 flex items-center justify-center rotate-12 bg-background">
          <div className="text-center">
            <Check className="w-5 h-5 text-primary mx-auto mb-0.5" />
            <p className="text-[8px] font-bold text-foreground leading-tight">
              TRUSTED<br />VISA<br />EXPERTS
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;