import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { ProjectsSectionAutoScroll, ServicesSectionGrid } from "@/components/sections";
import Footer from "@/components/sections/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection
          title="We turn bold ideas into products built to grow."
          subtitle="From early-stage startups to scaling enterprises, we partner with ambitious teams to craft web, mobile, and cross-platform experiences — handling everything from concept through to worldwide delivery."
          ctaText="Let's discuss your project"
          ctaHref="/services#contact-section"
        />
        <AboutSection />
        {/* <ProjectsSection /> */}
        <ProjectsSectionAutoScroll />

        <ServicesSectionGrid />
       
      </main>
      <Footer />
    </div>
  );
}
