import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-lg px-6 text-sm font-bold tracking-wide transition duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70",
        variant === "primary"
          ? "bg-[var(--safri-red-light)] text-white shadow-lg hover:-translate-y-1 hover:bg-[var(--safri-red)] hover:shadow-xl"
          : "border-2 border-[var(--safri-blue)] bg-transparent text-[var(--safri-blue)] hover:-translate-y-1 hover:bg-[var(--safri-blue)] hover:text-white",
        className,
      )}
      {...props}
    />
  );
}
