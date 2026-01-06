import { Building2, Phone, Mail, MapPin } from "lucide-react";

const CompanyASection = () => {
  const services = [
    "Custom Homes",
    "Commercial Buildings", 
    "Renovations",
    "Project Management",
    "Design-Build",
    "Green Building"
  ];

  return (
    <section id="thompson-construction" className="min-h-screen bg-company-a-light">
      {/* Hero bar */}
      <div className="bg-company-a py-4">
        <div className="container px-6">
          <p className="text-center text-primary-foreground/80 text-sm tracking-wide">
            Thompson Construction — Led by James Thompson
          </p>
        </div>
      </div>
      
      <div className="container px-6 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-company-a text-primary-foreground mb-6">
              <Building2 className="w-7 h-7" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-company-a mb-4">
              Thompson Construction
            </h2>
            <p className="text-xl text-muted-foreground italic">
              Building Tomorrow, Today
            </p>
          </div>
          
          {/* Description */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-foreground/80 leading-relaxed">
              For over 35 years, Thompson Construction has been the trusted name in residential 
              and commercial building. James Thompson leads our team of skilled craftsmen in 
              delivering quality construction projects that stand the test of time. From custom 
              homes to large-scale commercial developments, we bring expertise and integrity to 
              every project.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="mb-20">
            <h3 className="text-center font-display text-2xl text-foreground mb-8">Our Services</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-background rounded-xl p-6 shadow-soft hover:shadow-card transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-company-a" />
                    <span className="text-foreground font-medium">{service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Card */}
          <div className="bg-company-a rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-display text-2xl text-primary-foreground mb-6">
              Get in Touch
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <a 
                href="tel:+15551234567" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5 text-accent" />
                (555) 123-4567
              </a>
              <a 
                href="mailto:james@thompsonconstruction.com" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5 text-accent" />
                james@thompsonconstruction.com
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-accent" />
                Springfield, ST
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyASection;
