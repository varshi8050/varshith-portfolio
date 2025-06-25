"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

export function FloatingElements() {
  // Generate consistent random values that will be the same on server and client
  const orbs = useMemo(() => {
    // Use a seeded random function to ensure consistency
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed) * 10000
      return x - Math.floor(x)
    }

    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      width: seededRandom(i * 100) * 300 + 100,
      height: seededRandom(i * 200) * 300 + 100,
      left: seededRandom(i * 300) * 100,
      top: seededRandom(i * 400) * 100,
      animateX: seededRandom(i * 500) * 100 - 50,
      animateY: seededRandom(i * 600) * 100 - 50,
      duration: seededRandom(i * 700) * 10 + 10,
    }))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl"
          style={{
            width: orb.width,
            height: orb.height,
            left: `${orb.left}%`,
            top: `${orb.top}%`,
          }}
          animate={{
            x: [0, orb.animateX],
            y: [0, orb.animateY],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}
