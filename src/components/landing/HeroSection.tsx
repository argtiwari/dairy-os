import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroPhone from "./HeroPhone";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[42px] bg-gradient-to-br from-[#FFFDF9] via-white to-[#EEF9EF]">

      <HeroBackground />

      <div className="relative mx-auto flex min-h-[900px] max-w-[1400px] px-20">

        <HeroContent />

        <HeroPhone />

      </div>

    </section>
  );
}