"use client"

import { useEffect, useState } from "react"

interface ConfettiBurstProps {
  isActive: boolean
  onComplete: () => void
}

export function ConfettiBurst({ isActive, onComplete }: ConfettiBurstProps) {
  const [particles, setParticles] = useState<Array<{ id: number; emoji: string; delay: number; x: number; y: number }>>(
    [],
  )

  useEffect(() => {
    if (isActive) {
      const emojis = ["🎉", "✨", "🔮", "⭐", "💫", "🌟", "🎊", "🧠"]
      const newParticles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        delay: Math.random() * 0.5,
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 100,
      }))

      setParticles(newParticles)

      // Clean up after animation completes
      const timer = setTimeout(() => {
        setParticles([])
        onComplete()
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isActive, onComplete])

  if (!isActive || particles.length === 0) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute text-2xl animate-confetti-fall"
          style={{
            left: `calc(50% + ${particle.x}px)`,
            top: `calc(50% + ${particle.y}px)`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  )
}
