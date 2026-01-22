import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
          Ready to start your journey?
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Book a free consultation with one of our immigration specialists. 
          We'll assess your situation and create a personalized roadmap.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            variant="secondary" 
            size="xl"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Schedule Free Consultation
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-primary-foreground/70">
          <a href="tel:+1-800-555-0123" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
            <Phone className="w-4 h-4" />
            +1 (800) 555-0123
          </a>
          <a href="mailto:hello@claritas.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
            <Mail className="w-4 h-4" />
            hello@claritas.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
