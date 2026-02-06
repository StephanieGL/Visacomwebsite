import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

const Schedule = () => {
  const calendlyUrl = "https://calendly.com/sety-lomejor/30min?hide_gdpr_banner=1";

  useEffect(() => {
    // Initialize Calendly widget after component mounts
    const initCalendly = () => {
      const container = document.getElementById("calendly-container");
      if (window.Calendly && container) {
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: container,
        });
      }
    };

    // Check if Calendly script is already loaded
    if (window.Calendly) {
      initCalendly();
    } else {
      // Wait for script to load
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkCalendly);
          initCalendly();
        }
      }, 100);

      // Cleanup
      return () => clearInterval(checkCalendly);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container-wide mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <span className="font-serif text-xl font-semibold text-foreground tracking-wide">
              VISAS.COM
            </span>
            
            <div className="w-24" /> {/* Spacer for balance */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-wide mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Schedule Your Consultation
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Book a free 30-minute consultation with one of our immigration experts. 
              We'll discuss your visa needs and create a personalized plan for your journey.
            </p>
          </div>

          {/* Calendly Embed */}
          <div className="bg-card rounded-3xl p-2 md:p-4 border border-border overflow-hidden">
            <div 
              id="calendly-container"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="card-cream p-6 text-center">
              <p className="font-serif text-2xl font-semibold text-primary mb-2">30 min</p>
              <p className="text-sm text-muted-foreground">Free consultation</p>
            </div>
            <div className="card-cream p-6 text-center">
              <p className="font-serif text-2xl font-semibold text-primary mb-2">Online</p>
              <p className="text-sm text-muted-foreground">Video or phone call</p>
            </div>
            <div className="card-cream p-6 text-center">
              <p className="font-serif text-2xl font-semibold text-primary mb-2">Expert</p>
              <p className="text-sm text-muted-foreground">Certified consultant</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Schedule;