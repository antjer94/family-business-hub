import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CompanySection from "@/components/sections/CompanySection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        
        <div id="companies">
          <CompanySection
            id="company-a"
            name="Thompson Construction"
            tagline="Building Tomorrow, Today"
            description="For over 35 years, Thompson Construction has been the trusted name in residential and commercial building. James Thompson leads our team of skilled craftsmen in delivering quality construction projects that stand the test of time."
            services={[
              "Custom Homes",
              "Commercial Buildings",
              "Renovations",
              "Project Management",
              "Design-Build",
              "Green Building"
            ]}
            variant="a"
            icon="building"
          />
          
          <CompanySection
            id="company-b"
            name="GreenLeaf Solutions"
            tagline="Sustainable Futures Start Here"
            description="Founded by Sarah Thompson in 1992, GreenLeaf Solutions provides innovative environmental consulting and sustainable business solutions. We help organizations reduce their environmental footprint while improving their bottom line."
            services={[
              "Environmental Audits",
              "Sustainability Planning",
              "Carbon Consulting",
              "Green Certification",
              "Waste Management",
              "Energy Efficiency"
            ]}
            variant="b"
            icon="leaf"
          />
        </div>
        
        <AboutSection />
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
