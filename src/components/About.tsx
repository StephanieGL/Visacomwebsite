import { Button } from "@/components/ui/button";
import { Compass, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import visaPassportImage from "@/assets/visa-passport.jpg";

const About = () => {
  return <section id="about" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div className="card-cream p-10 lg:p-14">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              BUILT ON STRATEGY AND BACKED BY EXPERTISE. WE FOCUS ON RESULT-DRIVEN IMMIGRATION SERVICES
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our team of certified immigration consultants brings decades of combined experience to every case. We handle the complexity so you can focus on your future.
            </p>
            <Link to="/schedule">
              <Button variant="outline" className="rounded-full px-8 py-6 text-sm font-semibold tracking-wide border-2 border-foreground text-foreground hover:bg-foreground hover:text-background">
                SCHEDULE APPOINTMENT
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Right - Framed Image with small badge overlay */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Framed passport/visa image */}
              <div className="rounded-2xl border-4 border-primary/30 p-2 bg-background shadow-lg">
                <img 
                  src={visaPassportImage} 
                  alt="Passport with visa stamps" 
                  className="w-80 h-60 md:w-96 md:h-72 object-cover rounded-xl" 
                />
              </div>
              {/* Small badge overlay in top left corner */}
              <div className="absolute -top-6 -left-6 stamp-badge w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-primary/10 rotate-6">
                <div className="text-center">
                  <Compass className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-0.5" />
                  <p className="text-[7px] md:text-[8px] font-bold text-foreground leading-tight uppercase">
                    Navigate The<br />Visa World<br />With VISAS.COM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;