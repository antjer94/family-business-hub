import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 gradient-hero relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Whether you need construction expertise or sustainable solutions, 
              we're here to help. Reach out to us today.
            </p>
          </div>
          
          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Company A Contact */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
              <h3 className="font-display text-2xl text-primary-foreground mb-6">
                Thompson Construction
              </h3>
              <div className="space-y-4">
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
                <div className="flex items-start gap-3 text-primary-foreground/80">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>123 Builder's Way<br />Springfield, ST 12345</span>
                </div>
              </div>
            </div>
            
            {/* Company B Contact */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
              <h3 className="font-display text-2xl text-primary-foreground mb-6">
                GreenLeaf Solutions
              </h3>
              <div className="space-y-4">
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
                <div className="flex items-start gap-3 text-primary-foreground/80">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>456 Eco Drive<br />Springfield, ST 12345</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <p className="text-primary-foreground/60 text-sm mb-4">
              Or send us a general inquiry
            </p>
            <a 
              href="mailto:hello@thompsonfamily.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-medium rounded-md hover:opacity-90 transition-all duration-300 shadow-glow"
            >
              Contact the Family Office
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
