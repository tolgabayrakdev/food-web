"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecipeCard from "@/components/RecipeCard";
import SearchBar from "@/components/SearchBar";
import { searchRecipes } from "@/lib/recipes";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    if (query) {
      const foundRecipes = searchRecipes(query);
      setResults(foundRecipes);
    } else {
      setResults([]);
    }
  }, [query]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-indigo-50">
        <div className="bg-indigo-700 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Tarif Ara</h1>
            <SearchBar />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-16">
          {query ? (
            <>
              <h2 className="text-2xl font-bold text-indigo-800 mb-6">
                "{query}" için arama sonuçları
              </h2>
              
              {results.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {results.map((recipe) => (
                    <RecipeCard 
                      key={recipe.id} 
                      recipe={recipe} 
                      categorySlug={recipe.categorySlug} 
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-indigo-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Üzgünüz, tarif bulunamadı</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Aramanızla eşleşen herhangi bir tarif bulamadık. Lütfen farklı anahtar kelimelerle tekrar deneyin.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-indigo-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Bir tarif arayın</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Arama kutusunu kullanarak istediğiniz yemek tarifini bulabilirsiniz.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 