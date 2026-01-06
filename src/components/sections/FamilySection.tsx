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
            One Family, Two Visions
          </h2>
          <div className="w-20 h-1 gradient-accent rounded-full mx-auto mb-10" />
          
          {/* Story */}
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            The Thompson family has been building businesses in our community for nearly 
            four decades. What started as a single construction company founded by our 
            father, <strong className="text-foreground">Robert Thompson</strong>, has grown 
            into two thriving enterprises led by siblings James and Sarah.
          </p>
          
          <p className="text-lg text-foreground/80 leading-relaxed mb-10">
            Though our companies serve different industries, we share the same core values: 
            integrity, quality, and genuine care for our clients and community.
          </p>
          
          {/* Quote */}
          <div className="bg-secondary rounded-2xl p-8 md:p-10">
            <p className="font-display text-2xl text-foreground italic mb-3">
              "Family first, always."
            </p>
            <p className="text-muted-foreground text-sm">
              — Robert Thompson, Founder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilySection;
