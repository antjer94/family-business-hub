import { Stethoscope, Phone, Mail, MapPin, Clock, Users, Shield } from "lucide-react";

const CompanyBSection = () => {
  const services = [
    {
      title: "Emergency Staffing",
      description: "Rapid response when needs arise"
    },
    {
      title: "Specialist Doctors",
      description: "Qualified professionals across disciplines"
    },
    {
      title: "Nationwide Coverage",
      description: "Available in all regions of Sweden"
    },
    {
      title: "Flexible Solutions",
      description: "Tailored to your specific requirements"
    }
  ];

  return (
    <section id="hardardoktorn" className="min-h-screen bg-company-b-light">
      {/* Hero bar */}
      <div className="bg-company-b py-4">
        <div className="container px-6">
          <p className="text-center text-primary-foreground/80 text-sm tracking-wide">
            Här&där-Doktorn — Your Partner in Medical Staffing
          </p>
        </div>
      </div>
      
      <div className="container px-6 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-company-b text-primary-foreground mb-6">
              <Stethoscope className="w-7 h-7" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-company-b mb-4">
              Här&där-Doktorn
            </h2>
            <p className="text-xl text-muted-foreground italic">
              Specialist Doctors When You Need Them Most
            </p>
          </div>
          
          {/* Description */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-foreground/80 leading-relaxed">
              When the need for medical expertise arises unexpectedly, Här&där-Doktorn is here to help. 
              We specialize in connecting healthcare facilities with competent specialist doctors 
              across Sweden. Our responsive team works around the clock to ensure you have access 
              to the medical professionals you need, exactly when you need them.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="mb-20">
            <h3 className="text-center font-display text-2xl text-foreground mb-8">What We Offer</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-background rounded-xl p-8 shadow-soft hover:shadow-card transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="w-3 h-3 rounded-full bg-company-b mt-2 flex-shrink-0" />
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
              Why Choose Här&där-Doktorn?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-company-b/10 text-company-b mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <p className="text-lg font-semibold text-foreground mb-1">Always Available</p>
                <p className="text-muted-foreground">Ready when you need us</p>
              </div>
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-company-b/10 text-company-b mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <p className="text-lg font-semibold text-foreground mb-1">Qualified Specialists</p>
                <p className="text-muted-foreground">Vetted medical professionals</p>
              </div>
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-company-b/10 text-company-b mb-3">
                  <Shield className="w-5 h-5" />
                </div>
                <p className="text-lg font-semibold text-foreground mb-1">Full Coverage</p>
                <p className="text-muted-foreground">All regions of Sweden</p>
              </div>
            </div>
          </div>
          
          {/* Contact Card */}
          <div className="bg-company-b rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-display text-2xl text-primary-foreground mb-6">
              Need Medical Staffing Support?
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <a 
                href="tel:+46708863278" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5 text-accent" />
                +46 70 88 63 278
              </a>
              <a 
                href="mailto:Marta@jerntved.se" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5 text-accent" />
                Marta@jerntved.se
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-accent" />
                Sweden
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyBSection;
