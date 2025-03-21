import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <div className="relative bg-cover bg-center h-[70vh]" style={{ backgroundImage: "url('/images/placeholder-food.jpg')" }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Lezzet Dünyası'na Hoş Geldiniz
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl">
          Türk mutfağının en lezzetli tarifleri ve yöresel lezzetleri bir tık uzağınızda.
          Kendi mutfağınızda profesyonel şef gibi yemekler hazırlayın.
        </p>
        
        <div className="w-full max-w-xl mb-10">
          <SearchBar />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/kategoriler" 
            className="bg-red-600 text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-red-700 transition-colors"
          >
            Tarifleri Keşfet
          </Link>
          <Link 
            href="/populer" 
            className="bg-white text-red-800 px-8 py-3 rounded-md font-medium text-lg hover:bg-gray-100 transition-colors"
          >
            Popüler Tarifler
          </Link>
        </div>
      </div>
    </div>
  );
} 