const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center gradient-hero overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p 
            className="text-primary-foreground/70 text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            Family-Owned Since 1985
          </p>
          
          <h1 
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Two Companies,<br />
            <span className="italic">One Family Legacy</span>
          </h1>
          
          <p 
            className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up font-body"
            style={{ animationDelay: '0.4s' }}
          >
            We're the Thompson family, building trusted businesses across industries 
            with the same values our parents instilled in us — integrity, quality, 
            and genuine care for our clients.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <a 
              href="#companies" 
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-medium rounded-md hover:opacity-90 transition-all duration-300 shadow-glow"
            >
              Explore Our Companies
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-medium rounded-md hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
