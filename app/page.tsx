import Nav from "@/components/Nav";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-6xl flex-1">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
