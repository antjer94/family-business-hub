import { Server, Phone, Mail, MapPin } from "lucide-react";

const CompanyASection = () => {
  const services = [
    {
      title: "Oracle Solutions",
      description: "Database & Middleware expertise"
    },
    {
      title: "Server Infrastructure", 
      description: "Windows, Linux, Solaris & VMware"
    },
    {
      title: "Project Management",
      description: "Delivering IT projects on time"
    },
    {
      title: "IT Education",
      description: "Training & knowledge transfer"
    }
  ];

  return (
    <section id="jerntved-consulting" className="min-h-screen bg-company-a-light">
      {/* Hero bar */}
      <div className="bg-company-a py-4">
        <div className="container px-6">
          <p className="text-center text-primary-foreground/80 text-sm tracking-wide">
            Jerntved Consulting — Trusted IT Partner Since 1984
          </p>
        </div>
      </div>
      
      <div className="container px-6 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-company-a text-primary-foreground mb-6">
              <Server className="w-7 h-7" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-company-a mb-4">
              Jerntved Consulting
            </h2>
            <p className="text-xl text-muted-foreground italic">
              Your Partner in Enterprise IT Excellence
            </p>
          </div>
          
          {/* Description */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-foreground/80 leading-relaxed">
              With over 40 years of experience, Jerntved Consulting delivers expert IT consultancy 
              services to businesses of all sizes. We specialize in Oracle products, enterprise 
              server infrastructure, and IT project management. Our commitment to knowledge sharing 
              through IT education ensures your team is empowered to succeed long after our 
              engagement ends.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="mb-20">
            <h3 className="text-center font-display text-2xl text-foreground mb-8">Our Expertise</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-background rounded-xl p-8 shadow-soft hover:shadow-card transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="w-3 h-3 rounded-full bg-company-a mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-foreground font-semibold text-lg mb-1">{service.title}</h4>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="bg-background rounded-2xl p-8 md:p-12 mb-20 shadow-soft">
            <h3 className="font-display text-2xl text-foreground mb-6 text-center">
              Why Choose Jerntved Consulting?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-display text-company-a mb-2">40+</p>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
              <div>
                <p className="text-4xl font-display text-company-a mb-2">Oracle</p>
                <p className="text-muted-foreground">Certified Expertise</p>
              </div>
              <div>
                <p className="text-4xl font-display text-company-a mb-2">100%</p>
                <p className="text-muted-foreground">Client Focused</p>
              </div>
            </div>
          </div>
          
          {/* Contact Card */}
          <div className="bg-company-a rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-display text-2xl text-primary-foreground mb-6">
              Let's Discuss Your IT Needs
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <a 
                href="tel:+4512345678" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5 text-accent" />
                +45 12 34 56 78
              </a>
              <a 
                href="mailto:info@jerntved.dk" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5 text-accent" />
                info@jerntved.dk
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-accent" />
                Denmark
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyASection;
