import AppButton from "@/components/ui/AppButton";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-8">
      <div className="rounded-[32px] border border-green-100 bg-gradient-to-br from-green-50 via-white to-emerald-50 p-6 shadow-sm">

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          <Sparkles size={16} />
          Built for Indian Dairy Farmers
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold leading-tight text-gray-900">
          Manage your entire dairy farm from one simple app.
        </h1>

        {/* Description */}
        <p className="mt-5 text-lg leading-8 text-gray-600">
          Track animals, milk, health, expenses, workers and reminders without
          notebooks or confusion.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4">
          <AppButton className="w-full">
            Login with Google
            <ArrowRight className="ml-2" size={18} />
          </AppButton>

          <AppButton
            variant="outline"
            className="w-full border-green-600 text-green-700"
          >
            Open Demo
          </AppButton>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-3 gap-3">

          <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-green-600">42+</h3>
            <p className="mt-1 text-xs text-gray-500">Animals</p>
          </div>

          <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-green-600">315L</h3>
            <p className="mt-1 text-xs text-gray-500">Today's Milk</p>
          </div>

          <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-green-600">₹21K</h3>
            <p className="mt-1 text-xs text-gray-500">Profit</p>
          </div>

        </div>

      </div>
    </section>
  );
}