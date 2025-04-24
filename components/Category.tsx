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
  BoxIcon,
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
    <aside className="sm:w-64 w-full pr-6">
      <ScrollArea className="h-full w-full pr-2">
        <h1 className="text-lg font-semibold mb-4">
          <BoxIcon className="inline-block w-4 h-4 mr-1" />
          Categories
          </h1>
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
