import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="gradient1">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}