import { Building2, Leaf } from "lucide-react";

interface CompanySectionProps {
  id: string;
  name: string;
  tagline: string;
  description: string;
  services: string[];
  variant: 'a' | 'b';
  icon: 'building' | 'leaf';
}

const CompanySection = ({ id, name, tagline, description, services, variant, icon }: CompanySectionProps) => {
  const isVariantA = variant === 'a';
  
  return (
    <section 
      id={id}
      className={`py-24 md:py-32 ${isVariantA ? 'bg-company-a-light' : 'bg-company-b-light'}`}
    >
      <div className="container px-6">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isVariantA ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className={`${!isVariantA ? 'lg:order-2' : ''}`}>
            <div 
              className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-6 ${
                isVariantA ? 'bg-company-a text-primary-foreground' : 'bg-company-b text-primary-foreground'
              }`}
            >
              {icon === 'building' ? <Building2 className="w-6 h-6" /> : <Leaf className="w-6 h-6" />}
            </div>
            
            <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl mb-4 ${
              isVariantA ? 'text-company-a' : 'text-company-b'
            }`}>
              {name}
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 italic">
              {tagline}
            </p>
            
            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              {description}
            </p>
            
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Our Services
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-2 text-foreground/80"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      isVariantA ? 'bg-company-a' : 'bg-company-b'
                    }`} />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Visual */}
          <div className={`${!isVariantA ? 'lg:order-1' : ''}`}>
            <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card ${
              isVariantA ? 'bg-company-a/10' : 'bg-company-b/10'
            }`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`text-8xl opacity-20 ${
                  isVariantA ? 'text-company-a' : 'text-company-b'
                }`}>
                  {icon === 'building' ? <Building2 className="w-32 h-32" /> : <Leaf className="w-32 h-32" />}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
                <p className="text-primary-foreground font-display text-xl">
                  Est. {isVariantA ? '1985' : '1992'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
