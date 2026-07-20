"use client";

import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  featured?: boolean;
  delay?: number;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  gradient,
  featured = false,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.5,
        delay,
      }}
      whileHover={{
        y: -8,
      }}
      className={`
group
relative
overflow-hidden
rounded-[32px]
border
border-gray-200/70
bg-white/80
backdrop-blur-xl
transition-all
duration-300

hover:border-green-300
hover:shadow-[0_25px_70px_rgba(22,163,74,.12)]

${
  featured
    ? "min-h-[340px] p-8"
    : "min-h-[260px] p-7"
}
`}
    >
      {/* Glow */}

      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-green-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon */}

      <motion.div
        whileHover={{
          rotate: -8,
          scale: 1.08,
        }}
        className={`
relative
flex
items-center
justify-center
rounded-3xl
bg-gradient-to-br
${gradient}
text-white
shadow-lg

${
  featured
    ? "h-16 w-16"
    : "h-14 w-14"
}
`}
      >
        <Icon size={30} />
      </motion.div>

      {/* Content */}

      <div className="relative mt-7">

        <h3
          className={`
font-bold
text-gray-900

${
  featured
    ? "text-2xl"
    : "text-xl"
}
`}
        >
          {title}
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          {description}
        </p>

      </div>

      {/* Learn More */}

      <div className="absolute bottom-8 left-8">

        <button className="group/link inline-flex items-center text-sm font-semibold text-green-700">

          Learn More

          <ArrowRight
            size={16}
            className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1"
          />

        </button>

      </div>
    </motion.div>
  );
}