"use client";

import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "safri-cookie-consent";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}

function getSnapshot() {
  if (typeof window === "undefined") {
    return true;
  }

  return window.localStorage.getItem(STORAGE_KEY) === "accepted";
}

function getServerSnapshot() {
  return true;
}

export function CookieConsent() {
  const accepted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (accepted) {
    return null;
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 rounded-lg border border-[var(--card-border)] bg-[var(--off-white)] p-4 shadow-lg md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md">
      <p className="text-sm leading-6 text-[var(--text-secondary)]">
        Utilizamos cookies para melhorar sua navegacao e medir desempenho. Ao continuar, voce concorda com a nossa
        politica de cookies.
      </p>
      <Button
        className="mt-3 w-full"
        onClick={() => {
          window.localStorage.setItem(STORAGE_KEY, "accepted");
          window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY }));
        }}
      >
        Aceitar e continuar
      </Button>
    </div>
  );
}
