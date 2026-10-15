
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0d10] text-white">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />

      <footer className="border-t border-white/10 px-5 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
        <p className="mt-2">
          Built with Next.js and Tailwind CSS.
        </p>
      </footer>
    </main >
  );
}
