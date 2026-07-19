"use client";

import { motion } from "framer-motion";

export default function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80, rotate: 6 }}
      animate={{ opacity: 1, x: 0, rotate: -6 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Glow */}

      <div className="absolute -inset-8 rounded-full bg-green-200/40 blur-3xl" />

      {/* Phone */}

      <div className="relative h-[720px] w-[360px] overflow-hidden rounded-[58px] border-[10px] border-neutral-900 bg-white shadow-[0_40px_120px_rgba(0,0,0,.25)]">

        {/* Dynamic Island */}

        <div className="absolute left-1/2 top-3 z-20 h-8 w-36 -translate-x-1/2 rounded-full bg-black" />

        {/* Screen */}

        <div className="h-full bg-[#F8FAF7] p-5 pt-14">

          <p className="text-sm text-gray-500">
            Good Morning 👋
          </p>

          <h2 className="mt-1 text-3xl font-bold">
            Anurag Farm
          </h2>

        </div>

      </div>

    </motion.div>
  );
}