import {
  Building2,
  Beef,
  Milk,
  TrendingUp,
} from "lucide-react";

import { LucideIcon } from "lucide-react";

export interface ProcessStepData {
  id: number;
  title: string;
  heading: string;
  description: string;
  icon: LucideIcon;

  preview: {
    title: string;
    value: string;
    subtitle: string;
    color: string;
  };
}

export const processSteps: ProcessStepData[] = [
  {
    id: 1,
    title: "Create Farm",
    heading: "Setup your dairy in minutes",
    description:
      "Create your farm profile, add owner details and configure your workspace to start managing everything digitally.",

    icon: Building2,

    preview: {
      title: "Farm Registered",
      value: "Green Valley",
      subtitle: "Owner: Rahul Sharma",
      color: "from-emerald-500 to-green-600",
    },
  },

  {
    id: 2,
    title: "Add Animals",
    heading: "Maintain every cattle record",
    description:
      "Store breed, age, pregnancy, vaccination, milk capacity and health records for every animal.",

    icon: Beef,

    preview: {
      title: "Total Animals",
      value: "48",
      subtitle: "3 Added Today",
      color: "from-orange-500 to-amber-500",
    },
  },

  {
    id: 3,
    title: "Record Milk",
    heading: "Track daily milk collection",
    description:
      "Record morning and evening production with automatic totals and performance insights.",

    icon: Milk,

    preview: {
      title: "Today's Milk",
      value: "315 L",
      subtitle: "+12L from yesterday",
      color: "from-sky-500 to-cyan-500",
    },
  },

  {
    id: 4,
    title: "Grow Profit",
    heading: "Monitor income & analytics",
    description:
      "Track revenue, expenses, profits and reports to make smarter business decisions.",

    icon: TrendingUp,

    preview: {
      title: "Today's Revenue",
      value: "₹21,500",
      subtitle: "+18% this week",
      color: "from-violet-500 to-indigo-600",
    },
  },
];