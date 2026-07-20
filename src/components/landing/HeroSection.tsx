import Container from "@/components/common/Container";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroPhone from "./HeroPhone";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FBFCF8]">
      <HeroBackground />

      <Container
        className="
          relative
          grid
          min-h-[calc(100vh-84px)]
          items-center
          gap-14
          py-10
          lg:grid-cols-2
          xl:gap-20
        "
      >
        <HeroContent />

        <HeroPhone />
      </Container>
    </section>
  );
}