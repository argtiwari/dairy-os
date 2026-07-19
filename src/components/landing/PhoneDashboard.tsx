import { DollarSign, Milk, ClipboardList, PawPrint } from "lucide-react";

const cards = [
  {
    title: "Milk",
    value: "315 L",
    icon: Milk,
  },
  {
    title: "Profit",
    value: "₹21,500",
    icon: DollarSign,
  },
  {
    title: "Tasks",
    value: "3",
    icon: ClipboardList,
  },
  {
    title: "Animals",
    value: "12",
    icon: PawPrint,
  },
];

export default function PhoneDashboard() {
  return (
    <>
      <div className="mt-6 rounded-3xl bg-green-600 p-4 text-white">

        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold">
            Today's Overview
          </h3>

          <span className="text-xs opacity-80">
            Updated Now
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">

          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white p-3 text-black"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <card.icon size={20} />
              </div>

              <h4 className="text-xl font-bold">
                {card.value}
              </h4>

              <p className="text-xs text-gray-500">
                {card.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </>
  );
}