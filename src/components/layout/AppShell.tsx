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
     <div className="mx-auto w-full max-w-[1600px]">
        <div className={cn("flex-1 px-10 py-8", className)}>
          {children}
        </div>
      </div>
    </main>
  );
}