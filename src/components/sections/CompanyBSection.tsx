import { Leaf, Phone, Mail, MapPin } from "lucide-react";

const CompanyBSection = () => {
  const services = [
    "Environmental Audits",
    "Sustainability Planning",
    "Carbon Consulting",
    "Green Certification",
    "Waste Management",
    "Energy Efficiency"
  ];

  return (
    <section id="greenleaf-solutions" className="min-h-screen bg-company-b-light">
      {/* Hero bar */}
      <div className="bg-company-b py-4">
        <div className="container px-6">
          <p className="text-center text-primary-foreground/80 text-sm tracking-wide">
            GreenLeaf Solutions — Led by Sarah Thompson
          </p>
        </div>
      </div>
      
      <div className="container px-6 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-company-b text-primary-foreground mb-6">
              <Leaf className="w-7 h-7" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-company-b mb-4">
              GreenLeaf Solutions
            </h2>
            <p className="text-xl text-muted-foreground italic">
              Sustainable Futures Start Here
            </p>
          </div>
          
          {/* Description */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Founded by Sarah Thompson in 1992, GreenLeaf Solutions provides innovative 
              environmental consulting and sustainable business solutions. We help organizations 
              reduce their environmental footprint while improving their bottom line. Our holistic 
              approach combines cutting-edge research with practical implementation strategies.
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
                    <span className="w-2 h-2 rounded-full bg-company-b" />
                    <span className="text-foreground font-medium">{service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Card */}
          <div className="bg-company-b rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-display text-2xl text-primary-foreground mb-6">
              Get in Touch
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <a 
                href="tel:+15559876543" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5 text-accent" />
                (555) 987-6543
              </a>
              <a 
                href="mailto:sarah@greenleafsolutions.com" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5 text-accent" />
                sarah@greenleafsolutions.com
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

export default CompanyBSection;
