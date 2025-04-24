'use client'
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
interface Card {
  title: string;
  author: string;
  description: string;
  installs: string;
}

export default function CardGrid({ cards }: { cards: Card[] }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.map((card) => (
          <motion.div
            key={card.title}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-white shadow-md">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{card.author}</p>
                <p className="text-sm text-gray-700 mb-4">{card.description}</p>
                <p className="text-xs text-gray-500">{card.installs}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    );
  }