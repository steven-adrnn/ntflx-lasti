import Image from 'next/image'
import { Button } from "@/components/ui/button"

interface MovieCardProps {
  id: number
  title: string
  imageUrl: string
  onWatch: (id: number) => void
}

export function MovieCard({ id, title, imageUrl, onWatch }: MovieCardProps) {
  return (
    <div className="relative w-[300px] group">
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={169}
        className="rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-200 flex items-center justify-center">
        <Button 
          variant="secondary" 
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onWatch(id);
          }}
        >
          Watch
        </Button>
      </div>
      <p className="mt-2 text-sm text-white">{title}</p>
    </div>
  )
}
