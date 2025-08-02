import About from "@/components/About";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Expertise />
      <Career />
      <Contact />
      <Navbar />
    </main>
  );
}

export const config = {
  unstable_runtimeJS: false,
};
