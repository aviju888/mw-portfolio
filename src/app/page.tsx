import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import ProjectsPapers from "@/components/ProjectsPapers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Research />
      <Education />
      <Skills />
      <ProjectsPapers />
      <Contact />
      <Footer />
    </main>
  );
}
