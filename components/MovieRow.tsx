import { MovieCard } from './MovieCard'

interface Movie {
  id: number
  title: string
  imageUrl: string
}

interface MovieRowProps {
  title: string
  movies: Movie[]
  onWatchClick: (id: number) => void
}

export function MovieRow({ title, movies, onWatchClick }: MovieRowProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            id={movie.id}
            title={movie.title}
            imageUrl={movie.imageUrl}
            onWatch={onWatchClick} 
          />
        ))}
      </div>
    </div>
  )
}
