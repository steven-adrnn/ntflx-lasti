'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { MovieRow } from '@/components/MovieRow'
import { VotingSection } from '@/components/VotingSection'
import { WatchOptions } from '@/components/WatchOptions'
import { FullScreenPlayer } from '@/components/FullScreenPlayer'
import { WatchParty } from '@/components/WatchParty'

interface Movie {
  id: number
  title: string
  imageUrl: string
  videoUrl: string
}

const trendingMovies: Movie[] = [
  { id: 1, title: "Big Buck Bunny", imageUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
  { id: 2, title: "Elephant Dream", imageUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
  { id: 3, title: "For Bigger Blazes", imageUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
  { id: 4, title: "For Bigger Escapes", imageUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
  { id: 5, title: "For Bigger Fun", imageUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" },
]

const topRatedMovies: Movie[] = [
  { id: 6, title: "For Bigger Joyrides", imageUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
  { id: 7, title: "For Bigger Meltdowns", imageUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" },
  { id: 8, title: "Sintel", imageUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
  { id: 9, title: "Subaru Outback On Street And Dirt", imageUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" },
  { id: 10, title: "Tears of Steel", imageUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
]

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const [isWatchOptionsOpen, setIsWatchOptionsOpen] = useState(false)
  const [isFullScreenPlayerOpen, setIsFullScreenPlayerOpen] = useState(false)
  const [isWatchPartyOpen, setIsWatchPartyOpen] = useState(false)
  const [isWatchPartyHost, setIsWatchPartyHost] = useState(false)
  const [watchPartyCode, setWatchPartyCode] = useState('')

  const handleWatchClick = (movieId: number) => {
    const movie = [...trendingMovies, ...topRatedMovies].find(m => m.id === movieId);
    if (movie) {
      setSelectedMovie(movie);
      setIsWatchOptionsOpen(true);
    }
  };

  const handleWatchAlone = () => {
    if (selectedMovie) {
      setIsFullScreenPlayerOpen(true)
    }
    setIsWatchOptionsOpen(false)
  }

  const handleCreateWatchParty = () => {
    setIsWatchPartyHost(true)
    setIsWatchPartyOpen(true)
    setIsWatchOptionsOpen(false)
  }

  const handleJoinWatchParty = (code: string) => {
    setWatchPartyCode(code)
    setIsWatchPartyHost(false)
    setIsWatchPartyOpen(true)
    setIsWatchOptionsOpen(false)
  }

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <MovieRow title="Trending Now" movies={trendingMovies} onWatchClick={handleWatchClick} />
          <MovieRow title="Top Rated" movies={topRatedMovies} onWatchClick={handleWatchClick} />
          <VotingSection />
        </div>
      </main>
      {isWatchOptionsOpen && selectedMovie && (
        <WatchOptions
          movieId={selectedMovie.id}
          onWatchAlone={handleWatchAlone}
          onCreateWatchParty={handleCreateWatchParty}
          onJoinWatchParty={handleJoinWatchParty}
          onClose={() => setIsWatchOptionsOpen(false)}
        />
      )}
      {selectedMovie && isFullScreenPlayerOpen && (
        <FullScreenPlayer
          videoUrl={selectedMovie.videoUrl}
          onClose={() => setIsFullScreenPlayerOpen(false)}
        />
      )}
      {selectedMovie && isWatchPartyOpen && (
        <WatchParty
          videoUrl={selectedMovie.videoUrl}
          isHost={isWatchPartyHost}
          invitationCode={isWatchPartyHost ? undefined : watchPartyCode}
          onClose={() => setIsWatchPartyOpen(false)}
        />
      )}
    </div>
  )
}
