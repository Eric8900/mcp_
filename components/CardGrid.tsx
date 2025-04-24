'use client'
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
interface Card {
  title: string;
  description: string;
  stars: string;
  tags: string[];
  serverid: string;
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
          <Link href={`/server/${card.serverid.toLowerCase()}`}>
            <Card className="bg-white shadow-md">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{card.description}</p>
                <p className="text-xs text-gray-500">{card.stars} Stars</p>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}