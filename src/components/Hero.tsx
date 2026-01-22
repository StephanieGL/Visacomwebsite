import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, FileCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/40 rounded-full blur-3xl" />

      <div className="relative container-wide mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 text-secondary-foreground text-sm font-medium mb-8 animate-fade-up">
            <Shield className="w-4 h-4" />
            Trusted by 2,500+ clients worldwide
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground leading-tight mb-6 animate-fade-up delay-100">
            Your visa journey,{" "}
            <span className="text-gradient">simplified</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-200">
            Expert guidance through every step of your immigration process. 
            We handle the complexity so you can focus on your future.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up delay-300">
            <Button variant="hero">
              Start Your Application
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="heroOutline">
              Book a Consultation
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 text-sm text-muted-foreground animate-fade-up delay-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent-foreground" />
              <span>24-48hr Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent-foreground" />
              <span>Bank-Level Security</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-accent-foreground" />
              <span>98% Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
