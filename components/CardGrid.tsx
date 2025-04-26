'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Server } from "@/lib/actions";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { categories } from "@/components/Category";
import { CardSkeleton } from "./CardSkeleton";

export default function CardGrid({ cards, loading }: { cards: Server[], loading: boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {cards.map((card) => (
        <motion.div
          key={card.search_id}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href={`/server/${card.search_id?.toLowerCase()}`}>
            <Card className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                {card.logo_url ? (
                  <Image
                    src={card.logo_url}
                    alt={`${card.title} logo`}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                ) : (
                  <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
                )}
                <h3 className="text-md font-semibold text-gray-900 truncate">
                  {card.title}
                </h3>
                <div className="ml-auto text-sm text-gray-500 flex items-center gap-1">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  {card.stars?.toLocaleString() ?? 0}
                </div>
              </div>
              <CardContent className="p-0">
                <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {card.tags?.map((tag) => {
                    const categoryMatch = categories.find(
                      (category) => category.value === tag.toLowerCase()
                    );
                    return (
                      <span
                        key={tag}
                        className="inline-block text-xs text-gray-600 border border-gray-300 rounded-full px-2 py-0.5"
                      >
                        {categoryMatch?.name || tag}
                      </span>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
      {loading &&
        Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
    </div>
  );
}
