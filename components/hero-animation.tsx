"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Smartphone } from "lucide-react"

export function HeroAnimation() {
  const skills = [
    { icon: Code, label: "Frontend", color: "text-cyan-400", bgColor: "bg-cyan-500/20" },
    { icon: Database, label: "Backend", color: "text-emerald-400", bgColor: "bg-emerald-500/20" },
    { icon: Globe, label: "Web Dev", color: "text-blue-400", bgColor: "bg-blue-500/20" },
    { icon: Smartphone, label: "Responsive", color: "text-pink-400", bgColor: "bg-pink-500/20" },
  ]

  return (
    <div className="relative w-full h-80 flex items-center justify-center">
      {/* Central Hub */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="relative w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-2xl border-4 border-white/20 z-10"
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="text-white font-bold text-center"
        >
          <Code className="h-8 w-8 mx-auto mb-1" />
          <div className="text-xs">DEV</div>
        </motion.div>
      </motion.div>

      {/* Orbiting Skills */}
      {skills.map((skill, index) => {
        const angle = index * 90 * (Math.PI / 180)
        const radius = 120

        return (
          <motion.div
            key={skill.label}
            className="absolute"
            animate={{
              x: Math.cos(angle) * radius,
              y: Math.sin(angle) * radius,
              rotate: 360,
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: index * 0.5,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`w-20 h-20 rounded-full ${skill.bgColor} backdrop-blur-sm border-2 border-white/30 flex flex-col items-center justify-center group cursor-pointer shadow-xl`}
            >
              <skill.icon
                className={`h-5 w-5 ${skill.color} group-hover:scale-110 transition-transform drop-shadow-sm`}
              />
              <span className={`text-xs ${skill.color} mt-1 font-semibold text-center leading-tight drop-shadow-sm`}>
                {skill.label}
              </span>
            </motion.div>
          </motion.div>
        )
      })}

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {skills.map((_, index) => {
          const angle = index * 90 * (Math.PI / 180)
          const radius = 120
          const centerX = 160
          const centerY = 160
          const x = Math.cos(angle) * radius + centerX
          const y = Math.sin(angle) * radius + centerY

          return (
            <motion.line
              key={index}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke="rgba(147, 51, 234, 0.4)"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: index * 0.3 }}
            />
          )
        })}
      </svg>

      {/* Pulsing Ring Effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute w-64 h-64 rounded-full border border-purple-400/30"
      />
    </div>
  )
}
