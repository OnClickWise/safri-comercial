import { cn } from "@/lib/utils"

interface SectionTagProps {
  children: React.ReactNode
  className?: string
}

export function SectionTag({ children, className }: SectionTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary",
        "before:block before:h-px before:w-6 before:bg-primary",
        className
      )}
    >
      {children}
    </span>
  )
}
