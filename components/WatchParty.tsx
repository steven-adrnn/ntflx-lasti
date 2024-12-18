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

const randomReplies = [
  "Keren banget!",
  "Uwowww",
  "yang rambut merah itu siapa?",
  "Filmny bagus banget!",
  "Animasinya bagus banget!",
  "lagunya bagus banget!",
  "Filmnya gak menarik"
]

export function WatchParty({ videoUrl, isHost, invitationCode, onClose }: WatchPartyProps) {
  const [messages, setMessages] = useState<{ text: string, isUser: boolean }[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [localInvitationCode, setLocalInvitationCode] = useState(invitationCode || '')
  const [participants, setParticipants] = useState(isHost ? 1 : 2)

  useEffect(() => {
    if (isHost && !localInvitationCode) {
      setLocalInvitationCode(Math.random().toString(36).substring(7))
    }
  }, [isHost, localInvitationCode])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, isUser: true }])
      setNewMessage('')
      setTimeout(() => {
        const randomReply = randomReplies[Math.floor(Math.random() * randomReplies.length)]
        setMessages(prevMessages => [...prevMessages, { text: randomReply, isUser: false }])
      }, 1000 + Math.random() * 2000) 
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
        <div className="mb-4">
          <p className="text-white">Participants: {participants}</p>
          {isHost && (
            <p className="text-white">Invitation Code: {localInvitationCode}</p>
          )}
        </div>
        <div className="flex-grow overflow-y-auto mb-4">
          {messages.map((message, index) => (
            <p key={index} className={`mb-2 ${message.isUser ? 'text-blue-400' : 'text-green-400'}`}>
              {message.isUser ? 'You' : 'Friend'}: {message.text}
            </p>
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

