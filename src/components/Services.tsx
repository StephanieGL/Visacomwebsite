import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Users } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "SIGN ON AS A CLIENT",
    description: "Get personalized visa guidance with a dedicated consultant who understands your unique situation. From initial assessment to final approval, we're with you every step of the way.",
  },
  {
    icon: GraduationCap,
    title: "DEEP DIVE DOCUMENT REVIEW",
    description: "Our experts meticulously review every document to ensure accuracy and completeness. We catch potential issues before they become problems, saving you time and stress.",
  },
  {
    icon: Users,
    title: "LEARN FROM US",
    description: "Access our library of resources, guides, and webinars designed to demystify the immigration process. Knowledge is power when navigating bureaucratic systems.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            HOW TO WORK WITH US
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the path that best fits your immigration journey. We offer flexible solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-background rounded-3xl p-8 lg:p-10 flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-grow mb-8">
                {service.description}
              </p>
              <Button 
                variant="outline"
                className="rounded-full px-6 py-5 text-sm font-semibold tracking-wide border-2 border-foreground text-foreground hover:bg-foreground hover:text-background w-fit"
              >
                MORE WITH US
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;