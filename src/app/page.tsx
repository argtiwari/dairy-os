import AppShell from "@/components/layout/AppShell";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/landing/HeroSection";

export default function Home() {
  return (
    <AppShell>
      <Navbar />
      <HeroSection />
    </AppShell>
  );
}