const SimpleFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground py-10">
      <div className="container px-6">
        <div className="text-center">
          <p className="font-display text-xl text-background mb-3">
            Jerntved<span className="text-accent">.</span> Family
          </p>
          <p className="text-background/50 text-sm mb-6">
            Multiple visions, one commitment to excellence.
          </p>
          <div className="flex items-center justify-center gap-6 text-background/40 text-sm">
            <a href="#jerntved-consulting" className="hover:text-background transition-colors">
              Jerntved Consulting
            </a>
            <span>•</span>
            <a href="#har-dar-doktorn" className="hover:text-background transition-colors">
              Här&där-Doktorn
            </a>
            <span>•</span>
            <a href="#about" className="hover:text-background transition-colors">
              About
            </a>
          </div>
          <p className="text-background/30 text-xs mt-8">
            © {currentYear} Jerntved Family. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
