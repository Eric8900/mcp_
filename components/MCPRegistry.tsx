'use client'
import { useEffect, useState, useCallback } from "react";
import CategorySidebar from "./Category";
import SearchBar from "./Search";
import CardGrid from "./CardGrid";
import { useSearchParams, useRouter } from "next/navigation";
import { Server, getNextServers } from "@/lib/actions";

export default function MCPRegistry() {
  const [selectedCategory, setSelectedCategory] = useState("All servers");
  const [searchQuery, setSearchQuery] = useState("");
  const [servers, setServers] = useState<Server[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const router = useRouter();
  const searchParams = useSearchParams();

  const fetchServers = useCallback(async (pageNum: number) => {
    setLoading(true);
    const fetchedServers = await getNextServers(pageNum);
    if (fetchedServers.length === 0) {
      setHasMore(false);
    } else {
      setServers(prev => [...prev, ...fetchedServers]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchServers(0);
  }, [fetchServers]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (selectedCategory !== "All servers") {
      params.set("category", selectedCategory);
    } else {
      params.delete("category");
    }
    router.push(`?${params.toString()}`);
  }, [selectedCategory, router, searchParams]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 400 >= document.documentElement.offsetHeight && !loading && hasMore) {
        setPage(prev => prev + 20);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  useEffect(() => {
    if (page > 0) {
      fetchServers(page);
    }
  }, [page, fetchServers]);

  const filteredServers = servers.filter(server => {
    const matchesSearch = server.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      server.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All servers" ||
      server.tags?.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col sm:flex-row min-h-screen p-6 gap-6">
      <CategorySidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="flex-1">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CardGrid cards={filteredServers} loading={loading}/>
        {!hasMore && <div className="text-center py-4">You&apos;ve reached the end!</div>}
      </div>
    </div>
  );
}
