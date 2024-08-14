import CTA from "@/components/ui/CTA";
import FAQs from "@/components/ui/FAQs";
import Features from "@/components/ui/Features";
import Hero from "@/components/ui/Hero";
import LogoTicker from "@/components/ui/LogoTicker";
import ProductShowcase from "@/components/ui/ProductShowcase";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQs />
      <CTA />
    </main>
  );
}
