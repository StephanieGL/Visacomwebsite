import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Claritas made what I thought would be an overwhelming process feel manageable and even stress-free. Their team was responsive and thorough.",
    author: "Maria Chen",
    role: "Software Engineer",
    company: "Got H-1B Visa",
  },
  {
    quote: "The real-time tracking and secure document portal gave me peace of mind throughout my application. I always knew exactly where things stood.",
    author: "Ahmed Hassan",
    role: "Business Owner",
    company: "E-2 Investor Visa",
  },
  {
    quote: "Professional, knowledgeable, and genuinely caring. They treated my case like it mattered because they understood how much it meant to my family.",
    author: "Sarah Williams",
    role: "Healthcare Professional",
    company: "Family Green Card",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-accent-foreground uppercase tracking-wider mb-4">
            Client Stories
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Trusted by thousands
          </h2>
          <p className="text-muted-foreground text-lg">
            Real experiences from clients who trusted us with their immigration journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="p-8 rounded-2xl bg-card card-elevated"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-medium text-secondary-foreground">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
