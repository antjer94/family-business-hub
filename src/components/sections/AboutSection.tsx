import { Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              About Our Family
            </h2>
            <div className="w-20 h-1 gradient-accent rounded-full mx-auto" />
          </div>
          
          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                The Thompson family has been building businesses in our community for nearly 
                four decades. What started as a single construction company founded by our 
                father, Robert Thompson, has grown into two thriving enterprises.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Today, siblings <strong className="text-foreground">James</strong> and{' '}
                <strong className="text-foreground">Sarah Thompson</strong> each lead one of our 
                companies, bringing their unique expertise while staying true to the family values 
                that got us here.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We believe in doing business the right way — with honesty, hard work, and a 
                genuine commitment to our clients and community.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-secondary p-8 shadow-soft">
                <div className="h-full rounded-xl border-2 border-dashed border-border flex items-center justify-center">
                  <div className="text-center px-6">
                    <p className="font-display text-2xl text-foreground mb-2 italic">
                      "Family first, always."
                    </p>
                    <p className="text-muted-foreground text-sm">
                      — Robert Thompson, Founder
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-company-a/10 rounded-full -z-10" />
            </div>
          </div>
          
          {/* Values */}
          <div className="mt-20 grid sm:grid-cols-3 gap-8">
            {[
              { title: 'Integrity', desc: 'We do what we say and say what we mean.' },
              { title: 'Quality', desc: 'Excellence in every project, every time.' },
              { title: 'Community', desc: 'Giving back to where we call home.' },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-card shadow-soft">
                <h3 className="font-display text-xl text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
