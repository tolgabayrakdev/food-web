import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import { getAllCategories } from "@/lib/recipes";

export const metadata = {
  title: "Kategoriler - Lezzet Dünyası",
  description: "Türk mutfağının en lezzetli yemek tariflerini kategori kategoriye keşfedin.",
};

export default function CategoriesPage() {
  const categories = getAllCategories();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-orange-50">
        <div className="bg-orange-700 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Yemek Kategorileri</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Türk mutfağının eşsiz kategorilerini keşfedin. Ana yemeklerden tatlılara, 
              çorbalardan salatalara kadar tüm lezzetler burada.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 