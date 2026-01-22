import { Button } from "@/components/ui/button";
import { Upload, Bell, Lock, MessageCircle, FileText, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Secure Document Upload",
    description: "256-bit encrypted file transfer",
  },
  {
    icon: Bell,
    title: "Real-Time Notifications",
    description: "Instant updates on your case status",
  },
  {
    icon: Lock,
    title: "Bank-Level Security",
    description: "SOC 2 compliant infrastructure",
  },
  {
    icon: MessageCircle,
    title: "Direct Messaging",
    description: "Chat with your dedicated advisor",
  },
];

const Portal = () => {
  return (
    <section id="portal" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium text-accent-foreground uppercase tracking-wider mb-4">
              Client Portal
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
              Everything you need, in one place
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our secure client portal gives you 24/7 access to your case documents, real-time progress tracking, and direct communication with your legal team.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero">
              Access Your Portal
            </Button>
          </div>

          {/* Portal Preview */}
          <div className="relative">
            <div className="rounded-2xl bg-card card-elevated p-6 lg:p-8">
              {/* Mock header */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-medium text-sm">JD</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Welcome back, John</p>
                    <p className="text-sm text-muted-foreground">H-1B Application</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent">
                  <span className="w-2 h-2 rounded-full bg-accent-foreground" />
                  <span className="text-xs font-medium text-accent-foreground">In Progress</span>
                </div>
              </div>

              {/* Progress tracker */}
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-muted-foreground">Application Progress</span>
                  <span className="font-medium text-foreground">65%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[65%] bg-primary rounded-full" />
                </div>
              </div>

              {/* Document checklist */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground mb-4">Required Documents</p>
                {[
                  { name: "Passport Copy", status: "complete" },
                  { name: "Employment Letter", status: "complete" },
                  { name: "Education Credentials", status: "complete" },
                  { name: "Tax Returns", status: "pending" },
                ].map((doc) => (
                  <div
                    key={doc.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-foreground">{doc.name}</span>
                    </div>
                    {doc.status === "complete" ? (
                      <CheckCircle className="w-5 h-5 text-accent-foreground" />
                    ) : (
                      <Button variant="subtle" size="sm">
                        Upload
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute -z-10 inset-0 translate-x-4 translate-y-4 rounded-2xl bg-secondary/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portal;
