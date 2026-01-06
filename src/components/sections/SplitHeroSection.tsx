import { ArrowRight } from "lucide-react";

const SplitHeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Company A */}
      <a 
        href="#thompson-construction"
        className="group relative flex-1 min-h-[50vh] lg:min-h-screen flex items-center justify-center bg-company-a overflow-hidden transition-all duration-500 hover:flex-[1.1]"
      >
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-8 py-16 max-w-md">
          <p className="text-primary-foreground/60 text-xs tracking-[0.3em] uppercase mb-4">
            Est. 1985
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4 leading-tight">
            Thompson<br />Construction
          </h2>
          <p className="text-primary-foreground/70 mb-8 leading-relaxed">
            Building dreams into reality for over 35 years
          </p>
          <div className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-4 transition-all duration-300">
            Explore
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
      </a>
      
      {/* Divider */}
      <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center shadow-card">
          <span className="font-display text-foreground text-lg">&</span>
        </div>
      </div>
      
      {/* Mobile Divider */}
      <div className="lg:hidden flex items-center justify-center py-4 bg-background">
        <div className="w-12 h-12 rounded-full bg-background border-2 border-border flex items-center justify-center">
          <span className="font-display text-foreground text-sm">&</span>
        </div>
      </div>
      
      {/* Right Side - Company B */}
      <a 
        href="#greenleaf-solutions"
        className="group relative flex-1 min-h-[50vh] lg:min-h-screen flex items-center justify-center bg-company-b overflow-hidden transition-all duration-500 hover:flex-[1.1]"
      >
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-8 py-16 max-w-md">
          <p className="text-primary-foreground/60 text-xs tracking-[0.3em] uppercase mb-4">
            Est. 1992
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4 leading-tight">
            GreenLeaf<br />Solutions
          </h2>
          <p className="text-primary-foreground/70 mb-8 leading-relaxed">
            Sustainable futures start here
          </p>
          <div className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-4 transition-all duration-300">
            Explore
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
      </a>
      
      {/* Family Badge - Top Center */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30">
        <div className="bg-background/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-soft">
          <p className="font-display text-foreground text-sm md:text-base">
            Thompson<span className="text-accent">.</span> Family
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-background/60 animate-bounce">
          <span className="text-xs tracking-wider">Scroll to explore</span>
          <div className="w-px h-8 bg-background/40" />
        </div>
      </div>
    </section>
  );
};

export default SplitHeroSection;
