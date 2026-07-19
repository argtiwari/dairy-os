import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AppShellProps {
  children: ReactNode;
  className?: string;
}

/**
 * Main application container used across all pages.
 */
export default function AppShell({
  children,
  className,
}: AppShellProps) {
  return (
    <main className="min-h-screen bg-[#EEF5EE]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col bg-[#F8FAF7] rounded-[36px] shadow-2xl">
        <div className={cn("flex-1 px-10 py-8", className)}>
          {children}
        </div>
      </div>
    </main>
  );
}