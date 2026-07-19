"use client";

import { motion } from "framer-motion";
import PhoneDashboard from "./PhoneDashboard";

export default function PhoneMockup() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
        rotate: 3,
      }}
      animate={{
        opacity: 1,
        x: 0,
        rotate: -8,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.8 },
        x: { duration: 0.8 },
        rotate: {
          duration: 0.8,
        },
        y: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="relative"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 -z-10 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/15 blur-[120px]" />

      {/* Phone */}

      <div
        className="
        relative
        h-[790px]
        w-[395px]
        overflow-hidden
        rounded-[58px]
        border-[10px]
        border-neutral-900
        bg-neutral-900

        shadow-[0_30px_60px_rgba(0,0,0,.15),0_90px_180px_rgba(22,163,74,.18)]
      "
      >
        {/* Glass Reflection */}

        <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden rounded-[48px]">
          <div className="absolute -left-16 top-0 h-full w-20 rotate-12 bg-white/10 blur-2xl" />
        </div>

        {/* Dynamic Island */}

        <div className="absolute left-1/2 top-3 z-40 h-7 w-32 -translate-x-1/2 rounded-full bg-black shadow-inner" />

        {/* Speaker */}

        <div className="absolute left-1/2 top-5 z-50 h-1 w-14 -translate-x-1/2 rounded-full bg-neutral-800" />

        {/* Screen */}

        <div className="absolute inset-[4px] overflow-hidden rounded-[48px] bg-[#F7FAF7]">
          {/* Status Bar */}

          <div className="flex items-center justify-between px-7 pt-4 text-[11px] font-semibold text-gray-700">
            <span>9:41</span>

            <div className="flex items-center gap-1">
              <span>📶</span>
              <span>📡</span>
              <span>🔋</span>
            </div>
          </div>

          {/* Screen Content */}

          <div className="px-5 pb-6 pt-4">
            <PhoneDashboard />
          </div>
        </div>

        {/* Metallic Edge Highlight */}

        <div className="pointer-events-none absolute inset-0 rounded-[58px] border border-white/10" />
      </div>
    </motion.div>
  );
}