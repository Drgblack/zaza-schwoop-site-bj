"use client"

import { useState } from "react"

export function SchwoopFooter() {
  const [hoveredEmoji, setHoveredEmoji] = useState<string | null>(null)

  return (
    <footer className="bg-midnight-indigo border-t border-orchid-purple/20 mt-auto">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Branding */}
          <div className="text-center lg:text-left">
            <p className="text-sm text-gray-300 flex items-center justify-center lg:justify-start gap-1 flex-wrap">
              © 2025 Schwoop. Built by{" "}
              <span className="text-warm-apricot font-medium hover:text-warm-apricot/80 transition-colors duration-300">
                Zaza Technologies
              </span>{" "}
              with{" "}
              <span
                className="relative cursor-pointer transition-transform duration-300 hover:scale-110"
                onMouseEnter={() => setHoveredEmoji("brain")}
                onMouseLeave={() => setHoveredEmoji(null)}
              >
                🧠{hoveredEmoji === "brain" && <div className="absolute -top-1 -right-1 text-xs animate-pulse">✨</div>}
              </span>{" "}
              +{" "}
              <span
                className="relative cursor-pointer transition-transform duration-300 hover:scale-110"
                onMouseEnter={() => setHoveredEmoji("coffee")}
                onMouseLeave={() => setHoveredEmoji(null)}
              >
                ☕
                {hoveredEmoji === "coffee" && <div className="absolute -top-1 -right-1 text-xs animate-pulse">✨</div>}
              </span>
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
            <a
              href="#"
              className="group flex items-center gap-2 bg-gradient-to-r from-orchid-purple/20 to-matcha-green/20 hover:from-orchid-purple/30 hover:to-matcha-green/30 border border-orchid-purple/30 hover:border-orchid-purple/50 px-4 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orchid-purple/20 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative z-10">→ Join the Discord</span>
            </a>
            <a
              href="#"
              className="group flex items-center gap-2 bg-gradient-to-r from-matcha-green/20 to-powder-blue/20 hover:from-matcha-green/30 hover:to-powder-blue/30 border border-matcha-green/30 hover:border-matcha-green/50 px-4 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-matcha-green/20 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative z-10">→ Follow @schwoopapp</span>
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-6 pt-6 border-t border-orchid-purple/10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a href="#" className="group text-sm text-gray-400 hover:text-white transition-all duration-300 relative">
              <span className="relative z-10">Privacy</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-orchid-purple/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded"></span>
            </a>
            <a href="#" className="group text-sm text-gray-400 hover:text-white transition-all duration-300 relative">
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-matcha-green/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded"></span>
            </a>
            <a href="#" className="group text-sm text-gray-400 hover:text-white transition-all duration-300 relative">
              <span className="relative z-10">About Zaza</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-warm-apricot/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded"></span>
            </a>
          </div>
        </div>

        {/* Subtle Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-orchid-purple/30 to-transparent"></div>
      </div>
    </footer>
  )
}
