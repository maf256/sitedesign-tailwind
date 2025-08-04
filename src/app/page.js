import About from "@/components/About";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex mx-auto w-fit min-h-screen">
      <div className="w-[800px] ">
        <Hero />
        <About />
        <Expertise />
        <Career />
        <Contact />
      </div>
      <div className="w-14">
        <Navbar />
      </div>
    </main>
  );
}
