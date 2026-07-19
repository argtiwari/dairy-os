import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AppButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}

export default function AppButton({
  children,
  className,
  variant = "default",
  size = "lg",
}: AppButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "h-14 rounded-2xl text-base font-semibold shadow-sm active:scale-95 transition-all",
        className
      )}
    >
      {children}
    </Button>
  );
}