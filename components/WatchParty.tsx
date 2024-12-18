'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface WatchPartyProps {
  videoUrl: string
  isHost: boolean
  invitationCode?: string
  onClose: () => void
}

export function WatchParty({ videoUrl, isHost, invitationCode, onClose }: WatchPartyProps) {
  const [messages, setMessages] = useState<string[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [localInvitationCode, setLocalInvitationCode] = useState(invitationCode || '')

  useEffect(() => {
    if (isHost && !localInvitationCode) {
      setLocalInvitationCode(Math.random().toString(36).substring(7))
    }
  }, [isHost, localInvitationCode])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage])
      setNewMessage('')
      // Here you would typically send the message to other participants
    }
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex">
      <div className="w-3/4 h-full">
        <video className="w-full h-full object-contain" src={videoUrl} controls autoPlay>
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-1/4 h-full bg-gray-900 p-4 flex flex-col">
        <Button variant="secondary" onClick={onClose} className="mb-4">Close Watch Party</Button>
        {isHost && (
          <div className="mb-4">
            <p className="text-white">Invitation Code: {localInvitationCode}</p>
          </div>
        )}
        <div className="flex-grow overflow-y-auto mb-4">
          {messages.map((message, index) => (
            <p key={index} className="text-white mb-2">{message}</p>
          ))}
        </div>
        <div className="flex">
          <Input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow mr-2"
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </div>
    </div>
  )
}
