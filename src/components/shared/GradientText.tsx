import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "purple";
}

export function GradientText({ children, className, variant = "primary" }: GradientTextProps) {
  return (
    <span
      className={cn(
        variant === "primary" ? "gradient-text" : "gradient-text-purple",
        className
      )}
    >
      {children}
    </span>
  );
}
