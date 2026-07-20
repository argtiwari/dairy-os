import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/features/FeaturesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
       <FeaturesSection />
    </>
  );
}