"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error(data.error || "Failed to send message")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "poojaryvarshith98@gmail.com",
      href: "mailto:poojaryvarshith98@gmail.com",
      color: "text-blue-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7349027705",
      href: "tel:+917349027705",
      color: "text-green-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Udupi, Karnataka, India",
      href: "#",
      color: "text-red-400",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: "https://wa.me/917349027705",
      color: "text-green-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Container with proper padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Let's Connect</h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply have a
                conversation about technology and innovation.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 h-full">
                    <CardContent className="p-4 text-center">
                      <a
                        href={info.href}
                        className="block group"
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        <div
                          className={`inline-flex p-3 rounded-full bg-black/40 ${info.color} group-hover:scale-110 transition-transform mb-3`}
                        >
                          <info.icon className="h-5 w-5" />
                        </div>
                        <p className="text-gray-400 text-sm font-medium mb-1">{info.label}</p>
                        <p className="text-white font-semibold text-sm group-hover:text-purple-400 transition-colors break-words">
                          {info.value}
                        </p>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm text-center">
                <CardContent className="p-4">
                  <div className="text-xl sm:text-2xl font-bold text-purple-400">24h</div>
                  <div className="text-xs sm:text-sm text-gray-300 font-medium">Response Time</div>
                </CardContent>
              </Card>
              <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm text-center">
                <CardContent className="p-4">
                  <div className="text-xl sm:text-2xl font-bold text-purple-400">3+</div>
                  <div className="text-xs sm:text-sm text-gray-300 font-medium">Projects Completed</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-xl sm:text-2xl text-white">Send a Message</CardTitle>
                <p className="text-gray-400 text-sm">
                  Fill out the form below and I'll get back to you as soon as possible
                </p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-2"
                  >
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-green-300">Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-2"
                  >
                    <AlertCircle className="h-5 w-5 text-red-400" />
                    <span className="text-red-300">
                      {errorMessage ||
                        "Failed to send message. Please try again or contact me directly at poojaryvarshith98@gmail.com"}
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        suppressHydrationWarning={true}
                        className="w-full bg-black/40 border-purple-500/30 focus:border-purple-400 text-white placeholder:text-gray-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        suppressHydrationWarning={true}
                        className="w-full bg-black/40 border-purple-500/30 focus:border-purple-400 text-white placeholder:text-gray-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      suppressHydrationWarning={true}
                      className="w-full bg-black/40 border-purple-500/30 focus:border-purple-400 text-white placeholder:text-gray-500"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      suppressHydrationWarning={true}
                      className="w-full bg-black/40 border-purple-500/30 focus:border-purple-400 text-white resize-none placeholder:text-gray-500"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    suppressHydrationWarning={true}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-base sm:text-lg font-medium disabled:opacity-50 min-h-[48px]"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                    ) : (
                      <Send className="mr-2 h-5 w-5" />
                    )}
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
