import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Features from "../Component/Features";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}