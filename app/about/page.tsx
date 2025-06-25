"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, User, Calendar, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function AboutPage() {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null)

  const education = [
    {
      year: "2022–2025",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "St Mary's College, Shriva",
      university: "Mangalore University",
      status: "Completed",
    },
    {
      year: "2020–2022",
      degree: "Pre-University Course (PU)",
      institution: "Poorna Prajna PU College, Admar",
      percentage: "75%",
      status: "Completed",
    },
    {
      year: "2020",
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Mahalakshmi English Medium School, Uchila",
      percentage: "81.28%",
      status: "Completed",
    },
  ]

  const skills = [
    { name: "HTML/CSS", level: 90, color: "bg-orange-500" },
    { name: "JavaScript", level: 85, color: "bg-yellow-500" },
    { name: "PHP", level: 80, color: "bg-purple-500" },
    { name: "MySQL", level: 75, color: "bg-blue-500" },
    { name: "Communication", level: 95, color: "bg-green-500" },
    { name: "Problem Solving", level: 88, color: "bg-red-500" },
  ]

  const certifications = [
    {
      title: "Microsoft Copilot for Productivity",
      issuer: "Microsoft & LinkedIn",
      image: "/images/certificates/microsoft-copilot.jpg",
      link: "#",
    },
    {
      title: "Data Analytics & Visualization Job Simulation",
      issuer: "Accenture",
      image: "/images/certificates/accenture-analytics.jpg",
      link: "#",
    },
    {
      title: "Programming Fundamentals Using Python",
      issuer: "Infosys",
      image: "/images/certificates/python-programming.jpg",
      link: "#",
    },
    {
      title: "Communication Skills",
      issuer: "TCS iON",
      image: "/images/certificates/communication-skills.jpg",
      link: "#",
    },
  ]

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
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover my journey, skills, and passion for creating innovative digital solutions
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-400">
                <User className="h-6 w-6" />
                Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                A goal-driven and dynamic BCA graduate well-versed in full-stack development and digital technologies.
                Known for quick learning, problem-solving, and strong communication skills. Adaptable to diverse roles
                and work cultures with a consistent growth mindset.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Demonstrates great problem-solving skills, teamwork, and growth mindset — a perfect fit for high-speed,
                global working cultures. Eager to pursue diverse career paths where learning, responsibility, and
                professional development are encouraged.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-purple-400" />
            Education Timeline
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="relative"
              >
                <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-purple-400" />
                        <span className="text-purple-400 font-semibold">{edu.year}</span>
                      </div>
                      <Badge variant="secondary">{edu.status}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{edu.degree}</h3>
                    <p className="text-gray-400 mb-1">{edu.institution}</p>
                    {edu.university && <p className="text-gray-500 text-sm mb-2">{edu.university}</p>}
                    {edu.percentage && <p className="text-green-400 font-semibold">Score: {edu.percentage}</p>}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-white">Skills & Expertise</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-white text-lg">{skill.name}</span>
                      <span className="text-purple-400 font-bold">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-3" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-white">
            <Award className="h-8 w-8 text-purple-400" />
            Certifications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-colors overflow-hidden">
                  <div
                    className="relative h-48 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedCertificate(index)}
                  >
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/300x200/6366f1/ffffff?text=${encodeURIComponent(cert.title)}`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-lg mb-2">{cert.title}</h3>
                        <p className="text-purple-400 font-medium">{cert.issuer}</p>
                      </div>
                    </div>
                    <Button
                      onClick={() => setSelectedCertificate(index)}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    >
                      Open Certificate
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificate Modal */}
        {selectedCertificate !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 border border-purple-500/30 rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 z-10 text-white hover:text-purple-400 bg-black/50 hover:bg-black/70"
              >
                <X className="h-6 w-6" />
              </Button>
              <div className="p-4">
                <img
                  src={certifications[selectedCertificate].image || "/placeholder.svg"}
                  alt={certifications[selectedCertificate].title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/800x600/6366f1/ffffff?text=${encodeURIComponent(certifications[selectedCertificate].title)}`
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
