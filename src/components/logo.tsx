type LogoProps = {
  size?: "md" | "sm";
  className?: string;
};

export function Logo({ size = "md", className = "" }: LogoProps) {
  const dot = size === "md" ? "w-3.5 h-3.5" : "w-3 h-3";
  const tall = size === "md" ? "w-3.5 h-[22px]" : "w-3 h-[19px]";
  const text = size === "md" ? "text-2xl" : "text-[22px]";

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="flex items-end gap-1" aria-hidden>
        <span className={`${dot} rounded-full bg-chrome`} />
        <span className={`${tall} rounded-full bg-cobalt`} />
        <span className={`${dot} rounded-full bg-coral`} />
      </span>
      <span
        className={`font-display font-extrabold tracking-[-0.02em] ${text}`}
      >
        hopscotch
      </span>
    </span>
  );
}
