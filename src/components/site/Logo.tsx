import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Shivganga Sanitary Ware & Panels Logo"
      className={cn("h-10 w-10 shrink-0 object-contain", className)}
    />
  );
}

export function Logo({
  className,
  compact,
  onDark,
}: {
  className?: string;
  compact?: boolean;
  onDark?: boolean;
}) {
  return (
    <span className={cn("flex min-w-0 items-center gap-3", className)}>
      <LogoMark className={cn("h-10 w-10 shrink-0", onDark ? "text-on-ink" : "text-primary")} />
      <span className="min-w-0 leading-tight">
        <span className="block truncate font-display text-base font-semibold tracking-tight sm:text-lg">
          Shivganga
        </span>
        {!compact && (
          <span className={cn(
            "block truncate text-[0.62rem] font-semibold uppercase tracking-[0.18em]",
            onDark ? "text-on-ink/70" : "text-muted-foreground",
          )}>
            Sanitary Ware &amp; Panels
          </span>
        )}
      </span>
    </span>
  );
}
