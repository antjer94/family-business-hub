import { Users } from "lucide-react";

const FamilySection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-6">
            <Users className="w-6 h-6" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            One Family, Multiple Visions
          </h2>
          <div className="w-20 h-1 gradient-accent rounded-full mx-auto mb-10" />
          
          {/* Story */}
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            The <strong className="text-foreground">Jerntved family</strong> brings together 
            a wealth of experience and expertise across diverse industries. Our group represents 
            a unique blend of knowledge, skills, and perspectives that enables us to excel in 
            multiple fields.
          </p>
          
          <p className="text-lg text-foreground/80 leading-relaxed">
            Each of our companies operates with a shared commitment: delivering exceptional 
            results and making a meaningful difference for our clients. We believe in building 
            lasting relationships through reliability, professionalism, and genuine care for 
            those we serve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FamilySection;
