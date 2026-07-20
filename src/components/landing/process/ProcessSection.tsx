"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import ProcessLaptop from "./ProcessLaptop";
import ProcessStep from "./ProcessStep";
import { processSteps } from "./processData";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-green-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            How DairyOS Works
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-gray-900 md:text-6xl">
            Manage Your Dairy
            <span className="block text-green-600">
              In Four Simple Steps
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything from farm setup to milk production and profit tracking
            is streamlined into one intuitive platform.
          </p>
        </motion.div>

        {/* Laptop */}

        <div className="mt-20">
          <ProcessLaptop step={processSteps[activeStep]} />
        </div>

        {/* Steps */}

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.id}
              step={step}
              active={activeStep === index}
              onClick={() => setActiveStep(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}