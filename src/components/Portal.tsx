import { Button } from "@/components/ui/button";
import { Upload, Bell, Lock, MessageCircle, FileText, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Secure Upload",
    description: "256-bit encrypted",
  },
  {
    icon: Bell,
    title: "Real-Time Updates",
    description: "Instant notifications",
  },
  {
    icon: Lock,
    title: "Bank-Level Security",
    description: "SOC 2 compliant",
  },
  {
    icon: MessageCircle,
    title: "Direct Messaging",
    description: "Chat with experts",
  },
];

const Portal = () => {
  return (
    <section id="portal" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              YOUR DIGITAL CONCIERGE
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Access your case documents, track progress, and communicate with your legal team 24/7 through our secure client portal.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-sm font-semibold tracking-wide"
            >
              ACCESS PORTAL
            </Button>
          </div>

          {/* Portal Preview */}
          <div className="relative">
            <div className="rounded-3xl bg-secondary p-6 lg:p-8">
              {/* Mock header */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">JD</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Welcome back, John</p>
                    <p className="text-sm text-muted-foreground">H-1B Application</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs font-semibold text-primary">In Progress</span>
                </div>
              </div>

              {/* Progress tracker */}
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-muted-foreground">Application Progress</span>
                  <span className="font-semibold text-foreground">65%</span>
                </div>
                <div className="h-3 bg-background rounded-full overflow-hidden">
                  <div className="h-full w-[65%] bg-primary rounded-full" />
                </div>
              </div>

              {/* Document checklist */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground mb-4">Required Documents</p>
                {[
                  { name: "Passport Copy", status: "complete" },
                  { name: "Employment Letter", status: "complete" },
                  { name: "Education Credentials", status: "complete" },
                  { name: "Tax Returns", status: "pending" },
                ].map((doc) => (
                  <div
                    key={doc.name}
                    className="flex items-center justify-between p-4 rounded-2xl bg-background"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">{doc.name}</span>
                    </div>
                    {doc.status === "complete" ? (
                      <CheckCircle className="w-5 h-5 text-primary" />
                    ) : (
                      <Button 
                        size="sm"
                        className="bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground rounded-full text-xs font-semibold px-4"
                      >
                        Upload
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portal;