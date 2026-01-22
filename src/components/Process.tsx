import { MessageSquare, FileUp, Search, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Initial Consultation",
    description: "Schedule a free consultation to discuss your goals and assess your eligibility for various visa options.",
  },
  {
    number: "02",
    icon: FileUp,
    title: "Document Collection",
    description: "Securely upload your documents through our encrypted portal. We'll review and organize everything.",
  },
  {
    number: "03",
    icon: Search,
    title: "Application Preparation",
    description: "Our experts prepare and review your application, ensuring accuracy and completeness.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Submission & Tracking",
    description: "We submit your application and provide real-time updates throughout the process.",
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding bg-muted/30">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-accent-foreground uppercase tracking-wider mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            A seamless process from start to finish
          </h2>
          <p className="text-muted-foreground text-lg">
            We've designed every step to be transparent, efficient, and stress-free.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative lg:flex items-center gap-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"}`}>
                  <div className={`p-8 rounded-2xl bg-card card-elevated ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"} max-w-md`}>
                    <span className="text-5xl font-serif font-medium text-border">
                      {step.number}
                    </span>
                    <h3 className="font-serif text-xl font-medium text-foreground mt-4 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Icon Node */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-card border-4 border-background shadow-card items-center justify-center z-10">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
