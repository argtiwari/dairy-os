import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

export default function StatCard({
  icon,
  value,
  label,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-green-100 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-gray-900">
        {value}
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        {label}
      </p>
    </div>
  );
}