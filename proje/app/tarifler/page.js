"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import RecipeCard from "@/components/RecipeCard";
import Pagination from "@/components/Pagination";
import CategoryFilter from "@/components/CategoryFilter";
import { getAllRecipes, getAllCategories, paginateRecipes, searchRecipes } from "@/lib/recipes";

// Note: Metadata must be in a separate server component since this is a client component
// This is for reference and needs to be implemented in a separate layout.js or similar

export default function RecipesPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const currentPage = parseInt(searchParams.get("sayfa") || "1", 10);
  const categorySlug = searchParams.get("kategori") || "";
  const RECIPES_PER_PAGE = 9;
  
  // State for recipes and pagination
  const [recipes, setRecipes] = useState([]);
  const [pagination, setPagination] = useState({
    recipes: [],
    totalPages: 1,
    currentPage: 1,
    totalRecipes: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  
  // Get all categories for the filter
  const categories = getAllCategories();
  
  useEffect(() => {
    setIsLoading(true);
    
    // Small timeout to allow for better UX during typing
    const timeoutId = setTimeout(() => {
      let filteredRecipes = [];
      
      // Handle search query first
      if (query) {
        filteredRecipes = searchRecipes(query);
        // Apply category filter to search results if needed
        if (categorySlug) {
          filteredRecipes = filteredRecipes.filter(recipe => recipe.categorySlug === categorySlug);
        }
      } else {
        // If no search query, get recipes by category or all recipes
        filteredRecipes = getAllRecipes(categorySlug || null);
      }
      
      setRecipes(filteredRecipes);
      
      // Apply pagination to the filtered recipes
      const paginatedResult = paginateRecipes(filteredRecipes, currentPage, RECIPES_PER_PAGE);
      setPagination(paginatedResult);
      setIsLoading(false);
    }, 150);
    
    return () => clearTimeout(timeoutId);
  }, [query, categorySlug, currentPage]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-indigo-50">
        {/* Hero section with search */}
        <div className="bg-indigo-700 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tüm Tarifler</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Türk mutfağının en lezzetli tariflerini keşfedin
            </p>
            <SearchBar />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Filter and results summary */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <CategoryFilter 
                categories={categories} 
                selectedCategory={categorySlug} 
              />
            </div>
            
            <div className="w-full md:w-3/4">
              {/* Results summary */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {query 
                    ? `"${query}" için sonuçlar` 
                    : categorySlug 
                      ? categories.find(c => c.category === categorySlug)?.categoryName || "Tarifler"
                      : "Tüm Tarifler"
                  }
                </h2>
                <p className="text-gray-600">
                  Toplam {pagination.totalRecipes} tarif bulundu
                </p>
              </div>
              
              {/* Recipe grid */}
              {isLoading ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
                </div>
              ) : pagination.recipes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pagination.recipes.map((recipe) => (
                    <RecipeCard 
                      key={recipe.id} 
                      recipe={recipe} 
                      categorySlug={recipe.categorySlug} 
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-lg shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-indigo-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Tarif bulunamadı</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    {query 
                      ? "Aramanızla eşleşen herhangi bir tarif bulamadık. Lütfen farklı anahtar kelimelerle tekrar deneyin."
                      : "Seçilen kategoride tarif bulunamadı. Lütfen başka bir kategori seçin."
                    }
                  </p>
                </div>
              )}
              
              {/* Pagination */}
              {!isLoading && (
                <Pagination 
                  totalPages={pagination.totalPages} 
                  currentPage={pagination.currentPage} 
                />
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 