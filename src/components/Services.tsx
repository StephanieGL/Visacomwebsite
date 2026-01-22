import { Briefcase, GraduationCap, Users, Building2, Plane, FileText } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Work Visas",
    description: "H-1B, L-1, O-1, and employment-based immigration for professionals and executives.",
  },
  {
    icon: GraduationCap,
    title: "Student Visas",
    description: "F-1, J-1, and M-1 visas for international students and exchange visitors.",
  },
  {
    icon: Users,
    title: "Family Immigration",
    description: "Spouse visas, fiancé visas, and family-based green card petitions.",
  },
  {
    icon: Building2,
    title: "Business Immigration",
    description: "Investor visas, treaty trader, and corporate relocation services.",
  },
  {
    icon: Plane,
    title: "Travel Visas",
    description: "Tourist, business visitor, and transit visas for international travel.",
  },
  {
    icon: FileText,
    title: "Document Services",
    description: "Apostille, translation, notarization, and document authentication.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-accent-foreground uppercase tracking-wider mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Comprehensive visa solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From work permits to family reunification, we provide end-to-end support for all your immigration needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card card-elevated hover:shadow-elevated transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-6 h-6 text-secondary-foreground group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
