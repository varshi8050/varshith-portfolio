"use client"

import { motion } from "framer-motion"
import { ExternalLink, Calendar, Users, CreditCard, MapPin, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Mahadevi Holidays",
      subtitle: "Full-Stack Travel Booking System",
      description:
        "A comprehensive travel booking platform that revolutionizes how customers plan and book their trips.",
      longDescription:
        "Built a full-featured travel booking platform where users can book fixed packages or create custom trips with real-time vehicle availability checks. The system includes a sophisticated role-based admin panel for managing bookings, users, vehicles, and payments. Features a staged payment process that activates only after admin approval, auto-generated downloadable invoices with custom branding, and secure authentication with password reset functionality.",
      image: "/images/projects/mahadevi-holidays.jpg",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Bootstrap"],
      features: [
        "Custom trip planning with real-time vehicle checks",
        "Role-based admin dashboard",
        "Staged payment processing",
        "Auto-generated branded invoices",
        "Secure authentication system",
        "Session management and password reset",
      ],
      category: "Full-Stack",
      status: "Completed",
      icon: MapPin,
      showButtons: false, // Hide buttons for this project
      liveUrl: "", // Add your live URL here when available
    },
    {
      id: 2,
      title: "SMC Food Fiesta",
      subtitle: "College Event Stall Management",
      description: "A dynamic web system designed for managing food stalls during college festivals and events.",
      longDescription:
        "Designed and developed a comprehensive web system for food stall listings during college fest events. The platform features dynamic image-based menus, logo upload capabilities, and a clean, intuitive layout. Includes a powerful admin dashboard for complete CRUD operations on stall data, WhatsApp integration for direct communication and pre-orders, and a fully responsive design that works seamlessly across all devices.",
      image: "/images/projects/smc-food-fiesta.jpg",
      technologies: ["PHP", "MySQL", "JavaScript", "CSS3", "WhatsApp API"],
      features: [
        "Dynamic image-based menu system",
        "Logo upload and management",
        "Admin CRUD operations dashboard",
        "WhatsApp integration for orders",
        "Fully responsive design",
        "Real-time stall updates",
      ],
      category: "Web Application",
      status: "Completed",
      icon: Users,
      showButtons: true, // Show buttons for this project
      liveUrl: "https://smcfoodfiesta.infinityfreeapp.com", // 👈 ADD YOUR LIVE URL HERE
    },
    {
      id: 3,
      title: "SMPL Cricket League",
      subtitle: "Player Registration System",
      description:
        "A streamlined registration platform for cricket league participants with integrated payment processing.",
      longDescription:
        "Developed a user-friendly registration platform with integrated ₹200 payment processing for cricket league participants. Players can register with their preferred role/category, personal details, and profile images. The system includes a comprehensive admin panel with advanced filtering capabilities by category and gender, Excel export functionality for filtered registration data, and clean categorization system for efficient player management.",
      image: "/images/projects/smpl-cricket.jpg",
      technologies: ["PHP", "MySQL", "JavaScript", "Payment Gateway", "Excel Export"],
      features: [
        "Integrated payment processing (₹200)",
        "Role and category-based registration",
        "Profile image upload system",
        "Advanced admin filtering system",
        "Excel export of registration data",
        "Clean player categorization",
      ],
      category: "Registration System",
      status: "Completed",
      icon: CreditCard,
      showButtons: true, // Show buttons for this project
      liveUrl: "https://smcpremireleague.wuaze.com", // 👈 ADD YOUR LIVE URL HERE
    },
  ]

  const categories = ["All", "Full-Stack", "Web Application", "Registration System"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of innovative web applications and digital solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
              } transition-all duration-300`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 h-full cursor-pointer overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/500x300/6366f1/ffffff?text=${encodeURIComponent(project.title)}`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <project.icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-purple-600/80 text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-purple-400 font-medium">{project.subtitle}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-purple-400/50 text-purple-300">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs border-purple-400/50 text-purple-300">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {project.showButtons && (
                    <div className="flex gap-2 pt-4">
                      <Button
                        size="sm"
                        onClick={() => setSelectedProject(project.id)}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex-1"
                      >
                        View Details
                      </Button>
                      {/* 👇 THIS IS WHERE THE EXTERNAL LINK BUTTON GETS ITS URL */}
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                        disabled={!project.liveUrl}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  {!project.showButtons && (
                    <div className="pt-4">
                      <Button
                        size="sm"
                        onClick={() => setSelectedProject(project.id)}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white w-full"
                      >
                        View Details
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center p-2 sm:p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 border border-purple-500/30 rounded-lg w-full max-w-6xl my-4 sm:my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find((p) => p.id === selectedProject)!
                return (
                  <div className="relative">
                    {/* Close Button - Fixed Position */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 text-gray-400 hover:text-white bg-black/50 hover:bg-black/70 rounded-full w-8 h-8 sm:w-10 sm:h-10 p-0"
                    >
                      <X className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>

                    <div className="p-3 sm:p-6 lg:p-8">
                      {/* Header */}
                      <div className="mb-4 sm:mb-6 pr-8 sm:pr-12">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">{project.title}</h2>
                        <p className="text-purple-400 text-sm sm:text-base lg:text-lg">{project.subtitle}</p>
                      </div>

                      {/* Project Image - Full Width and Responsive */}
                      <div className="mb-4 sm:mb-6 w-full">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-auto object-contain rounded-lg shadow-lg"
                          style={{ maxHeight: "70vh" }}
                          onError={(e) => {
                            e.currentTarget.src = `https://via.placeholder.com/800x400/6366f1/ffffff?text=${encodeURIComponent(project.title)}`
                          }}
                        />
                      </div>

                      {/* Content Grid - Responsive */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                        {/* Left Column */}
                        <div className="space-y-4 sm:space-y-6">
                          <div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Project Overview</h3>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                              {project.longDescription}
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Key Features</h3>
                            <ul className="space-y-2">
                              {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                                  <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-4 sm:space-y-6">
                          <div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="outline"
                                  className="border-purple-400/50 text-purple-300 text-xs sm:text-sm"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 flex-shrink-0" />
                              <span className="text-gray-300 text-sm sm:text-base">Status: {project.status}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge className="bg-purple-600 text-xs sm:text-sm">{project.category}</Badge>
                            </div>
                          </div>

                          <div className="pt-2 sm:pt-4">
                            {project.showButtons && project.liveUrl ? (
                              /* 👇 THIS IS WHERE THE LIVE DEMO BUTTON IN MODAL GETS ITS URL */
                              <Button
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm sm:text-base py-2 sm:py-3"
                                onClick={() => window.open(project.liveUrl, "_blank")}
                              >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </Button>
                            ) : (
                              <div className="text-center text-gray-400 text-sm">
                                Project details available upon request
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
