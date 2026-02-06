import { Button } from "@/components/ui/button";
import { FileCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Process = () => {
  return (
    <section id="process" className="section-padding bg-card">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left - Case Studies Card */}
          <div className="card-cream p-10 lg:p-14 flex flex-col">
            <div className="flex items-start gap-4 mb-6">
              <div className="stamp-badge w-20 h-20 flex-shrink-0 flex items-center justify-center bg-primary/10">
                <div className="text-center">
                  <FileCheck className="w-6 h-6 text-primary mx-auto" />
                  <p className="text-[8px] font-bold text-foreground mt-1">SUCCESS</p>
                </div>
              </div>
            </div>
            
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              CLIENT CASE STUDIES
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed flex-grow">
              Discover how we've helped thousands of clients successfully navigate their visa journeys. From complex work permits to family reunifications, our track record speaks for itself.
            </p>
            <Link to="/schedule">
              <Button 
                variant="outline"
                className="rounded-full px-8 py-6 text-sm font-semibold tracking-wide border-2 border-foreground text-foreground hover:bg-foreground hover:text-background w-fit"
              >
                SCHEDULE APPOINTMENT
              </Button>
            </Link>
          </div>

          {/* Right - Image/Visual Area */}
          <div className="bg-primary/20 rounded-3xl p-8 flex items-center justify-center min-h-[300px]">
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              <div className="bg-background rounded-2xl p-6 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <p className="font-serif text-4xl font-bold text-primary">98%</p>
                  <p className="text-sm text-muted-foreground mt-2">Success Rate</p>
                </div>
              </div>
              <div className="bg-background rounded-2xl p-6 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <p className="font-serif text-4xl font-bold text-primary">2.5K+</p>
                  <p className="text-sm text-muted-foreground mt-2">Clients Served</p>
                </div>
              </div>
              <div className="bg-background rounded-2xl p-6 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <p className="font-serif text-4xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
                </div>
              </div>
              <div className="bg-background rounded-2xl p-6 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <p className="font-serif text-4xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground mt-2">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;