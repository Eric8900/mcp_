'use client'
import { useEffect, useState } from "react";
import CategorySidebar from "./Category";
import SearchBar from "./Search";
import CardGrid from "./CardGrid";
import { useSearchParams, useRouter } from "next/navigation";

const cards = [
  {
    title: "Stripe",
    description:
      "Interact with the Stripe API. This server supports various tools to interact with different Stripe servi...",
    stars: "34,607",
    tags: ["Stripe", "API", "Payment"],
    serverid: "stripe",
  },
  {
    title: "Firecrawl",
    description:
      "A Model Context Protocol (MCP) server implementation that integrates with Firecrawl for web...",
    stars: "34,607",
    tags: ["Web", "Crawling", "MCP"],
    serverid: "firecrawl",
  },
];

export default function MCPRegistry() {
    const [selectedCategory, setSelectedCategory] = useState("All servers");
    const [searchQuery, setSearchQuery] = useState("");

    const router = useRouter();
    const searchParams = useSearchParams();
  
    useEffect(() => {
      const params = new URLSearchParams(searchParams);
      if (selectedCategory !== "All servers") {
        params.set("category", selectedCategory);
      } else {
        params.delete("category");
      }
      router.push(`?${params.toString()}`);
    }, [selectedCategory, router, searchParams]);
  
    const filteredCards = cards.filter((card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className="flex flex-col sm:flex-row min-h-screen p-6 gap-6">
        <CategorySidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="flex-1">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <CardGrid cards={filteredCards} />
        </div>
      </div>
    );
  }