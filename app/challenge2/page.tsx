"use client"

import type React from "react"

import { useState, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ConfettiBurst } from "@/components/confetti-burst"
import { SchwoopFooter } from "@/components/schwoop-footer"

export default function SchwoopChallenge() {
  const [tiktokUrl, setTiktokUrl] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [isInputFocused, setIsInputFocused] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Create audio context for sparkle sound
  const playSparkleSound = useCallback(() => {
    try {
      // Create a simple sparkle sound using Web Audio API
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1)
      oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.2)

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)

      oscillator.type = "sine"
      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.3)
    } catch (error) {
      // Fallback for browsers that don't support Web Audio API
      console.log("Audio not supported")
    }
  }, [])

  const handleButtonHover = useCallback(() => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }

    // Set a debounce timeout
    hoverTimeoutRef.current = setTimeout(() => {
      playSparkleSound()
    }, 100)
  }, [playSparkleSound])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!tiktokUrl.trim()) return

    setIsLoading(true)
    setShowConfetti(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setTiktokUrl("")
    setShowConfetti(false)
  }

  return (
    <div className="min-h-screen bg-midnight-indigo text-white relative overflow-hidden">
      <style jsx>{`
        @media (max-width: 768px) {
          .animate-glow {
            animation: none !important;
            box-shadow: 0 0 10px rgba(181, 126, 220, 0.2) !important;
          }
          .animate-glow-green {
            animation: none !important;
            box-shadow: 0 0 10px rgba(134, 186, 144, 0.2) !important;
          }
        }
      `}</style>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Stars */}
        <div className="absolute top-20 left-10 text-warm-apricot text-2xl animate-pulse-slow">✨</div>
        <div className="absolute top-40 right-20 text-orchid-purple text-xl animate-float">⭐</div>
        <div className="absolute top-60 left-1/4 text-matcha-green text-lg animate-bounce-slow">✨</div>
        <div className="absolute bottom-40 right-10 text-warm-apricot text-2xl animate-pulse-slow">⭐</div>
        <div className="absolute bottom-60 left-20 text-orchid-purple text-xl animate-float">✨</div>

        {/* Floating Question Marks */}
        <div className="absolute top-32 right-1/4 text-orchid-purple text-3xl animate-bounce-slow opacity-30">?</div>
        <div className="absolute top-80 left-1/3 text-warm-apricot text-2xl animate-float opacity-40">?</div>
        <div className="absolute bottom-32 right-1/3 text-matcha-green text-xl animate-pulse-slow opacity-30">?</div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/2 w-32 h-32 bg-orchid-purple rounded-full opacity-10 blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-matcha-green rounded-full opacity-15 blur-xl animate-float"></div>
      </div>

      {/* Top Hero Section */}
      <div className="relative z-10 container mx-auto px-4 pt-6 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <Button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-gradient-to-r from-orchid-purple to-matcha-green hover:from-orchid-purple/90 hover:to-matcha-green/90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orchid-purple/40 hover:scale-105 group"
          >
            <span className="text-lg group-hover:animate-bounce-slow">←</span>
            Back to Schwoopverse
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Challenge 2: Guess What Schwoop Is 🧠
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            The vibe-based study app with a secret. Can you figure it out?
          </p>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {!isSubmitted ? (
          <>
            {/* Hero Section */}
            <div className="text-center mb-16 pt-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-orchid-purple via-warm-apricot to-matcha-green bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                What Even <em className="italic">Is</em> Schwoop? 🔮
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 mb-8 space-y-2">
                <p className="italic">{"We're not saying. You tell us."}</p>
                <p className="text-lg">
                  Post your wildest guess and tag{" "}
                  <span className="text-matcha-green font-semibold">#WhatIsSchwoop</span> +{" "}
                  <span className="text-orchid-purple font-semibold">@schwoopapp</span>
                </p>
              </div>
              <Button
                onClick={() => document.getElementById("how-to-play")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-matcha-green hover:bg-matcha-green/90 text-midnight-indigo font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-matcha-green/30 hover:scale-105"
              >
                Make a Guess
              </Button>
            </div>

            {/* Animated Container with Header */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-orchid-purple via-warm-apricot to-matcha-green bg-clip-text animate-header-bounce inline-block">
                  ✨ Submit your Schwoop theory ✨
                </h2>
              </div>

              <div className="space-y-12">
                {/* How to Play Section */}
                <div className="relative group">
                  {/* Floating Particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-4 -left-4 w-2 h-2 bg-orchid-purple rounded-full opacity-40 animate-particle-float"></div>
                    <div
                      className="absolute -top-2 right-8 w-1.5 h-1.5 bg-warm-apricot rounded-full opacity-50 animate-particle-float"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute top-1/2 -right-6 w-2 h-2 bg-orchid-purple rounded-full opacity-30 animate-particle-float"
                      style={{ animationDelay: "2s" }}
                    ></div>
                    <div
                      className="absolute -bottom-3 left-12 w-1.5 h-1.5 bg-warm-apricot rounded-full opacity-45 animate-particle-float"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="absolute bottom-8 -left-2 w-1 h-1 bg-orchid-purple rounded-full opacity-35 animate-particle-float"
                      style={{ animationDelay: "1.5s" }}
                    ></div>
                  </div>

                  <Card
                    id="how-to-play"
                    className="bg-gradient-to-br from-midnight-indigo/80 to-midnight-indigo/60 border-2 border-orchid-purple/50 backdrop-blur-sm shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-orchid-purple/40 animate-glow md:animate-glow relative overflow-hidden group-hover:border-orchid-purple/70"
                  >
                    {/* Glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orchid-purple/10 via-transparent to-orchid-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <CardContent className="p-8 relative z-10">
                      <h2 className="text-3xl font-bold text-center mb-8 text-warm-apricot drop-shadow-lg">
                        How to Play
                      </h2>
                      <div className="space-y-6 text-lg">
                        <div className="flex items-start gap-4">
                          <span className="text-2xl drop-shadow-md">🤔</span>
                          <p className="drop-shadow-sm">
                            Take a wild guess — is Schwoop a mood ring for your brain? A productivity spellbook? A
                            glorified pomodoro?
                          </p>
                        </div>
                        <div className="flex items-start gap-4">
                          <span className="text-2xl drop-shadow-md">📱</span>
                          <p className="drop-shadow-sm">
                            Post it to TikTok using{" "}
                            <span className="text-matcha-green font-semibold drop-shadow-sm">#WhatIsSchwoop</span> and
                            tag <span className="text-orchid-purple font-semibold drop-shadow-sm">@schwoopapp</span>
                          </p>
                        </div>
                        <div className="flex items-start gap-4">
                          <span className="text-2xl drop-shadow-md">🔗</span>
                          <p className="drop-shadow-sm">Paste your link below to officially enter</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Submission Form */}
                <div className="relative group">
                  {/* Floating Particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-3 -left-3 w-2 h-2 bg-matcha-green rounded-full opacity-40 animate-particle-float"></div>
                    <div
                      className="absolute -top-4 right-12 w-1.5 h-1.5 bg-powder-blue rounded-full opacity-50 animate-particle-float"
                      style={{ animationDelay: "1.2s" }}
                    ></div>
                    <div
                      className="absolute top-1/3 -right-4 w-2 h-2 bg-matcha-green rounded-full opacity-35 animate-particle-float"
                      style={{ animationDelay: "2.3s" }}
                    ></div>
                    <div
                      className="absolute -bottom-2 left-8 w-1.5 h-1.5 bg-powder-blue rounded-full opacity-45 animate-particle-float"
                      style={{ animationDelay: "0.8s" }}
                    ></div>
                    <div
                      className="absolute bottom-12 -left-3 w-1 h-1 bg-matcha-green rounded-full opacity-40 animate-particle-float"
                      style={{ animationDelay: "1.8s" }}
                    ></div>
                  </div>

                  <Card className="bg-gradient-to-br from-midnight-indigo/80 to-midnight-indigo/60 border-2 border-matcha-green/50 backdrop-blur-sm shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-matcha-green/40 animate-glow-green md:animate-glow-green relative overflow-hidden group-hover:border-matcha-green/70">
                    {/* Glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-matcha-green/10 via-transparent to-matcha-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <CardContent className="p-8 relative z-10">
                      <h3 className="text-2xl font-bold text-center mb-6 text-matcha-green drop-shadow-lg">
                        Drop your TikTok link here to enter the challenge
                      </h3>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                          {/* Animated cursor effect */}
                          {isInputFocused && !tiktokUrl && (
                            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white/50 animate-cursor-blink pointer-events-none z-10">
                              |
                            </div>
                          )}

                          {/* Shimmer overlay */}
                          {isInputFocused && (
                            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-mint-green/30 to-transparent animate-input-shimmer"></div>
                            </div>
                          )}

                          <Input
                            type="url"
                            placeholder="https://www.tiktok.com/@username/video/..."
                            value={tiktokUrl}
                            onChange={(e) => setTiktokUrl(e.target.value)}
                            onFocus={() => setIsInputFocused(true)}
                            onBlur={() => setIsInputFocused(false)}
                            className={`bg-midnight-indigo/70 border-2 text-white placeholder:text-gray-400 text-lg py-4 px-6 rounded-full focus:ring-mint-green/30 transition-all duration-300 drop-shadow-sm relative z-0 ${
                              isInputFocused
                                ? "border-mint-green shadow-lg shadow-mint-green/20"
                                : "border-powder-blue/50 hover:border-powder-blue/70"
                            }`}
                            required
                          />
                        </div>
                        <div className="text-center relative">
                          <Button
                            type="submit"
                            disabled={isLoading || !tiktokUrl.trim()}
                            onMouseEnter={handleButtonHover}
                            className="bg-gradient-to-r from-orchid-purple to-warm-apricot hover:from-orchid-purple/90 hover:to-warm-apricot/90 text-white font-bold text-lg px-12 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orchid-purple/30 hover:scale-105 animate-button-pulse disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:animate-none relative overflow-hidden drop-shadow-lg"
                          >
                            <span className="relative z-10">{isLoading ? "Casting..." : "Cast My Guess 🔮"}</span>
                          </Button>

                          {/* Confetti Burst */}
                          <ConfettiBurst isActive={showConfetti} onComplete={() => setShowConfetti(false)} />
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* After Submission */
          <div className="text-center py-16">
            <div className="mb-8">
              <div className="text-6xl mb-4 animate-bounce-slow">🎉</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-matcha-green">
                {"You're in! We'll reveal the real answer soon…"}
              </h2>
              <p className="text-xl text-gray-300 mb-8">Best guesses get TikTok clout + early access.</p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={resetForm}
                className="bg-orchid-purple hover:bg-orchid-purple/90 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orchid-purple/30 hover:scale-105"
              >
                Submit Another Guess
              </Button>
              <div className="text-sm text-gray-400">
                <p>Share this challenge with friends!</p>
                <p className="text-matcha-green">#WhatIsSchwoop</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-matcha-green/10 to-transparent pointer-events-none"></div>

      {/* Footer */}
      <SchwoopFooter />
    </div>
  )
}
