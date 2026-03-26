import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-md border border-slate-600 bg-[var(--background)] px-3 text-sm text-[var(--foreground)] placeholder:text-slate-500 outline-none transition focus:border-[var(--safri-red-light)] focus:ring-2 focus:ring-[var(--safri-red-light)]/20",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-md border border-slate-600 bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)] placeholder:text-slate-500 outline-none transition focus:border-[var(--safri-red-light)] focus:ring-2 focus:ring-[var(--safri-red-light)]/20",
        className,
      )}
      {...props}
    />
  );
}
