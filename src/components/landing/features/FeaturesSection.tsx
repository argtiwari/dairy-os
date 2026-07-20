"use client";

import { motion } from "framer-motion";
import {
  Beef,
  Milk,
  HeartPulse,
  Wallet,
  Users,
  BarChart3,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Animal Management",
    description:
      "Maintain complete cattle profiles, breeding history, vaccination records, pregnancy tracking and lifecycle management from one place.",
    icon: Beef,
    gradient: "from-emerald-500 to-green-600",
    featured: true,
  },
  {
    title: "Milk Collection",
    description:
      "Record daily milk production, monitor collection trends and analyze performance instantly.",
    icon: Milk,
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    title: "Health Tracking",
    description:
      "Never miss vaccinations, treatments or health checkups with smart reminders.",
    icon: HeartPulse,
    gradient: "from-rose-500 to-pink-500",
  },
  {
    title: "Finance",
    description:
      "Track income, expenses, profits and payments with clear financial insights.",
    icon: Wallet,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Worker Management",
    description:
      "Assign daily work, monitor attendance and manage staff efficiently across your farm.",
    icon: Users,
    gradient: "from-violet-500 to-indigo-500",
    featured: true,
  },
  {
    title: "Reports & Analytics",
    description:
      "Generate smart reports and discover trends that help increase productivity and profit.",
    icon: BarChart3,
    gradient: "from-teal-500 to-emerald-500",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#dcfce7,transparent_35%),radial-gradient(circle_at_bottom_left,#bbf7d0,transparent_30%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.03)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            Powerful Features
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
            Everything You Need
            <br />
            to Run a Modern Dairy Farm
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            DairyOS combines animal management, milk collection,
            health monitoring, finance and analytics into one
            modern platform designed specifically for dairy farms.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="grid gap-6 lg:grid-cols-3 lg:auto-rows-[320px]">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={feature.featured ? "lg:row-span-2" : ""}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                gradient={feature.gradient}
                featured={feature.featured}
                delay={index * 0.08}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}