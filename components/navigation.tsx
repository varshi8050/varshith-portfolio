"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Projects", href: "/projects", icon: Briefcase },
    { name: "Contact", href: "/contact", icon: Mail },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="w-full px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                style={{ fontSize: "clamp(1rem, 4vw, 1.5rem)" }}
              >
                <span className="hidden xs:inline">Varshith V Poojary</span>
                <span className="xs:hidden">VP</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative transition-colors duration-300 text-sm lg:text-base ${
                    pathname === item.href ? "text-purple-400" : "text-white hover:text-purple-400"
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400"
                    />
                  )}
                </Link>
              ))}
              <Button
                asChild
                variant="outline"
                size="sm"
                suppressHydrationWarning={true}
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-xs lg:text-sm"
              >
                <a href="/resume/varshith-resume1.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              suppressHydrationWarning={true}
              className="md:hidden text-white p-2 min-w-[44px] min-h-[44px]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsOpen(false)} />
            <div className="relative h-full bg-slate-900 w-full max-w-xs ml-auto p-6 pt-24 overflow-y-auto">
              <div className="space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 text-lg py-3 px-2 rounded-lg transition-colors duration-300 min-h-[44px] ${
                        pathname === item.href
                          ? "text-purple-400 bg-purple-400/10"
                          : "text-white hover:text-purple-400 hover:bg-white/5"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6 border-t border-white/10"
                >
                  <Button
                    asChild
                    variant="outline"
                    suppressHydrationWarning={true}
                    className="w-full border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white min-h-[44px]"
                  >
                    <a
                      href="/resume/varshith-resume1.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      Download Resume
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
