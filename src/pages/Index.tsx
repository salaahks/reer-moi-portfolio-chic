import Navigation from "@/components/Navigation";
import PortfolioHero from "@/components/PortfolioHero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import MethodologySection from "@/components/MethodologySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div id="hero">
        <PortfolioHero />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="methodologies">
        <MethodologySection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
