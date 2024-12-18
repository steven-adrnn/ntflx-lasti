'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface WatchOptionsProps {
  movieId: number
  onWatchAlone: () => void
  onCreateWatchParty: () => void
  onJoinWatchParty: (code: string) => void
  onClose: () => void
}

export function WatchOptions({ movieId, onWatchAlone, onCreateWatchParty, onJoinWatchParty, onClose }: WatchOptionsProps) {
  const [watchPartyCode, setWatchPartyCode] = useState('')

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Watch Options</DialogTitle>
          <DialogDescription>
            Choose how you want to watch this movie.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button onClick={onWatchAlone}>Watch Alone</Button>
          <Button onClick={onCreateWatchParty}>Create Watch Party</Button>
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Enter watch party code"
              value={watchPartyCode}
              onChange={(e) => setWatchPartyCode(e.target.value)}
            />
            <Button onClick={() => onJoinWatchParty(watchPartyCode)}>Join Watch Party</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
