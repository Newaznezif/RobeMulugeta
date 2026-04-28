import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactMetrics from "@/components/ImpactMetrics";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import GlobalPrograms from "@/components/GlobalPrograms";
import LeadershipGrid from "@/components/LeadershipGrid";

import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIChatAssistant from "@/components/AIChatAssistant";
import ThemeCustomizer from "@/components/ThemeCustomizer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ImpactMetrics />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <GlobalPrograms />
      <LeadershipGrid />

      <Blog />
      <Contact />
      <Footer />
      <AIChatAssistant />
      <ThemeCustomizer />
    </main>
  );
}
