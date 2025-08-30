"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

interface TeamMember {
  id: number
  name: string
  designation: string
  image: string
}

export default function TeamSlider() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Arjun Sharma",
      designation: "Director & Producer",
      image: "/team/arjun-sharma.jpg"
    },
    {
      id: 2,
      name: "Priya Patel",
      designation: "Cinematographer",
      image: "/team/priya-patel.jpg"
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      designation: "Editor",
      image: "/team/rajesh-kumar.jpg"
    },
    {
      id: 4,
      name: "Sneha Gupta",
      designation: "Sound Designer",
      image: "/team/sneha-gupta.jpg"
    },
    {
      id: 5,
      name: "Vikram Singh",
      designation: "Assistant Director",
      image: "/team/vikram-singh.jpg"
    },
    {
      id: 6,
      name: "Anita Verma",
      designation: "Production Manager",
      image: "/team/anita-verma.jpg"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [resetTimer, setResetTimer] = useState(0)

  // Auto-slide functionality with reset capability
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isHovered, teamMembers.length, resetTimer])

  // Function to handle manual navigation and reset timer
  const handleManualNavigation = (newIndex: number) => {
    setCurrentIndex(newIndex)
    setResetTimer(prev => prev + 1) // Trigger useEffect to restart timer
  }

  const duplicatedMembers = [...teamMembers, ...teamMembers, ...teamMembers]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="text-red-600">Creative Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Talented individuals who bring passion, creativity, and expertise to every project
          </p>
        </motion.div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Desktop View - 3 cards */}
          <div className="hidden md:block">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / 3}%)`
              }}
            >
              {duplicatedMembers.map((member, index) => (
                <div
                  key={`${member.id}-${index}`}
                  className="flex-shrink-0 w-1/3 px-4"
                >
                  <TeamMemberCard member={member} index={index % 3} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile View - 1 card */}
          <div className="md:hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {duplicatedMembers.map((member, index) => (
                <div
                  key={`${member.id}-${index}`}
                  className="flex-shrink-0 w-full px-4"
                >
                  <TeamMemberCard member={member} index={0} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => handleManualNavigation(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-red-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => handleManualNavigation((currentIndex - 1 + teamMembers.length) % teamMembers.length)}
            className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            ←
          </button>
          <button
            onClick={() => handleManualNavigation((currentIndex + 1) % teamMembers.length)}
            className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

function TeamMemberCard({ member, index }: { member: any, index: number }) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center group cursor-pointer"
    >
      <div className="relative mb-6 mx-auto w-48 h-48">
        {/* Circular image container with hover effects */}
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-transparent group-hover:border-red-500 transition-all duration-500 shadow-2xl group-hover:shadow-red-500/50 group-hover:scale-105">
          {!imageError ? (
            <Image
              src={member.image}
              alt={member.name}
              width={192}
              height={192}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-red-600/30 via-yellow-500/20 to-red-800/30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-2 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map((n: string) => n[0]).join('')}
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Hover overlay with animation */}
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-red-600/80 to-yellow-500/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            className="text-white text-center"
          >
            <motion.div 
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-12 h-12 mx-auto mb-2 border-2 border-white rounded-full flex items-center justify-center"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
              </svg>
            </motion.div>
            <p className="text-xs font-medium">View Profile</p>
          </motion.div>
        </div>

        {/* Decorative ring */}
        <div className="absolute -inset-2 rounded-full border border-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Name and designation with enhanced animations */}
      <motion.div
        className="space-y-2"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-yellow-400 font-medium text-sm uppercase tracking-wider group-hover:text-yellow-300 transition-colors duration-300">
          {member.designation}
        </p>
      </motion.div>

      {/* Decorative elements */}
      <div className="relative mt-4">
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      </div>
    </motion.div>
  )
}
