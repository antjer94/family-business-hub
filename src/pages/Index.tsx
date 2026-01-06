import SplitHeroSection from "@/components/sections/SplitHeroSection";
import CompanyASection from "@/components/sections/CompanyASection";
import CompanyBSection from "@/components/sections/CompanyBSection";
import FamilySection from "@/components/sections/FamilySection";
import SimpleFooter from "@/components/layout/SimpleFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <SplitHeroSection />
        <CompanyASection />
        <CompanyBSection />
        <FamilySection />
      </main>
      <SimpleFooter />
    </div>
  );
};

export default Index;
