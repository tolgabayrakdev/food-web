import Link from "next/link";
import Image from "next/image";
import { Card } from "./ui/card";

export default function RecipeCard({ recipe, categorySlug }) {
  // Fallback for recipes without slug (should not happen after our changes)
  const recipeSlug = recipe.slug || recipe.name?.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={Array.isArray(recipe.image) ? recipe.image[0] : recipe.image || "https://res.cloudinary.com/dwcsscwme/image/upload/v1742852216/placeholder-food_xyz123.jpg"}
          alt={recipe.name || recipe.title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-indigo-800">
          {recipe.name || recipe.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{recipe.description}</p>
        
        <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Hazırlık: {recipe.prepTime ? recipe.prepTime.replace('PT', '').replace('M', ' dakika') : 'Belirtilmemiş'}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{recipe.recipeYield ? recipe.recipeYield.replace(' servings', ' Kişilik') : 'Belirtilmemiş'}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          {recipe.aggregateRating && (
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
              ⭐ {recipe.aggregateRating.ratingValue}
            </span>
          )}
          <Link 
            href={`/kategori/${categorySlug}/${recipeSlug}`}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Tarifi Gör
          </Link>
        </div>
      </div>
    </Card>
  );
} 