import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Claritas made what I thought would be an overwhelming process feel manageable and stress-free. Their team was responsive and thorough.",
    author: "Maria Chen",
    role: "Software Engineer",
    company: "H-1B Visa Approved",
  },
  {
    quote: "The real-time tracking and secure portal gave me peace of mind throughout my application. I always knew exactly where things stood.",
    author: "Ahmed Hassan",
    role: "Business Owner",
    company: "E-2 Investor Visa",
  },
  {
    quote: "Professional, knowledgeable, and genuinely caring. They treated my case like it mattered because they understood how much it meant.",
    author: "Sarah Williams",
    role: "Healthcare Professional",
    company: "Family Green Card",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            TRUSTED BY THOUSANDS
          </h2>
          <p className="text-muted-foreground text-lg">
            Real experiences from clients who trusted us with their immigration journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="p-8 rounded-3xl bg-background"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-semibold text-primary">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
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