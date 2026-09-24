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
  // new-logo.png dimensions are 1286 x 1223 (~1.05 aspect ratio)
  const iconHeight = height
  const iconWidth = Math.round(height * (1286 / 1223))

  return (
    <div
      className={`group flex items-center gap-3 select-none cursor-pointer ${className}`}
      aria-label="BarakahAI Home"
    >
      {/* 3D Ribbon Symbol from new-logo.png */}
      <div
        className="relative flex items-center justify-center flex-shrink-0 transition-transform duration-300 ease-out group-hover:scale-108 group-hover:rotate-1"
        style={{ width: iconWidth, height: iconHeight }}
      >
        <Image
          src="/new-logo.png"
          alt="BarakahAI Mark"
          width={iconWidth * 2}
          height={iconHeight * 2}
          className="w-full h-full object-contain filter drop-shadow-[0_0_14px_rgba(0,217,126,0.38)] transition-all duration-300 group-hover:drop-shadow-[0_0_22px_rgba(0,217,126,0.65)]"
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
          <span className="bg-gradient-to-r from-[#00d97e] via-[#5ee082] to-[#e8b84b] bg-clip-text text-transparent ml-0.5 filter drop-shadow-[0_0_12px_rgba(0,217,126,0.25)]">
            AI
          </span>
        </span>
        {showTagline && (
          <span
            className="text-[9px] tracking-[0.14em] font-semibold text-[#8fa89a] uppercase mt-0.5"
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
