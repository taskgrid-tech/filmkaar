"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ApplicationModal from "@/components/application-modal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState("")

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle)
    setIsModalOpen(true)
  }
  const jobOpenings = [
    {
      title: "Film Director",
      department: "Creative",
      location: "Mumbai, India",
      type: "Full-time",
      description:
        "Lead creative vision for film projects from concept to completion. Work with producers, writers, and crew to bring stories to life.",
    },
    {
      title: "Video Editor",
      department: "Post-Production",
      location: "Mumbai, India",
      type: "Full-time",
      description:
        "Edit and assemble raw footage into polished final products. Proficiency in Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve required.",
    },
    {
      title: "Cinematographer",
      department: "Production",
      location: "Mumbai, India",
      type: "Contract",
      description:
        "Capture stunning visuals that support the narrative. Experience with various camera systems and lighting techniques essential.",
    },
    {
      title: "Sound Engineer",
      department: "Audio",
      location: "Mumbai, India",
      type: "Full-time",
      description:
        "Handle audio recording, mixing, and post-production. Knowledge of Pro Tools, Logic Pro, and field recording equipment required.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Join Our Creative Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of creating exceptional cinematic experiences. We're looking for passionate individuals who share
              our vision for storytelling excellence.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-red-400">Why Work With Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎬</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Creative Freedom</h3>
                <p className="text-gray-300">Express your artistic vision in a collaborative environment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
                <p className="text-gray-300">Advance your career with diverse projects and mentorship</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Award-Winning Work</h3>
                <p className="text-gray-300">Be part of projects that make a lasting impact</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-red-400">Current Openings</h2>
            <div className="grid gap-6 max-w-4xl mx-auto">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800 hover:border-red-500 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-white">{job.title}</CardTitle>
                        <CardDescription className="text-gray-400">
                          {job.department} • {job.location} • {job.type}
                        </CardDescription>
                      </div>
                      <Button 
                        onClick={() => handleApplyClick(job.title)}
                        className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center bg-gray-900 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-red-400">Don't See Your Role?</h2>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals. Send us your portfolio and let's discuss how you can
              contribute to our team.
            </p>
            <Button 
              onClick={() => handleApplyClick("General Application")}
              className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600"
            >
              Send Your Portfolio
            </Button>
          </div>
        </div>
      </main>

      <Footer />
      
      {/* Application Modal */}
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={selectedJob}
      />
    </div>
  )
}
