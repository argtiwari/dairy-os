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
    title: "Farmer Friendly",
    subtitle: "Simple & Easy to Use",
  },
  {
    icon: Clock3,
    title: "Save Valuable Time",
    subtitle: "Automate Daily Tasks",
  },
  {
    icon: TrendingUp,
    title: "Increase Profit",
    subtitle: "Data-Driven Decisions",
  },
  {
    icon: BadgeCheck,
    title: "100% Secure",
    subtitle: "Cloud Backup Included",
  },
];

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-20 flex w-full max-w-[600px] flex-col py-6 lg:py-8"
    >
      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex w-fit items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-semibold text-green-700 shadow-sm backdrop-blur-md"
      >
        <Sparkles size={15} />
        Built for Modern Dairy Farmers 🇮🇳
      </motion.div>

      {/* Heading */}

      <h1 className="mt-7 max-w-[580px] text-[44px] font-black leading-[0.95] tracking-[-0.05em] text-gray-900 sm:text-[52px] lg:text-[60px] xl:text-[72px]">
        Manage Your
        <br />
        Dairy Farm
        <br />

        <span className="bg-gradient-to-r from-green-700 via-green-500 to-emerald-400 bg-clip-text text-transparent">
          Smarter & Faster
        </span>
      </h1>

      {/* Description */}

      <p className="mt-7 max-w-[520px] text-[17px] leading-8 text-gray-600 lg:text-lg">
        Everything your dairy farm needs in one beautiful dashboard.
        Track milk production, cattle health, breeding, finance,
        workers and daily operations with confidence.
      </p>

      {/* CTA */}

      <div className="mt-9 flex flex-wrap items-center gap-4">
        <AppButton className="group h-12 px-7 text-base shadow-xl shadow-green-500/20 transition-all duration-300 hover:scale-[1.02]">
          Get Started

          <ArrowRight
            size={18}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
          />
        </AppButton>

        <AppButton
          variant="outline"
          className="group h-12 border-gray-200 bg-white px-7 text-base transition-all duration-300 hover:bg-gray-50 hover:shadow-lg"
        >
          <Play
            size={18}
            className="mr-2 transition-transform duration-300 group-hover:scale-110"
          />

          Watch Demo
        </AppButton>
      </div>

      {/* Feature Cards */}

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 + index * 0.1,
            }}
            whileHover={{
              y: -6,
            }}
            className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-green-100 hover:shadow-xl"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-600">
              <feature.icon size={22} />
            </div>

            <h3 className="text-base font-semibold text-gray-900">
              {feature.title}
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-500">
              {feature.subtitle}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Rating */}

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <div className="flex -space-x-3">
          {["A", "R", "S", "K"].map((item) => (
            <div
              key={item}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-green-100 to-green-200 font-semibold text-green-700 shadow-md"
            >
              {item}
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center gap-1 text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={17}
                fill="currentColor"
              />
            ))}
          </div>

          <p className="mt-1 text-sm text-gray-500">
            <span className="font-semibold text-gray-900">
              4.9/5 Rating
            </span>{" "}
            trusted by <strong>1,200+</strong> dairy farmers.
          </p>
        </div>
      </div>
    </motion.div>
  );
}