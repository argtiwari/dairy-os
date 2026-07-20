"use client";

import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      {/* Main Green Glow */}

      <div className="absolute left-[-220px] top-[-120px] h-[620px] w-[620px] rounded-full bg-green-300/20 blur-[160px]" />

      {/* Right Warm Glow */}

      <div className="absolute right-[-180px] top-10 h-[520px] w-[520px] rounded-full bg-emerald-200/20 blur-[140px]" />

      {/* Phone Glow */}

      <div className="absolute right-[10%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-green-400/15 blur-[120px]" />

      {/* Decorative Blurred Circles */}

      <div className="absolute left-[18%] top-[18%] h-20 w-20 rounded-full bg-green-200/40 blur-2xl" />

      <div className="absolute right-[28%] bottom-[18%] h-24 w-24 rounded-full bg-green-300/30 blur-3xl" />

      {/* Farm Image */}

      <div className="absolute bottom-0 right-0 h-[330px] w-[600px] overflow-hidden rounded-tl-[120px] opacity-80">

        <Image
          src="/images/farm-bg.jpg"
          alt="Dairy Farm"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Blend Overlay */}

        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-[#FBFCF8]" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#FBFCF8] via-transparent to-transparent" />

      </div>

      {/* Top Fade */}

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/60 to-transparent" />

      {/* Bottom Fade */}

      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#FBFCF8] to-transparent" />

      {/* Subtle Grid Pattern */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #16a34a 1px, transparent 1px),
            linear-gradient(to bottom, #16a34a 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </>
  );
}