"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
  className = "",
  delay = 0,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 30,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        delay,
        duration: 0.7,
        y: {
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.04,
        y: -10,
      }}
      className={`
        absolute
        w-56
        rounded-[28px]
        border
        border-white/60
        bg-white/80
        p-5
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,.12)]
        ${className}
      `}
    >
      {/* Header */}

      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-600">
          {icon}
        </div>

        <div className="rounded-full bg-green-50 px-2 py-1 text-[11px] font-semibold text-green-600">
          LIVE
        </div>
      </div>

      {/* Value */}

      <h3 className="mt-5 text-3xl font-bold tracking-tight text-gray-900">
        {value}
      </h3>

      {/* Title */}

      <p className="mt-1 text-sm text-gray-500">
        {title}
      </p>

      {/* Footer */}

      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-green-600">
            +12% Today
          </p>

          <p className="text-[11px] text-gray-400">
            Updated 2 min ago
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-600">
          <ArrowUpRight size={16} />
        </div>
      </div>
    </motion.div>
  );
}