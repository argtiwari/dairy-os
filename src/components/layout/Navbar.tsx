"use client";

import AppButton from "@/components/ui/AppButton";
import { Leaf } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  "Home",
  "Features",
  "Screenshots",
  "How It Works",
  "Pricing",
  "About",
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-6 z-50"
    >
      <div className="flex items-center justify-between rounded-3xl border border-gray-100 bg-white/90 px-8 py-5 shadow-lg backdrop-blur-xl">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 text-white">

            <Leaf size={24} />

          </div>

          <div>

            <h2 className="text-xl font-extrabold text-gray-900">
              DairyOS
            </h2>

            <p className="text-xs text-gray-500">
              Dairy Farm Management
            </p>

          </div>

        </Link>

        {/* Navigation */}

        <nav className="hidden gap-10 lg:flex">

          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-semibold text-gray-600 transition hover:text-green-600"
            >
              {item}
            </a>
          ))}

        </nav>

        {/* Buttons */}

        <div className="flex items-center gap-3">

          <AppButton
            variant="outline"
            className="h-11 rounded-xl px-6"
          >
            Login
          </AppButton>

          <AppButton className="h-11 rounded-xl px-6">
            Get Started
          </AppButton>

        </div>

      </div>
    </motion.header>
  );
}