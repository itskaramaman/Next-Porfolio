import { cn } from "@/lib/utils";

const MagicButton = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      className={cn(
        `inline-flex h-10 text-sm md:text-base md:h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 md:px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default MagicButton;
