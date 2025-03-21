import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecipeCard from "@/components/RecipeCard";
import { getPopularRecipes } from "@/lib/recipes";

export const metadata = {
  title: "Popüler Tarifler - Lezzet Dünyası",
  description: "En sevilen ve tercih edilen yemek tarifleri burada. Türk mutfağının en popüler lezzetlerini keşfedin.",
};

export default function PopularRecipesPage() {
  const popularRecipes = getPopularRecipes(12);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-orange-50">
        <div className="bg-orange-700 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Popüler Tarifler</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              En çok sevilen ve tercih edilen tariflerimizi keşfedin. 
              Bu lezzetler sofranızın vazgeçilmezi olacak.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularRecipes.map((recipe) => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe} 
                categorySlug={recipe.categorySlug} 
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 