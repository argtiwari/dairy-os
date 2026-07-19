"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  ShieldCheck,
  Clock3,
  TrendingUp,
  BadgeCheck,
  Star,
} from "lucide-react";

import AppButton from "@/components/ui/AppButton";

const features = [
  {
    icon: ShieldCheck,
    title: "Easy to Use",
    subtitle: "Farmer Friendly",
  },
  {
    icon: Clock3,
    title: "Save Time",
    subtitle: "Less Paperwork",
  },
  {
    icon: TrendingUp,
    title: "Increase Profit",
    subtitle: "Better Decisions",
  },
  {
    icon: BadgeCheck,
    title: "100% Secure",
    subtitle: "Cloud Backup",
  },
];

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-20 max-w-[620px] py-16"
    >
      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50/80 px-5 py-2 text-sm font-semibold text-green-700 backdrop-blur">
        <Sparkles size={16} />
        Built for Indian Dairy Farmers 🇮🇳
      </div>

      {/* Heading */}

      <h1 className="mt-8 text-6xl font-black leading-[0.95] tracking-[-0.05em] text-gray-900 xl:text-7xl">
        Manage Your
        <br />
        Dairy Farm
        <br />

        <span className="bg-gradient-to-r from-green-700 via-green-500 to-green-400 bg-clip-text text-transparent">
          in a Smarter Way
        </span>
      </h1>

      {/* Description */}

      <p className="mt-8 max-w-[560px] text-xl leading-8 text-gray-600">
        Track milk production, cattle health, breeding,
        finance, workers and daily operations from one
        beautiful dashboard built for modern dairy farms.
      </p>

      {/* CTA */}

      <div className="mt-10 flex flex-wrap gap-4">

        <AppButton className="group h-14 px-8 text-base shadow-lg shadow-green-500/20">
          Get Started

          <ArrowRight
            size={18}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
          />
        </AppButton>

        <AppButton
          variant="outline"
          className="group h-14 border-gray-200 bg-white px-8 text-base hover:bg-gray-50"
        >
          <Play
            size={18}
            className="mr-2 transition-transform duration-300 group-hover:scale-110"
          />

          Watch Demo
        </AppButton>

      </div>

      {/* Feature Cards */}

      <div className="mt-12 grid grid-cols-2 gap-4">

        {features.map((feature) => (
          <motion.div
            whileHover={{
              y: -6,
            }}
            transition={{
              duration: 0.2,
            }}
            key={feature.title}
            className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-xl"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-600">
              <feature.icon size={22} />
            </div>

            <h3 className="font-semibold text-gray-900">
              {feature.title}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {feature.subtitle}
            </p>
          </motion.div>
        ))}

      </div>

      {/* Rating */}

      <div className="mt-10 flex items-center gap-4">

        <div className="flex -space-x-3">

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-green-100 font-semibold text-green-700"
            >
              {item}
            </div>
          ))}

        </div>

        <div>

          <div className="flex text-yellow-400">

            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={18}
                fill="currentColor"
              />
            ))}

          </div>

          <p className="mt-1 text-sm text-gray-500">
            <span className="font-semibold text-gray-900">
              4.9/5
            </span>{" "}
            from 1,200+ dairy farmers
          </p>

        </div>

      </div>
    </motion.div>
  );
}