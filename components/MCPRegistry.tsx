'use client'
import { useState } from "react";
import CategorySidebar from "./Category";
import SearchBar from "./Search";
import CardGrid from "./CardGrid";

const cards = [
  {
    title: "Stripe",
    author: "by Stripe, Inc.",
    description:
      "Interact with the Stripe API. This server supports various tools to interact with different Stripe servi...",
    stars: "34,607",
  },
  {
    title: "Firecrawl",
    author: "by SideGuide Technologies",
    description:
      "A Model Context Protocol (MCP) server implementation that integrates with Firecrawl for web...",
    stars: "34,607",
  },
  {
    title: "browserbase",
    author: "by Browserbase Inc.",
    description:
      "Automate browser interactions in the cloud (e.g. web navigation, data extraction, form filling, and...",
    stars: "34,607",
  },
  {
    title: "gitlab-ref",
    author: "by Anthropic, PBC",
    description:
      "GitLab project access and management. A Model Context Protocol reference server.",
    stars: "34,607",
  },
];

export default function MCPRegistry() {
    const [selectedCategory, setSelectedCategory] = useState("All servers");
    const [searchQuery, setSearchQuery] = useState("");
  
    const filteredCards = cards.filter((card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className="flex min-h-screen p-6 bg-gray-50">
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