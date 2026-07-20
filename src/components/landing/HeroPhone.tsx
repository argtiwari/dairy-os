"use client";

import { motion } from "framer-motion";
import { Milk, TrendingUp } from "lucide-react";

import PhoneMockup from "./PhoneMockup";
import FloatingCard from "./FloatingCard";

export default function HeroPhone() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.25,
      }}
      className="relative flex w-full items-center justify-center py-10 lg:justify-end lg:py-0"
    >
      {/* Top Right Card */}

      <FloatingCard
        title="Today's Milk"
        value="315 L"
        icon={<Milk size={22} />}
        className="
          top-10
          -right-2

          lg:top-16
          lg:-right-8

          xl:top-20
          xl:-right-12
        "
        delay={0.3}
      />

      {/* Bottom Left Card */}

      <FloatingCard
        title="Today's Revenue"
        value="₹21,500"
        icon={<TrendingUp size={22} />}
        className="
          bottom-12
          -left-2

          lg:bottom-20
          lg:-left-8

          xl:bottom-24
          xl:-left-12
        "
        delay={0.6}
      />

      {/* Phone */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <PhoneMockup />
      </motion.div>
    </motion.div>
  );
}