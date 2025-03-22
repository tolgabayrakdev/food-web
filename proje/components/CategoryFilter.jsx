"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Client component that uses useSearchParams
function CategoryFilterContent({ categories, selectedCategory }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const handleCategoryChange = (categorySlug) => {
    const params = new URLSearchParams(searchParams);
    
    // Reset to page 1 when changing categories
    params.set("sayfa", "1");
    
    if (categorySlug) {
      params.set("kategori", categorySlug);
    } else {
      params.delete("kategori");
    }
    
    router.push(`${pathname}?${params.toString()}`);
  };
  
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Kategoriler</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleCategoryChange("")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !selectedCategory
              ? "bg-indigo-600 text-white"
              : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
          }`}
        >
          Tümü
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.category
                ? "bg-indigo-600 text-white"
                : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
            }`}
          >
            {category.categoryName}
          </button>
        ))}
      </div>
    </div>
  );
}

// Fallback component for loading state
function CategoryFilterFallback() {
  return (
    <div className="mb-8">
      <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-4"></div>
      <div className="flex flex-wrap gap-2">
        <div className="h-10 w-20 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="h-10 w-24 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="h-10 w-28 bg-gray-200 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}

// Main component with Suspense boundary
export default function CategoryFilter(props) {
  return (
    <Suspense fallback={<CategoryFilterFallback />}>
      <CategoryFilterContent {...props} />
    </Suspense>
  );
} 