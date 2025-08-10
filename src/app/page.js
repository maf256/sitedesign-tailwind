import About from "@/components/About";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row mx-auto w-full max-w-[900px] min-h-screen px-4 lg:px-0">
      <div className="w-full lg:w-[800px]">
        <Hero />
        <About />
        <Expertise />
        <Career />
        <Contact />
      </div>

      <div className="hidden lg:block w-full lg:w-14 lg:sticky lg:top-0 lg:h-screen">
        <Navbar />
      </div>
    </main>
  );
}
