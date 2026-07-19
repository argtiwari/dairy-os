import Container from "@/components/common/Container";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroPhone from "./HeroPhone";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FBFCF8]">
  <HeroBackground />

  <Container className="relative flex min-h-[calc(100vh-84px)] items-center justify-between">
    <HeroContent />
    <HeroPhone />
  </Container>
</section>
  );
}