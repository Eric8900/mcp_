'use client'

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isLoading?: boolean;
}

export default function SearchBar({ searchQuery, setSearchQuery, isLoading }: SearchBarProps) {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search servers..."
        className="w-full p-2 border rounded-lg"
      />
      {isLoading && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <div className="animate-spin h-5 w-5 border-2 border-gray-500 border-t-transparent rounded-full" />
        </div>
      )}
    </div>
  );
}