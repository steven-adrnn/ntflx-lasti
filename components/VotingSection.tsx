'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Movie {
  id: number
  title: string
  votes: number
}

export function VotingSection() {
  const [movies, setMovies] = useState<Movie[]>([
    { id: 1, title: "The Matrix 5", votes: 0 },
    { id: 2, title: "Inception 2", votes: 0 },
    { id: 3, title: "Interstellar 2", votes: 0 },
  ])
  const [userVote, setUserVote] = useState<number | null>(null)

  const handleVote = (id: number) => {
    if (userVote === id) {
      // User is un-voting
      setMovies(movies.map(movie => 
        movie.id === id ? { ...movie, votes: movie.votes - 1 } : movie
      ))
      setUserVote(null)
    } else {
      // User is voting for a new movie
      setMovies(movies.map(movie => 
        movie.id === id ? { ...movie, votes: movie.votes + 1 } 
        : userVote === movie.id ? { ...movie, votes: movie.votes - 1 }
        : movie
      ))
      setUserVote(id)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-white mb-4">Vote for the Next Netflix Addition</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <Card key={movie.id} className="bg-gray-800 text-white">
            <CardHeader>
              <CardTitle>{movie.title}</CardTitle>
              <CardDescription>Cast your vote!</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Current Votes: {movie.votes}</p>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleVote(movie.id)}
                variant={userVote === movie.id ? "destructive" : "default"}
              >
                {userVote === movie.id ? "Unvote" : "Vote"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

