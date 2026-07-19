import {
  DollarSign,
  Milk,
  ClipboardList,
  PawPrint,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    title: "Milk",
    value: "315 L",
    icon: Milk,
  },
  {
    title: "Revenue",
    value: "₹21.5K",
    icon: DollarSign,
  },
];

const chart = [40, 65, 55, 80, 100, 72, 90];

const tasks = [
  "Morning Milking",
  "Vaccination - Cow #102",
  "Feed Batch A",
];

const activity = [
  "Milk recorded for Cow #24",
  "Health check completed",
];

export default function PhoneDashboard() {
  return (
    <div className="space-y-5 p-4">

      {/* Greeting */}

      <div>
        <p className="text-xs font-medium text-gray-500">
          Good Morning 👋
        </p>

        <h2 className="mt-1 text-2xl font-bold text-gray-900">
          DairyOS
        </h2>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 gap-3">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-600">
              <item.icon size={18} />
            </div>

            <p className="text-xl font-bold text-gray-900">
              {item.value}
            </p>

            <p className="mt-1 text-xs text-gray-500">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Weekly Production */}

      <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">
            Weekly Milk
          </h3>

          <span className="text-xs text-green-600">
            +12%
          </span>
        </div>

        <div className="flex h-24 items-end justify-between gap-2">
          {chart.map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-full bg-green-500"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>

      {/* Tasks */}

      <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
        <div className="mb-3 flex items-center gap-2">
          <ClipboardList
            size={18}
            className="text-green-600"
          />

          <h3 className="font-semibold">
            Today's Tasks
          </h3>
        </div>

        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task}
              className="flex items-center gap-2 text-sm"
            >
              <CheckCircle2
                size={16}
                className="text-green-600"
              />

              <span>{task}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Activity */}

      <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
        <div className="mb-3 flex items-center gap-2">
          <PawPrint
            size={18}
            className="text-green-600"
          />

          <h3 className="font-semibold">
            Recent Activity
          </h3>
        </div>

        <div className="space-y-3">
          {activity.map((item) => (
            <div key={item}>
              <p className="text-sm text-gray-700">
                {item}
              </p>

              <span className="text-xs text-gray-400">
                2 min ago
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}