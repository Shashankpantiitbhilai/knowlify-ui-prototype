import { Hero, Features, Demo, API, Pricing, Footer, Navbar } from "@/components";

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
