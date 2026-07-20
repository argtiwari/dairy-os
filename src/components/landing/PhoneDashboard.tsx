"use client";

import { motion } from "framer-motion";
import {
  Bell,
  ChevronRight,
  Clock3,
  Droplets,
  Heart,
  Milk,
  MoreHorizontal,
  Sun,
  TrendingUp,
  TriangleAlert,
  Wallet,
} from "lucide-react";

const stats = [
  {
    title: "Milk",
    value: "315L",
    icon: Milk,
    color: "from-emerald-500 to-green-600",
    subtitle: "+12L Today",
  },
  {
    title: "Revenue",
    value: "₹21.5K",
    icon: Wallet,
    color: "from-blue-500 to-cyan-500",
    subtitle: "+8.2%",
  },
  {
    title: "Healthy",
    value: "48",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
    subtitle: "2 Need Care",
  },
  {
    title: "Pending",
    value: "05",
    icon: TriangleAlert,
    color: "from-orange-400 to-orange-600",
    subtitle: "Today's Tasks",
  },
];

export default function PhoneDashboard() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-[#f6fbf7]">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#bbf7d0,transparent_45%),radial-gradient(circle_at_bottom_left,#dcfce7,transparent_40%)]" />

      <div className="relative flex h-full flex-col px-5 pt-5 pb-6">
        {/* ---------------- HEADER ---------------- */}

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-700 text-white shadow-lg shadow-green-300">
              🌿
            </div>

            <div>
              <div className="flex items-center gap-1 text-[11px] text-gray-500">
                <Sun className="h-3.5 w-3.5 text-yellow-500" />
                Good Morning
              </div>

              <h2 className="text-[18px] font-bold text-gray-900">
                Anurag Farm
              </h2>
            </div>
          </div>

          <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-md">
            <Bell className="h-5 w-5 text-gray-700" />

            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500" />
          </button>
        </motion.div>

        {/* ---------------- OVERVIEW ---------------- */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .2 }}
          className="mt-7"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                Today's Overview
              </p>

              <h3 className="mt-1 text-2xl font-bold text-gray-900">
                Dairy Dashboard
              </h3>
            </div>

            <button className="rounded-full bg-white p-2 shadow">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        {/* ---------------- BIG SUMMARY ---------------- */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .3 }}
          className="mt-5 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-green-600 to-green-700 p-5 text-white shadow-xl"
        >
          <div className="flex justify-between">
            <div>
              <p className="text-xs text-green-100">
                Total Milk Collection
              </p>

              <h1 className="mt-2 text-4xl font-extrabold">
                315L
              </h1>

              <div className="mt-2 flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4" />
                +12L from yesterday
              </div>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20 backdrop-blur">
              <Droplets className="h-8 w-8" />
            </div>
          </div>

          <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/20">
            <div className="h-full w-[82%] rounded-full bg-white" />
          </div>
        </motion.div>

        {/* ---------------- STATS ---------------- */}

        <div className="mt-5 grid grid-cols-2 gap-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: .45 + index * .08,
                }}
                whileHover={{
                  y: -3,
                }}
                className="rounded-3xl bg-white p-4 shadow-md"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-4 text-[26px] font-bold leading-none text-gray-900">
                  {item.value}
                </h3>

                <p className="mt-1 text-sm font-semibold text-gray-700">
                  {item.title}
                </p>

                <div className="mt-3 flex items-center gap-1 text-xs text-emerald-600">
                  <TrendingUp className="h-3 w-3" />
                  {item.subtitle}
                </div>
              </motion.div>
            );
          })}
        </div>

                {/* ---------------- TODAY'S SCHEDULE ---------------- */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-bold text-gray-900">
              Today's Schedule
            </h3>

            <button className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
              View All
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {[
              {
                title: "Morning Milk Collection",
                time: "06:30 AM",
                color: "bg-emerald-500",
                icon: Milk,
              },
              {
                title: "Vaccination - Cow #18",
                time: "09:30 AM",
                color: "bg-orange-500",
                icon: Heart,
              },
              {
                title: "Feed Inventory Check",
                time: "12:00 PM",
                color: "bg-blue-500",
                icon: Clock3,
              },
            ].map((task, index) => {
              const Icon = task.icon;

              return (
                <motion.div
                  key={task.title}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.9 + index * 0.12,
                  }}
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${task.color} text-white`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900">
                      {task.title}
                    </h4>

                    <p className="mt-1 text-xs text-gray-500">
                      {task.time}
                    </p>
                  </div>

                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ---------------- RECENT ACTIVITY ---------------- */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-6 flex-1"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-bold text-gray-900">
              Recent Activity
            </h3>

            <button className="text-xs font-semibold text-emerald-600">
              History
            </button>
          </div>

          <div className="space-y-3">
            {[
              {
                title: "315L Milk Recorded",
                subtitle: "5 min ago",
                color: "bg-emerald-500",
              },
              {
                title: "Payment Received",
                subtitle: "₹21,500",
                color: "bg-blue-500",
              },
              {
                title: "Cow #24 Health Updated",
                subtitle: "Healthy",
                color: "bg-pink-500",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.4 + index * 0.1,
                }}
                className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm"
              >
                <div
                  className={`h-3 w-3 rounded-full ${item.color}`}
                />

                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </p>

                  <p className="text-xs text-gray-500">
                    {item.subtitle}
                  </p>
                </div>

                <TrendingUp className="h-4 w-4 text-emerald-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>

                {/* ---------------- BOTTOM NAVIGATION ---------------- */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="mt-6 rounded-3xl border border-white/70 bg-white/90 p-2 shadow-lg backdrop-blur-xl"
        >
          <div className="flex items-center justify-between">
            {[
              {
                label: "Home",
                icon: Milk,
                active: true,
              },
              {
                label: "Analytics",
                icon: TrendingUp,
              },
              {
                label: "Tasks",
                icon: Clock3,
              },
              {
                label: "Profile",
                icon: MoreHorizontal,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  className={`flex flex-1 flex-col items-center gap-1 rounded-2xl py-2 transition-all ${
                    item.active
                      ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-[10px] font-semibold">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}