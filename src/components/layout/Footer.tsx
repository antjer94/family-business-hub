const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground py-12">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-xl text-background mb-2">
              Thompson<span className="text-accent">.</span>
            </p>
            <p className="text-background/60 text-sm">
              Two companies, one family legacy.
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#companies" className="text-background/60 text-sm hover:text-background transition-colors">
              Companies
            </a>
            <a href="#about" className="text-background/60 text-sm hover:text-background transition-colors">
              About
            </a>
            <a href="#contact" className="text-background/60 text-sm hover:text-background transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-background/10">
          <p className="text-center text-background/40 text-sm">
            © {currentYear} Thompson Family Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
