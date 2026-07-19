"use client";

import PhoneMockup from "./PhoneMockup";
import FloatingCard from "./FloatingCard";

import {
  Milk,
  TrendingUp,
  Syringe,
  HeartPulse,
} from "lucide-react";

export default function HeroPhone() {
  return (
    <div className="absolute right-[4%] top-1/2 -translate-y-1/2">

      <FloatingCard
        title="Today's Milk"
        value="315 L"
        icon={<Milk size={22} />}
       className="-right-14 top-16"
        delay={0.2}
      />

      <FloatingCard
        title="Estimated Profit"
        value="₹21,500"
        icon={<TrendingUp size={22} />}
        className="-right-10 bottom-28"
        delay={0.5}
      />

      <FloatingCard
        title="Pregnant"
        value="7"
        icon={<HeartPulse size={22} />}
       className="-left-10 bottom-20"
        delay={0.7}
      />

      <FloatingCard
        title="Vaccination"
        value="3 Due"
        icon={<Syringe size={22} />}
        className="-left-20 bottom-24"
        delay={0.9}
      />

      <PhoneMockup />

    </div>
  );
}