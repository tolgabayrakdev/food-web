import Link from "next/link";
import { Card } from "./ui/card";

const categoryImages = {
  "ana-yemekler": "/images/ana-yemekler.jpg",
  "corbalar": "/images/corbalar.jpg", 
  "tatlilar": "/images/tatlilar.jpg",
  "salatalar": "/images/salatalar.jpg",
  "mezeler": "/images/mezeler.jpg",
  "hamur-isleri": "/images/hamur-isleri.jpg",
  "kahvaltiliklar": "/images/kahvaltiliklar.jpg",
  "atistirmaliklar": "/images/atistirmaliklar.jpg"
};

const categoryIcons = {
  "ana-yemekler": "🍲",
  "corbalar": "🥣",
  "tatlilar": "🍰",
  "salatalar": "🥗",
  "mezeler": "🫒",
  "hamur-isleri": "🥮",
  "kahvaltiliklar": "🍳",
  "atistirmaliklar": "🍿"
};

export default function CategoryCard({ category }) {
  // Get recipe count safely
  const recipeCount = category.recipeCount || (category.recipes?.length || 0);
  
  return (
    <Link href={`/kategori/${category.category}`}>
      <Card className="h-72 relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl border-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ 
            backgroundImage: `url(${categoryImages[category.category] || "/images/placeholder-food.jpg"})` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        
        <div className="absolute top-4 left-4 bg-white/90 text-3xl p-2 rounded-full shadow-lg">
          {categoryIcons[category.category] || "🍽️"}
        </div>
        
        <div className="absolute bottom-0 left-0 p-6 text-white w-full">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-300 transition-colors duration-300">
            {category.categoryName}
          </h3>
          <div className="flex justify-between items-center">
            <p className="text-sm text-white/80">{recipeCount} tarif</p>
            <span className="text-xs px-3 py-1 bg-indigo-600/80 rounded-full group-hover:bg-indigo-500 transition-colors duration-300">
              Keşfet
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
} 