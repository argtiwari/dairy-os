"use client";

import { motion } from "framer-motion";
import {
  Bell,
  Search,
  TrendingUp,
  Users,
  Milk,
  Wallet,
} from "lucide-react";

import { ProcessStepData } from "./processData";

interface ProcessLaptopProps {
  step: ProcessStepData;
}

export default function ProcessLaptop({
  step,
}: ProcessLaptopProps) {
  return (
    <motion.div
      key={step.id}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
      }}
      className="mx-auto w-full max-w-5xl"
    >
      {/* Laptop */}

      <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-neutral-900 shadow-[0_40px_120px_rgba(0,0,0,.18)]">

        {/* Top Bar */}

        <div className="flex h-14 items-center justify-between border-b border-white/10 px-6">

          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <div className="flex items-center gap-3 rounded-full bg-neutral-800 px-4 py-2 text-xs text-gray-400">
            <Search size={14} />
            dairyos.app/dashboard
          </div>

          <Bell
            size={18}
            className="text-gray-400"
          />

        </div>

        {/* Screen */}

        <div className="bg-[#F8FBF8] p-8">

          {/* Header */}

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm font-medium text-gray-500">
                DairyOS Dashboard
              </p>

              <h2 className="mt-1 text-3xl font-bold text-gray-900">
                {step.preview.title}
              </h2>

            </div>

            <div
              className={`rounded-3xl bg-gradient-to-br ${step.preview.color} px-8 py-5 text-white shadow-xl`}
            >

              <p className="text-sm opacity-90">
                {step.preview.subtitle}
              </p>

              <h1 className="mt-2 text-4xl font-black">
                {step.preview.value}
              </h1>

            </div>

          </div>

          {/* Analytics */}

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-6 shadow-sm">

              <Milk className="text-emerald-600" />

              <h3 className="mt-5 text-3xl font-bold">
                315L
              </h3>

              <p className="mt-2 text-gray-500">
                Milk Collection
              </p>

            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">

              <Wallet className="text-blue-600" />

              <h3 className="mt-5 text-3xl font-bold">
                ₹21.5K
              </h3>

              <p className="mt-2 text-gray-500">
                Revenue
              </p>

            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">

              <Users className="text-violet-600" />

              <h3 className="mt-5 text-3xl font-bold">
                48
              </h3>

              <p className="mt-2 text-gray-500">
                Animals
              </p>

            </div>

          </div>

          {/* Chart */}

          <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  Weekly Performance
                </p>

                <h3 className="mt-1 text-xl font-bold">
                  Farm Analytics
                </h3>

              </div>

              <TrendingUp className="text-green-600" />

            </div>

            <div className="mt-8 flex h-48 items-end justify-between gap-3">

              {[45, 70, 62, 88, 75, 95, 82].map(
                (height, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                    }}
                    className="flex-1 rounded-t-full bg-gradient-to-t from-green-600 to-emerald-400"
                  />
                )
              )}

            </div>

          </div>

        </div>

      </div>

      {/* Laptop Base */}

      <div className="mx-auto h-4 w-[92%] rounded-b-full bg-gradient-to-b from-gray-300 to-gray-500" />
    </motion.div>
  );
}