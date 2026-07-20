"use client";

import { motion } from "framer-motion";
import {
  BatteryFull,
  Signal,
  Wifi,
} from "lucide-react";

import PhoneDashboard from "./PhoneDashboard";

export default function PhoneMockup() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 70,
        rotate: 2,
      }}
      animate={{
        opacity: 1,
        x: 0,
        rotate: -5,
      }}
      transition={{
        duration: 0.8,
      }}
      whileHover={{
        rotate: -3,
        scale: 1.015,
      }}
      className="relative"
    >
      {/* Animated Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.3, 0.18],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 -z-20 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400 blur-[140px]"
      />

      {/* Secondary Glow */}

      <div className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/20 blur-[90px]" />

      {/* Phone */}

      <div
        className="
        relative
        h-[690px]
        w-[340px]

        lg:h-[640px]
        lg:w-[315px]

        xl:h-[720px]
        xl:w-[355px]

        overflow-hidden
        rounded-[60px]

        border-[10px]
        border-neutral-900

        bg-neutral-900

        shadow-[0_35px_80px_rgba(0,0,0,.18),0_70px_160px_rgba(22,163,74,.18)]
      "
      >
        {/* Frame Highlight */}

        <div className="pointer-events-none absolute inset-0 rounded-[60px] border border-white/10" />

        {/* Reflection */}

        <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden rounded-[50px]">
          <motion.div
            animate={{
              x: [-120, 380],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 h-full w-16 rotate-[20deg] bg-white/10 blur-2xl"
          />
        </div>

        {/* Dynamic Island */}

        <div className="absolute left-1/2 top-3 z-40 h-7 w-32 -translate-x-1/2 rounded-full bg-black shadow-inner" />

        {/* Screen */}

        <div className="absolute inset-[4px] overflow-hidden rounded-[50px] bg-[#F8FCF8]">
          {/* Status Bar */}

          <div className="flex items-center justify-between px-7 pt-4 text-[11px] font-semibold text-gray-700">
            <span>9:41</span>

            <div className="flex items-center gap-1.5">
              <Signal size={13} strokeWidth={2.4} />
              <Wifi size={13} strokeWidth={2.4} />
              <BatteryFull size={15} strokeWidth={2.4} />
            </div>
          </div>

          {/* Dashboard */}

          <div className="h-full px-5 pb-5 pt-4">
            <PhoneDashboard />
          </div>
        </div>
      </div>
    </motion.div>
  );
}