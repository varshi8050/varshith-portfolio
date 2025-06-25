"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FloatingElements } from "@/components/floating-elements"
import { HeroAnimation } from "@/components/hero-animation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <FloatingElements />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-6xl mx-auto">
          {/* Mobile Layout */}
          <div className="block lg:hidden text-center space-y-8">
            {/* Profile Image - Mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-purple-400/50 shadow-2xl bg-gradient-to-br from-purple-100 to-pink-100">
                  <img
                    src="/images/profile.jpg"
                    alt="Varshith V Poojary"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' fill='%23f3f4f6'/%3E%3Ctext x='80' y='90' fontFamily='Arial, sans-serif' fontSize='20' fontWeight='bold' textAnchor='middle' fill='%236366f1'%3EVP%3C/text%3E%3C/svg%3E"
                    }}
                  />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-dashed border-purple-400/30"
                />
              </div>
            </motion.div>

            {/* Content - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-purple-400 text-base font-medium"
              >
                Hello, I'm
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-4xl sm:text-5xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent block">
                  Varshith V
                </span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
                  Poojary
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-lg sm:text-xl text-gray-300 font-light"
              >
                Full-Stack Developer & Digital Innovator
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="space-y-4 max-w-lg mx-auto"
              >
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  A goal-driven BCA graduate specializing in full-stack development. Passionate about creating
                  innovative digital solutions with modern technologies.
                </p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Demonstrates great problem-solving skills, teamwork, and growth mindset — a perfect fit for
                  high-speed, global working cultures.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center max-w-sm mx-auto"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white group"
                >
                  <Link href="/projects" className="flex items-center justify-center">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white group"
                >
                  <a href="/resume/varshith-resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Resume
                  </a>
                </Button>
              </motion.div>

              {/* Contact Info - Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="pt-6 border-t border-white/10 space-y-3"
              >
                <div className="flex items-center gap-2 text-gray-400 justify-center">
                  <Mail className="h-4 w-4 text-purple-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">poojaryvarshith98@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 justify-center">
                  <Phone className="h-4 w-4 text-purple-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">+91 7349027705</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 justify-center">
                  <MapPin className="h-4 w-4 text-purple-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Udupi, Karnataka</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left Content - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-purple-400 text-lg font-medium"
                >
                  Hello, I'm
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-6xl xl:text-7xl font-bold leading-tight"
                >
                  <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent block">
                    Varshith V
                  </span>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
                    Poojary
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-2xl text-gray-300 font-light"
                >
                  <span className="typewriter">Full-Stack Developer & Digital Innovator</span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="space-y-4 max-w-2xl"
              >
                <p className="text-gray-400 text-lg leading-relaxed">
                  A goal-driven BCA graduate specializing in full-stack development. Passionate about creating
                  innovative digital solutions with modern technologies.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Demonstrates great problem-solving skills, teamwork, and growth mindset — a perfect fit for
                  high-speed, global working cultures.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="flex gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white group"
                >
                  <Link href="/projects" className="flex items-center">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white group"
                >
                  <a href="/resume/varshith-resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>

              {/* Contact Info - Desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="flex flex-wrap gap-6 pt-8 border-t border-white/10"
              >
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="h-4 w-4 text-purple-400 flex-shrink-0" />
                  <span className="text-sm">poojaryvarshith98@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="h-4 w-4 text-purple-400 flex-shrink-0" />
                  <span className="text-sm">+91 7349027705</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="h-4 w-4 text-purple-400 flex-shrink-0" />
                  <span className="text-sm">Udupi, Karnataka</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col items-center space-y-8"
            >
              {/* Profile Image - Desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
                <div className="w-56 h-56 xl:w-64 xl:h-64 rounded-full overflow-hidden border-4 border-purple-400/50 shadow-2xl bg-gradient-to-br from-purple-100 to-pink-100">
                  <img
                    src="/images/profile.jpg"
                    alt="Varshith V Poojary"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='%23f3f4f6'/%3E%3Ctext x='128' y='140' fontFamily='Arial, sans-serif' fontSize='32' fontWeight='bold' textAnchor='middle' fill='%236366f1'%3EVP%3C/text%3E%3C/svg%3E"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent"></div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-0 w-56 h-56 xl:w-64 xl:h-64 rounded-full border-2 border-dashed border-purple-400/30"
                />
              </motion.div>

              {/* 3D Animation - Desktop */}
              <div className="w-full max-w-md">
                <HeroAnimation />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
