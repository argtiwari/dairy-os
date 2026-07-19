import { Bell, Leaf, UserCircle2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 text-white shadow-sm">
          <Leaf size={22} />
        </div>

        <div>
          <p className="text-xs text-gray-500">Welcome Back</p>
          <h1 className="text-xl font-bold text-gray-900">
            DairyOS
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded-xl bg-white p-3 shadow-sm">
          <Bell size={20} />
        </button>

        <button className="rounded-xl bg-white p-2 shadow-sm">
          <UserCircle2 size={34} />
        </button>
      </div>
    </header>
  );
}