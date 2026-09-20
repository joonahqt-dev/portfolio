import HeroSection from "./components/portfolio/HeroSection";
import MarqueeSection from "./components/portfolio/MarqueeSection";
import AboutSection from "./components/portfolio/AboutSection";
import ServicesSection from "./components/portfolio/ServicesSection";
import ProjectsSection from "./components/portfolio/ProjectsSection";
import ContactSection from "./components/portfolio/ContactSection";

export default function App() {
  return (
    <main className="bg-[#0C0C0C] overflow-x-clip">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}