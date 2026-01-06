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
                The <strong className="text-foreground">Jerntved family</strong> brings together 
                a wealth of experience and expertise across diverse industries. Our group represents 
                a unique blend of knowledge, skills, and perspectives.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Each of our companies operates with a shared commitment: delivering exceptional 
                results and making a meaningful difference for our clients.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-secondary p-8 shadow-soft">
                <div className="h-full rounded-xl border-2 border-dashed border-border flex items-center justify-center">
                  <div className="text-center px-6">
                    <p className="font-display text-xl text-foreground mb-4">
                      Our Companies
                    </p>
                    <div className="space-y-3 text-left">
                      <p className="text-foreground/80 text-sm">
                        <strong className="text-company-a">Jerntved Consulting</strong> — IT & Oracle expertise
                      </p>
                      <p className="text-foreground/80 text-sm">
                        <strong className="text-company-b">Här&där-Doktorn</strong> — Medical staffing solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-company-a/10 rounded-full -z-10" />
            </div>
          </div>
          
          {/* Values */}
          <div className="mt-20 grid sm:grid-cols-2 gap-8">
            {[
              { title: 'IT Excellence', desc: '40+ years of Oracle and server management expertise.', color: 'company-a' },
              { title: 'Healthcare Solutions', desc: 'Reliable specialist doctors across all of Sweden.', color: 'company-b' },
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
