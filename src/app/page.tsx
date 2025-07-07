import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Demo } from "@/components/Demo";
import { API } from "@/components/API";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Demo />
      <API />
      <Pricing />
      <Footer />
    </div>
  );
}
