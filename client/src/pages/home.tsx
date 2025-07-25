import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import CodeEditor from "@/components/CodeEditor";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <FloatingElements />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <CodeEditor />
      <PerformanceMetrics />
      <Projects />
      <Experience />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}
