"use client"

import { motion } from "framer-motion"
import { Camera, Film, Award, Users } from "lucide-react"

export default function AboutSection() {
  const stats = [
    { icon: Film, number: "50+", label: "Films Produced" },
    { icon: Award, number: "25+", label: "Awards Won" },
    { icon: Users, number: "100+", label: "Happy Clients" },
    { icon: Camera, number: "10+", label: "Years Experience" },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-red-600">The Filmkaar Production</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Hi there! 👋 At Filmkaar, we believe that stories have the power to inspire, provoke thought, and drive change. As a dedicated film production company, our passion lies in creating impactful short films that resonate with audiences from diverse backgrounds.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Most of our projects are short films designed to inspire reflection, spark meaningful conversations, and bring important narratives to the forefront. Our mission is rooted in the belief that by fostering a more inclusive society, we can ensure that everyone’s stories are heard, valued, and empowered.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We are committed to uncovering untold stories, advocating for equality, and using film as a catalyst for social change. At Filmkaar, we don’t just create films—we create movements, one frame at a time.

              <br />Join us in shaping a future filled with inspiration and positivity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video bg-gradient-to-br from-red-600/20 to-yellow-500/20 rounded-lg overflow-hidden border border-red-600/30">
              <img
                src="/film-production-team.png"
                alt="The Filmkaar Production Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h4 className="text-white text-xl font-semibold">Our Creative Team</h4>
                <p className="text-gray-300">Bringing visions to life</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-600/10 to-transparent p-8 rounded-lg border border-red-600/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To create exceptional visual content that inspires, entertains, and connects with audiences on a profound
              level. We strive to push the boundaries of storytelling through innovative filmmaking techniques and
              unwavering dedication to our craft.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-yellow-500/10 to-transparent p-8 rounded-lg border border-yellow-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be recognized as a leading production house that consistently delivers world-class content, fostering
              creativity and innovation while building lasting relationships with clients, partners, and audiences
              worldwide.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
