"use client";

import { useMemo, useState } from "react";

const locations = [
  {
    name: "Sede Central",
    query: "Rua Diogo Cão, Kuito, Bié, Angola",
  },
  {
    name: "Filial Huambo",
    query: "Avenida 5 de Outubro, Huambo, Angola",
  },
  {
    name: "Filial Luanda",
    query: "Rua 1 Congresso MPLA, Luanda, Angola",
  },
  {
    name: "Complexo SAFRI-METAL",
    query: "Estrada Nacional N250, Chissindo, Angola",
  },
];

export default function MapSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLocation = locations[activeIndex];

  const embeddedMapUrl = useMemo(
    () => `https://www.google.com/maps?q=${encodeURIComponent(activeLocation.query)}&z=14&output=embed`,
    [activeLocation.query],
  );

  const mapsSearchUrl = useMemo(
    () => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeLocation.query)}`,
    [activeLocation.query],
  );

  return (
    <div className="grid h-full w-full grid-rows-[1fr_auto] overflow-hidden rounded-2xl bg-white dark:bg-slate-950">
      <iframe
        src={embeddedMapUrl}
        className="h-full w-full border-0 dark:[filter:grayscale(0.15)_invert(0.9)_hue-rotate(180deg)_saturate(0.8)]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa da localização SAFRI"
      />

      <div className="grid gap-3 border-t border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-950">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location, index) => (
            <button
              key={location.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-lg border px-3 py-2 text-center text-xs font-semibold transition ${
                index === activeIndex
                  ? "border-[var(--safri-red)] bg-red-50 text-[var(--safri-red)] dark:bg-red-950/40"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              {location.name}
            </button>
          ))}
        </div>

        <a
          href={mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-center text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          Abrir {activeLocation.name} no Google Maps
        </a>
      </div>
    </div>
  );
}