"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

// Client component that uses useSearchParams
function SearchBarContent() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize query from URL on component mount
  useEffect(() => {
    const urlQuery = searchParams.get("q") || "";
    setQuery(urlQuery);
  }, [searchParams]);

  // Update search results when query changes
  useEffect(() => {
    // Small delay to avoid too many router pushes while typing
    const timeoutId = setTimeout(() => {
      // Keep the current URL path (either /tarifler or /arama)
      if (query.trim()) {
        router.push(`${pathname}?q=${encodeURIComponent(query.trim())}`);
      } else {
        router.push(pathname);
      }
    }, 300); // 300ms delay

    return () => clearTimeout(timeoutId);
  }, [query, pathname, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to /tarifler on manual form submission
    if (query.trim()) {
      router.push(`/tarifler?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push('/tarifler');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto w-full"
    >
      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tarif ara..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="absolute right-2 p-2 text-indigo-600 hover:text-indigo-800 transition-colors"
          aria-label="Ara"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

// Fallback component for loading state
function SearchBarFallback() {
  return (
    <div className="max-w-xl mx-auto w-full">
      <div className="relative flex items-center">
        <div className="w-full h-12 rounded-lg bg-gray-200 animate-pulse"></div>
      </div>
    </div>
  );
}

// Main component with Suspense boundary
export default function SearchBar() {
  return (
    <Suspense fallback={<SearchBarFallback />}>
      <SearchBarContent />
    </Suspense>
  );
} 