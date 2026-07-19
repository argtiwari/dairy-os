import AppButton from "@/components/ui/AppButton";
import StatCard from "@/components/common/StatCard";

import {
    ArrowRight,
    Sparkles,
    PawPrint,
    Milk,
    DollarSign,
} from "lucide-react";


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
                    <StatCard
                        icon={<PawPrint size={22} />}
                        value="42+"
                        label="Animals"
                    />

                    <StatCard
                        icon={<Milk size={22} />}
                        value="315L"
                        label="Today's Milk"
                    />

                    <StatCard
                        icon={<DollarSign size={22} />}
                        value="₹21K"
                        label="Profit"
                    />
                </div>

            </div>
        </section>
    );
}