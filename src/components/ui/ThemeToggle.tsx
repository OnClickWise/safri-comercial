"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("safri-theme") as Theme | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme ?? (systemPrefersDark ? "dark" : "light");

    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    applyTheme(theme);
  }, [mounted, theme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const storedTheme = localStorage.getItem("safri-theme");
      if (!storedTheme) {
        setTheme(media.matches ? "dark" : "light");
      }
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("safri-theme", nextTheme);
  };

  const label = !mounted
    ? "Alternar tema"
    : theme === "light"
      ? "Ativar modo escuro"
      : "Ativar modo claro";

  const title = !mounted
    ? "Alternar tema"
    : theme === "light"
      ? "Modo escuro"
      : "Modo claro";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={title}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--card-border)] bg-[var(--off-white)] text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[var(--safri-red)]"
    >
      {!mounted || theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}