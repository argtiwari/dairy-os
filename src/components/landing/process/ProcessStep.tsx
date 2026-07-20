"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ProcessStepData } from "./processData";

interface ProcessStepProps {
  step: ProcessStepData;
  active: boolean;
  onClick: () => void;
}

export default function ProcessStep({
  step,
  active,
  onClick,
}: ProcessStepProps) {
  const Icon = step.icon;

  return (
    <motion.button
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`group relative flex w-full items-start gap-4 rounded-3xl border p-6 text-left transition-all duration-300 ${
        active
          ? "border-green-500 bg-green-50 shadow-xl shadow-green-100"
          : "border-gray-200 bg-white hover:border-green-300 hover:shadow-lg"
      }`}
    >
      {/* Step Number */}

      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all ${
          active
            ? "bg-green-600 text-white"
            : "bg-gray-100 text-gray-600"
        }`}
      >
        {step.id}
      </div>

      {/* Content */}

      <div className="flex-1">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all ${
              active
                ? "bg-green-600 text-white"
                : "bg-green-100 text-green-600"
            }`}
          >
            <Icon size={22} />
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900">
              {step.title}
            </h3>

            <p className="text-sm text-gray-500">
              Step {step.id}
            </p>
          </div>
        </div>

        <h4 className="mt-5 text-xl font-bold text-gray-900">
          {step.heading}
        </h4>

        <p className="mt-3 leading-7 text-gray-600">
          {step.description}
        </p>

        <div
          className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-all ${
            active
              ? "text-green-700"
              : "text-gray-500 group-hover:text-green-700"
          }`}
        >
          Learn More

          <ChevronRight
            size={16}
            className={`transition-transform ${
              active
                ? "translate-x-1"
                : "group-hover:translate-x-1"
            }`}
          />
        </div>
      </div>
    </motion.button>
  );
}