import AboutSection from "@/sections/About";
import CtaSection from "@/sections/CtaSection";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import HeroSection from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
