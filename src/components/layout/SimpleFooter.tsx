const SimpleFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground py-10">
      <div className="container px-6">
        <div className="text-center">
          <p className="font-display text-xl text-background mb-3">
            Thompson<span className="text-accent">.</span> Family
          </p>
          <p className="text-background/50 text-sm mb-6">
            Two companies, one legacy of excellence.
          </p>
          <div className="flex items-center justify-center gap-6 text-background/40 text-sm">
            <a href="#thompson-construction" className="hover:text-background transition-colors">
              Construction
            </a>
            <span>•</span>
            <a href="#greenleaf-solutions" className="hover:text-background transition-colors">
              GreenLeaf
            </a>
            <span>•</span>
            <a href="#about" className="hover:text-background transition-colors">
              About
            </a>
          </div>
          <p className="text-background/30 text-xs mt-8">
            © {currentYear} Thompson Family Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
