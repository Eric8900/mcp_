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

export const categories = [
  { name: "All servers", value: "All servers", icon: CircleDot },
  { name: "Analytics & Data", value: "analyticsdata", icon: Database },
  { name: "AI & Machine Learning", value: "aimachinelearning", icon: Brain },
  { name: "CRM", value: "crm", icon: Users },
  { name: "Devtools", value: "devtools", icon: Wrench },
  { name: "File Management", value: "filemanagement", icon: Folder },
  { name: "Communication", value: "communication", icon: MessageCircle },
  { name: "Collaboration", value: "collaboration", icon: Handshake },
  { name: "Fintech", value: "fintech", icon: CreditCard },
]

export default function CategorySidebar({
  setSelectedCategory,
}: {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}) {
  return (
    <aside className="sm:w-64 w-full pr-6 sm:sticky sm:top-36 sm:h-[calc(100vh-144px)]">
      <ScrollArea className="h-full w-full pr-2">
        <h1 className="text-lg font-semibold mb-4">
          <BoxIcon className="inline-block w-4 h-4 mr-1" />
          Categories
          </h1>
        <ul className="space-y-2">
          {categories.map(({ name, value, icon: Icon }) => (
            <li key={name}>
              <Button
                variant={"ghost"}
                onClick={() => setSelectedCategory(value)}
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
