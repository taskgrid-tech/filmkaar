// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Play, Calendar, Clock } from "lucide-react"

// interface Film {
//   id: number
//   title: string
//   genre: string
//   year: number
//   duration: string
//   description: string
//   posterUrl: string
//   trailerUrl: string
// }

// const films: Film[] = [
//   {
//     id: 1,
//     title: "Shadows of Tomorrow",
//     genre: "Sci-Fi Drama",
//     year: 2024,
//     duration: "2h 15m",
//     description: "A thought-provoking journey into the future of humanity",
//     posterUrl: "/placeholder.jpg?height=600&width=400&query=sci-fi movie poster shadows of tomorrow",
//     trailerUrl: "/placeholder.mp4?height=720&width=1280&query=sci-fi movie trailer",
//   },
//   {
//     id: 2,
//     title: "The Last Symphony",
//     genre: "Musical Drama",
//     year: 2023,
//     duration: "1h 58m",
//     description: "A maestro's final performance that changes everything",
//     posterUrl: "/placeholder.jpg?height=600&width=400&query=musical drama movie poster symphony",
//     trailerUrl: "/placeholder.mp4?height=720&width=1280&query=musical drama movie trailer",
//   },
//   {
//     id: 3,
//     title: "Urban Legends",
//     genre: "Thriller",
//     year: 2023,
//     duration: "2h 5m",
//     description: "When myths become reality in the heart of the city",
//     posterUrl: "/placeholder.jpg?height=600&width=400&query=urban thriller movie poster dark city",
//     trailerUrl: "/placeholder.mp4?height=720&width=1280&query=urban thriller movie trailer",
//   },
//   {
//     id: 4,
//     title: "Eternal Bonds",
//     genre: "Romance",
//     year: 2022,
//     duration: "1h 45m",
//     description: "A love story that transcends time and space",
//     posterUrl: "/placeholder.jpg?height=600&width=400&query=romantic movie poster eternal love",
//     trailerUrl: "/placeholder.mp4?height=720&width=1280&query=romantic movie trailer",
//   },
//   {
//     id: 5,
//     title: "The Heist",
//     genre: "Action",
//     year: 2022,
//     duration: "2h 20m",
//     description: "The perfect crime meets the perfect storm",
//     posterUrl: "/placeholder.jpg?height=600&width=400&query=action heist movie poster",
//     trailerUrl: "/placeholder.mp4?height=720&width=1280&query=action heist movie trailer",
//   },
//   {
//     id: 6,
//     title: "Whispers in the Wind",
//     genre: "Mystery",
//     year: 2021,
//     duration: "1h 52m",
//     description: "Some secrets are meant to stay buried",
//     posterUrl: "/placeholder.jpg?height=600&width=400&query=mystery movie poster whispers wind",
//     trailerUrl: "/placeholder.mp4?height=720&width=1280&query=mystery movie trailer",
//   },
// ]

// const genres = ["All", "Sci-Fi Drama", "Musical Drama", "Thriller", "Romance", "Action", "Mystery"]

// export default function FilmsSection() {
//   const [selectedGenre, setSelectedGenre] = useState("All")
//   const [hoveredFilm, setHoveredFilm] = useState<number | null>(null)

//   const filteredFilms = selectedGenre === "All" ? films : films.filter((film) => film.genre === selectedGenre)

//   return (
//     <section id="films" className="py-20 bg-card">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">Our Films</h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-200 font-serif">
//             Discover our collection of award-winning films that have captivated audiences worldwide
//           </p>
//         </div>

//         {/* Genre Filter */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animate-delay-400">
//           {genres.map((genre) => (
//             <Button
//               key={genre}
//               variant={selectedGenre === genre ? "default" : "outline"}
//               onClick={() => setSelectedGenre(genre)}
//               className={`transition-all duration-300 ${
//                 selectedGenre === genre
//                   ? "bg-primary text-primary-foreground"
//                   : "hover:bg-primary/10 hover:text-primary"
//               }`}
//             >
//               {genre}
//             </Button>
//           ))}
//         </div>

//         {/* Films Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredFilms.map((film, index) => (
//             <Card
//               key={film.id}
//               className={`group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in animate-delay-${
//                 ((index % 3) + 1) * 200
//               }`}
//               onMouseEnter={() => setHoveredFilm(film.id)}
//               onMouseLeave={() => setHoveredFilm(null)}
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={film.posterUrl || "/placeholder.svg"}
//                   alt={film.title}
//                   className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                   <Button
//                     size="lg"
//                     className="bg-primary hover:bg-primary/90 text-primary-foreground transform scale-0 group-hover:scale-100 transition-transform duration-300"
//                   >
//                     <Play className="h-6 w-6 mr-2" />
//                     Watch Trailer
//                   </Button>
//                 </div>

//                 {/* Genre Badge */}
//                 <div className="absolute top-4 left-4">
//                   <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
//                     {film.genre}
//                   </span>
//                 </div>
//               </div>

//               <CardContent className="p-6">
//                 <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
//                   {film.title}
//                 </h3>
//                 <p className="text-muted-foreground mb-4 font-serif">{film.description}</p>

//                 <div className="flex items-center gap-4 text-sm text-muted-foreground">
//                   <div className="flex items-center gap-1">
//                     <Calendar className="h-4 w-4" />
//                     {film.year}
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Clock className="h-4 w-4" />
//                     {film.duration}
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Load More Button */}
//         <div className="text-center mt-12">
//           <Button
//             size="lg"
//             variant="outline"
//             className="border-primary text-primary hover:bg-primary hover:text-primary-foreground animate-fade-in-up bg-transparent"
//           >
//             Load More Films
//           </Button>
//         </div>
//       </div>
//     </section>
//   )
// }

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
