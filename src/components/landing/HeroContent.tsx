    "use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import AppButton from "@/components/ui/AppButton";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-20 w-[46%] pt-20"
    >
      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-semibold text-green-700">
        <Sparkles size={16} />
        Built for Indian Dairy Farmers 🇮🇳
      </div>

      {/* Heading */}

      <h1 className="mt-8 text-7xl font-extrabold leading-[1.05] tracking-[-3px] text-gray-900">
        Manage Your Dairy Farm
        <br />

        <span className="text-green-600">
          in a Smarter Way
        </span>
      </h1>

      {/* Description */}

      <p className="mt-8 max-w-xl text-xl leading-9 text-gray-500">
        Track cows, milk production, health records,
        expenses, workers and reminders —
        all in one beautiful application.
      </p>

      {/* Buttons */}

      <div className="mt-12 flex gap-5">

        <AppButton className="h-14 px-8 text-base">
          Get Started
          <ArrowRight className="ml-2" size={18} />
        </AppButton>

        <AppButton
          variant="outline"
          className="h-14 px-8 text-base"
        >
          <Play className="mr-2" size={18} />
          Watch Demo
        </AppButton>

      </div>
    </motion.div>
  );
}