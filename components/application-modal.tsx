"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

interface ApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  jobTitle: string
}

export default function ApplicationModal({ isOpen, onClose, jobTitle }: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredGenres: [] as string[],
    experienceLevel: "",
    portfolioLink: "",
    socialPlatformLink: "",
    sampleWorkLink: "",
    resume: null as File | null
  })

  const genres = ["Drama", "Comedy", "Thriller", "Horror", "Sci-Fi", "Other"]
  const experienceLevels = ["Beginner", "Intermediate", "Expert"]

  const handleGenreChange = (genre: string) => {
    setFormData(prev => ({
      ...prev,
      preferredGenres: prev.preferredGenres.includes(genre)
        ? prev.preferredGenres.filter(g => g !== genre)
        : [...prev.preferredGenres, genre]
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, resume: file }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.socialPlatformLink || !formData.experienceLevel) {
      alert("Please fill in all required fields")
      return
    }

    // Here you would typically send the data to your backend
    console.log("Application submitted:", { ...formData, jobTitle })
    alert("Application submitted successfully!")
    
    // Reset form and close modal
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      preferredGenres: [],
      experienceLevel: "",
      portfolioLink: "",
      socialPlatformLink: "",
      sampleWorkLink: "",
      resume: null
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
            <div>
              <CardTitle className="text-2xl text-white">Apply for Position</CardTitle>
              <p className="text-red-400 text-lg font-medium mt-1">{jobTitle}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-white h-6 w-6 p-0"
            >
              <X size={20} />
            </Button>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Preferred Genres */}
              <div>
                <label className="block text-white text-sm font-medium mb-3">
                  Preferred Genres
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {genres.map((genre) => (
                    <label key={genre} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.preferredGenres.includes(genre)}
                        onChange={() => handleGenreChange(genre)}
                        className="w-4 h-4 text-red-500 bg-gray-800 border-gray-600 rounded focus:ring-red-500 focus:ring-2"
                      />
                      <span className="text-gray-300 text-sm">{genre}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-white text-sm font-medium mb-3">
                  Experience Level <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  {experienceLevels.map((level) => (
                    <label key={level} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="experienceLevel"
                        value={level}
                        checked={formData.experienceLevel === level}
                        onChange={(e) => setFormData(prev => ({ ...prev, experienceLevel: e.target.value }))}
                        className="w-4 h-4 text-red-500 bg-gray-800 border-gray-600 focus:ring-red-500 focus:ring-2"
                      />
                      <span className="text-gray-300 text-sm">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Portfolio Link */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Portfolio Link
                </label>
                <input
                  type="url"
                  value={formData.portfolioLink}
                  onChange={(e) => setFormData(prev => ({ ...prev, portfolioLink: e.target.value }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="https://your-portfolio.com"
                />
              </div>

              {/* Social Platform Link */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Social Platform Link (LinkedIn/Instagram) <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  required
                  value={formData.socialPlatformLink}
                  onChange={(e) => setFormData(prev => ({ ...prev, socialPlatformLink: e.target.value }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="https://linkedin.com/in/yourprofile or https://instagram.com/yourprofile"
                />
              </div>

              {/* Sample Work Link */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Sample Work Link
                </label>
                <input
                  type="url"
                  value={formData.sampleWorkLink}
                  onChange={(e) => setFormData(prev => ({ ...prev, sampleWorkLink: e.target.value }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="https://link-to-your-work.com"
                />
              </div>

              {/* Upload Resume */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Upload Resume
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:bg-red-500 file:text-white hover:file:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <p className="text-gray-400 text-xs mt-1">Accepted formats: PDF, DOC, DOCX</p>
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600"
                >
                  Submit Application
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
