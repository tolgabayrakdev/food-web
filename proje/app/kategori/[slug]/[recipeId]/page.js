import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getRecipeById, getCategoryBySlug, getAllCategories } from "@/lib/recipes";

export function generateMetadata({ params }) {
  const recipe = getRecipeById(params.slug, params.recipeId);
  
  if (!recipe) {
    return {
      title: "Tarif Bulunamadı - Lezzet Dünyası",
    };
  }
  
  return {
    title: `${recipe.title} - Lezzet Dünyası`,
    description: recipe.description,
  };
}

export function generateStaticParams() {
  const categories = getAllCategories();
  
  return categories.flatMap((category) => 
    category.recipes.map((recipe) => ({
      slug: category.category,
      recipeId: recipe.id,
    }))
  );
}

export default function RecipePage({ params }) {
  const recipe = getRecipeById(params.slug, params.recipeId);
  const category = getCategoryBySlug(params.slug);
  
  if (!recipe || !category) {
    notFound();
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-rose-50">
        <div className="relative h-[40vh] lg:h-[60vh] w-full">
          <Image
            src={recipe.image || "/images/placeholder-food.jpg"}
            alt={recipe.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-7xl mx-auto">
              <Link 
                href={`/kategori/${params.slug}`}
                className="text-rose-300 hover:underline mb-4 inline-block"
              >
                ← {category.categoryName}
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{recipe.title}</h1>
              <p className="text-xl md:text-2xl opacity-90">{recipe.description}</p>
              
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <div className="flex items-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Hazırlık: {recipe.prepTime}</span>
                </div>
                <div className="flex items-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>{recipe.servings} Kişilik</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Pişirme: {recipe.cookTime}</span>
                </div>
                <span className="px-3 py-1 bg-rose-600 text-white rounded-full text-sm font-medium">
                  {recipe.difficulty}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 text-rose-800 border-b pb-2">Malzemeler</h2>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-rose-600 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 text-rose-800 border-b pb-2">Hazırlanışı</h2>
                <ol className="space-y-6">
                  {recipe.instructions.map((step, index) => (
                    <li key={index} className="flex">
                      <div className="bg-rose-100 text-rose-800 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <div>{step}</div>
                    </li>
                  ))}
                </ol>
              </div>
              
              <div className="mt-8 bg-rose-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-rose-800">Püf Noktaları</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-rose-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Malzemeleri önceden hazırlamak, pişirme sürecini kolaylaştırır.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-rose-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Tarifle ilgili sorularınız varsa, yorum bölümünde bizimle paylaşabilirsiniz.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 