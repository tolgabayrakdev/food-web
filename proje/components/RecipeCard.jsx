import Link from "next/link";
import Image from "next/image";
import { Card } from "./ui/card";

export default function RecipeCard({ recipe, categorySlug }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={recipe.image || "/images/placeholder-food.jpg"}
          alt={recipe.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-red-800">{recipe.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{recipe.description}</p>
        
        <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Hazırlık: {recipe.prepTime}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{recipe.servings} Kişilik</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
            {recipe.difficulty}
          </span>
          <Link 
            href={`/kategori/${categorySlug}/${recipe.id}`}
            className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
          >
            Tarifi Gör
          </Link>
        </div>
      </div>
    </Card>
  );
} 