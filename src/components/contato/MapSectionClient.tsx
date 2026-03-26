"use client";

import dynamic from "next/dynamic";

const MapSection = dynamic(() => import("@/components/contato/mapa"), {
  ssr: false,
});

export default function MapSectionClient() {
  return <MapSection />;
}
