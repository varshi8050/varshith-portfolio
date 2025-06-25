"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-slate-900/95 border-t border-purple-500/20 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Varshith V Poojary
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Full-Stack Developer passionate about creating innovative digital solutions. Ready to bring your ideas to
              life with modern technologies and creative problem-solving.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-white">Quick Links</h4>
            <div className="space-y-3">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 group"
                >
                  <span className="flex items-center">
                    <span className="w-0 group-hover:w-3 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-3 rounded-full"></span>
                    {item}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-white">Let's Work Together</h4>
            <p className="text-gray-300 leading-relaxed">
              Ready to start your next project? Let's discuss how we can bring your ideas to life.
            </p>
            <div className="space-y-3">
              <Button
                asChild
                suppressHydrationWarning={true}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                suppressHydrationWarning={true}
                className="w-full border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
              >
                <Link href="/projects">View My Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-purple-500/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4"
        >
          <p className="text-gray-400 flex items-center gap-2 text-lg">
            © 2025 Varshith V Poojary. All rights reserved.
          </p>
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="lg"
            suppressHydrationWarning={true}
            className="text-purple-400 hover:text-white hover:bg-purple-600/20 mt-4 md:mt-0 group"
          >
            <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
        </motion.div>
      </div>
    </footer>
  )
}
