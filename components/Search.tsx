'use client'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
    return (
      <div className="flex items-center gap-4 mb-6">
        <Input
          placeholder="Find servers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
        <Button variant="outline">Search</Button>
      </div>
    );
  }