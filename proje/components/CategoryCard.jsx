import Link from "next/link";
import { Card } from "./ui/card";

const categoryImages = {
  "ana-yemekler": "/images/ana-yemekler.jpg",
  "corbalar": "/images/corbalar.jpg", 
  "tatlilar": "/images/tatlilar.jpg",
  "salatalar": "/images/salatalar.jpg"
};

export default function CategoryCard({ category }) {
  return (
    <Link href={`/kategori/${category.category}`}>
      <Card className="h-60 relative overflow-hidden group cursor-pointer">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ 
            backgroundImage: `url(${categoryImages[category.category] || "/images/placeholder-food.jpg"})` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">
            {category.categoryName}
          </h3>
          <p className="text-sm opacity-90">{category.recipes.length} tarif</p>
        </div>
      </Card>
    </Link>
  );
} 