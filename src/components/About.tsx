import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";
import { Link } from "react-router-dom";
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
              </Button>
            </Link>
          </div>

          {/* Right - Badge */}
          <div className="flex justify-center items-center">
            <div className="stamp-badge w-48 h-48 md:w-64 md:h-64 flex items-center justify-center bg-primary/10 rotate-6">
              <div className="text-center">
                <Compass className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-2" />
                <p className="text-xs md:text-sm font-bold text-foreground leading-tight uppercase">
                  Navigate The<br />Visa World<br />With VISAS.COM
                </p>
                <p className="text-[10px] text-muted-foreground mt-2 font-medium">EST. 2026

              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;