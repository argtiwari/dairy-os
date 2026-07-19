export default function HeroBackground() {
  return (
    <>
      {/* Left Glow */}

      <div className="absolute left-[-180px] top-20 h-[520px] w-[520px] rounded-full bg-green-200/40 blur-[140px]" />

      {/* Right Glow */}

      <div className="absolute right-[-180px] top-10 h-[520px] w-[520px] rounded-full bg-yellow-100/50 blur-[140px]" />

      {/* Bottom Wave */}

      <div className="absolute bottom-0 left-0 h-44 w-full rounded-t-[100%] bg-white" />
    </>
  );
}