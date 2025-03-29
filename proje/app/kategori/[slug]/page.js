import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecipeCard from "@/components/RecipeCard";
import { getCategoryBySlug, getAllCategories, createRecipeSlug } from "@/lib/recipes";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  
  if (!category) {
    return {
      title: "Kategori Bulunamadı - Lezzet Hazinesi",
    };
  }
  
  return {
    title: `${category.categoryName} - Lezzet Hazinesi`,
    description: `${category.categoryName} kategorisindeki en lezzetli tarifler ve yemekler.`,
  };
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  
  return categories.map((category) => ({
    slug: category.category,
  }));
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  
  if (!category) {
    notFound();
  }
  
  // Pre-compute slugs for all recipes
  const recipesWithSlugs = await Promise.all(
    category.recipes.map(async (recipe) => {
      const recipeSlug = await createRecipeSlug(recipe.name || recipe.title);
      return {
        ...recipe,
        slug: recipeSlug
      };
    })
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-indigo-50">
        <div className="bg-indigo-700 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.categoryName}</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              {category.categoryName} kategorisindeki en lezzetli tariflerimizi keşfedin.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipesWithSlugs.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} categorySlug={category.category} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 