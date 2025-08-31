"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"

interface Film {
  title: string
  description: string
  image: string
  url: string
}

export default function FilmsSection() {
  const [films, setFilms] = useState<Film[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch("https://thefilmkaar.pythonanywhere.com/projects")
        const data = await response.json()
        setFilms(data.projects)
      } catch (err) {
        setError("Failed to load films. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchFilms()
  }, [])

  return (
    <section id="films" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Our Films
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-200 font-serif">
            Discover our collection of films
          </p>
        </div>

        {/* Loading and Error States */}
        {loading && <p className="text-center text-muted-foreground">Loading films...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Films Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {films.map((film, index) => (
              <Card
                key={index}
                className={`group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500`}
              >
                <div className="relative aspect-[16/9] w-full">
                  <img
                    src={film.image}
                    alt={film.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a href={film.url} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground transform scale-0 group-hover:scale-100 transition-transform duration-300"
                      >
                        <Play className="h-6 w-6 mr-2" />
                        Watch Movie
                      </Button>
                    </a>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {film.title}
                  </h3>
                  <p className="text-muted-foreground font-serif">{film.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
