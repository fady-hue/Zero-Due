import { cn } from "@/lib/utils";
import { GradientText } from "./GradientText";

interface SectionHeaderProps {
  label?: string;
  title: string;
  highlightedTitle?: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  label,
  title,
  highlightedTitle,
  subtitle,
  className,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      {label && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-slow" />
          {label}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-4">
        {title}{" "}
        {highlightedTitle && <GradientText>{highlightedTitle}</GradientText>}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
