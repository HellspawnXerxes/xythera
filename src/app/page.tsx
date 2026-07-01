import Hero from "@/components/Hero";
import About from "@/components/About";
import ScrollTicker from "@/components/ScrollTicker";
import Capabilities from "@/components/Capabilities";
import TechStack from "@/components/TechStack";
import Vision from "@/components/Vision";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ScrollTicker />
      <Capabilities />
      <TechStack />
      <Vision />
      <CTA />
    </>
  );
}
