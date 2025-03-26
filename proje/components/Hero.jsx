"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <div className="relative bg-cover bg-center h-[80vh]" 
      style={{ 
        backgroundImage: "url('/images/placeholder-food.jpg')",
        backgroundAttachment: "fixed"
      }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-6 max-w-7xl mx-auto">
        <div className="mb-2">
          <span className="inline-block px-4 py-1 bg-indigo-600 rounded-full text-sm font-medium mb-4">
            TÜRKİYE'NİN EN ZENGİN TARİF PLATFORMU
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Lezzet Dünyası'na <br className="hidden md:block" />
          <span className="text-indigo-400">Hoş Geldiniz</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 max-w-3xl text-gray-200">
          Türk mutfağının en lezzetli tarifleri ve yöresel lezzetleri bir tık uzağınızda.
          Kendi mutfağınızda profesyonel şef gibi yemekler hazırlayın.
        </p>
        
        <div className="w-full max-w-xl mb-10">
          <SearchBar />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/kategoriler" 
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-indigo-700 transition-all hover:shadow-lg hover:shadow-indigo-600/30"
          >
            Kategorileri Keşfet
          </Link>
          <Link 
            href="/tarifler" 
            className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-medium text-lg hover:bg-white/20 transition-all hover:shadow-lg"
          >
            Tüm Tarifler
          </Link>
        </div>
      </div>
    </div>
  );
} 