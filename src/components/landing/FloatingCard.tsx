"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  className?: string;
  delay?: number;
}

export default function FloatingCard({
  title,
  value,
  icon,
  className,
  delay = 0,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        duration: 0.8,
        delay,
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className={`absolute w-48 rounded-3xl border border-white/70 bg-white/90 p-5 shadow-2xl backdrop-blur-xl ${className}`}
    >
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm text-gray-500">{title}</p>

        <div className="rounded-xl bg-green-100 p-2 text-green-600">
          {icon}
        </div>
      </div>

      <h3 className="text-3xl font-bold text-gray-900">
        {value}
      </h3>
    </motion.div>
  );
}