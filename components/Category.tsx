'use client'

import {
  Database,
  Brain,
  Users,
  Wrench,
  Folder,
  MessageCircle,
  Handshake,
  CreditCard,
  CircleDot,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const categories = [
  { name: "All servers", icon: CircleDot },
  { name: "Analytics & Data", icon: Database },
  { name: "AI & Machine Learning", icon: Brain },
  { name: "CRM", icon: Users },
  { name: "Devtools", icon: Wrench },
  { name: "File Management", icon: Folder },
  { name: "Communication", icon: MessageCircle },
  { name: "Collaboration", icon: Handshake },
  { name: "Fintech", icon: CreditCard },
]

export default function CategorySidebar({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}) {
  return (
    <aside className="w-64 pr-6">
      <ScrollArea className="h-full pr-2">
        <ul className="space-y-2">
          {categories.map(({ name, icon: Icon }) => (
            <li key={name}>
              <Button
                variant={selectedCategory === name ? "ghost" : "ghost"}
                onClick={() => setSelectedCategory(name)}
                className="w-full justify-start gap-2"
              >
                <Icon className="w-4 h-4" />
                {name}
              </Button>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </aside>
  )
}
