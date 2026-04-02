"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const logoSrc =
    resolvedTheme === "dark"
      ? "/images/logo-light.png"
      : "/images/logo-dark.png"

  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src={logoSrc}
        alt="Safri Comercial"
        width={160}
        height={20}
        priority
      />
    </div>
  )
}