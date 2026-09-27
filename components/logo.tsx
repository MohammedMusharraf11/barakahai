import React from "react"
import Image from "next/image"

interface LogoProps {
  variant?: "light" | "dark"
  className?: string
  height?: number
  showTagline?: boolean
}

export function Logo({
  variant = "dark",
  className = "",
  height = 42,
  showTagline = false,
}: LogoProps) {
  // logo_v1.png dimensions are 1294 x 1216 (~1.064 aspect ratio)
  const iconHeight = height
  const iconWidth = Math.round(height * (1294 / 1216))

  return (
    <div
      className={`group flex items-center gap-3 select-none cursor-pointer ${className}`}
      aria-label="BarakahAI Home"
    >
      {/* 3D Emblem Symbol from logo_v1.png */}
      <div
        className="relative flex items-center justify-center flex-shrink-0 transition-transform duration-300 ease-out group-hover:scale-108 group-hover:rotate-1"
        style={{ width: iconWidth, height: iconHeight }}
      >
        <Image
          src="/logo_v1.png"
          alt="BarakahAI Mark"
          width={iconWidth * 2}
          height={iconHeight * 2}
          className="w-full h-full object-contain filter drop-shadow-[0_0_16px_rgba(0,210,255,0.45)] transition-all duration-300 group-hover:drop-shadow-[0_0_26px_rgba(0,210,255,0.8)]"
          priority
        />
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className="font-bold tracking-tight text-white flex items-center transition-colors duration-200"
          style={{
            fontSize: Math.round(height * 0.56),
            fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
            letterSpacing: "-0.03em",
          }}
        >
          <span>Barakah</span>
          <span className="bg-gradient-to-r from-[#00d2ff] via-[#38bdf8] to-[#0070f3] bg-clip-text text-transparent ml-0.5 filter drop-shadow-[0_0_12px_rgba(0,210,255,0.35)]">
            AI
          </span>
        </span>
        {showTagline && (
          <span
            className="text-[9px] tracking-[0.14em] font-semibold text-[#8fa7c4] uppercase mt-0.5"
            style={{ fontFamily: "var(--sans)" }}
          >
            Automation Systems
          </span>
        )}
      </div>
    </div>
  )
}

export default Logo
