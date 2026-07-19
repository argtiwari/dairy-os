"use client";

import { motion } from "framer-motion";
import AppButton from "@/components/ui/AppButton";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="grid min-h-[85vh] grid-cols-2 items-center gap-16">

      {/* LEFT */}

      <div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-semibold text-green-700"
        >
          <Sparkles size={16} />
          Built for Indian Dairy Farmers 🇮🇳
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .15 }}
          className="max-w-xl text-6xl font-extrabold leading-[1.1]"
        >
          Manage Your Dairy Farm
          <br />

          <span className="text-green-600">
            in a Smarter Way
          </span>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
          className="mt-8 max-w-lg text-xl leading-9 text-gray-500"
        >
          Track cows, milk production, health, expenses,
          workers and reminders from one beautiful app.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .45 }}
          className="mt-10 flex gap-5"
        >

          <AppButton className="px-8">
            Get Started
            <ArrowRight className="ml-2" size={18} />
          </AppButton>

          <AppButton
            variant="outline"
            className="px-8"
          >
            <Play size={18} className="mr-2" />
            Watch Demo
          </AppButton>

        </motion.div>

      </div>

      {/* RIGHT */}

      <div className="flex items-center justify-center">

        <div className="flex h-[700px] w-[360px] items-center justify-center rounded-[55px] border-8 border-gray-900 bg-gradient-to-b from-green-100 to-white text-xl font-bold shadow-2xl">

          PHONE MOCKUP

        </div>

      </div>

    </section>
  );
}