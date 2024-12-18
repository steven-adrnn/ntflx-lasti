import Link from 'next/link'
import { Bell, Search, User } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black to-transparent">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <Link href="/" className="text-red-600 font-bold text-4xl mr-8">NETFLIX</Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
            <Link href="/tv-shows" className="text-white hover:text-gray-300">TV Shows</Link>
            <Link href="/movies" className="text-white hover:text-gray-300">Movies</Link>
            <Link href="/new-and-popular" className="text-white hover:text-gray-300">New & Popular</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="text-white w-6 h-6 cursor-pointer" />
          <Bell className="text-white w-6 h-6 cursor-pointer" />
          <User className="text-white w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  )
}
