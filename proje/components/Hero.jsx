"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <div className="relative">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-[80vh] md:h-[90vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ 
            backgroundImage: "url('/images/placeholder-food.jpg')",
            backgroundAttachment: "scroll",
            willChange: "transform"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      
      {/* Content Container */}
      <div className="relative h-[80vh] md:h-[90vh] flex flex-col justify-center items-center text-center text-white p-4 md:p-6 max-w-7xl mx-auto">
        <div className="mb-2">
          <span className="inline-block px-3 md:px-4 py-1 bg-indigo-600 rounded-full text-xs sm:text-sm font-medium mb-4 whitespace-normal">
            TÜRKİYE'NİN EN ZENGİN TARİF PLATFORMU
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
          Lezzet Dünyası'na <br className="hidden md:block" />
          <span className="text-indigo-400">Hoş Geldiniz</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-10 max-w-3xl text-gray-200 px-4">
          Türk mutfağının en lezzetli tarifleri ve yöresel lezzetleri bir tık uzağınızda.
          Kendi mutfağınızda profesyonel şef gibi yemekler hazırlayın.
        </p>
        
        <div className="w-full max-w-xl mb-6 md:mb-10 px-4">
          <SearchBar />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 px-4">
          <Link 
            href="/kategoriler" 
            className="w-full sm:w-auto bg-indigo-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium text-base md:text-lg hover:bg-indigo-700 transition-all hover:shadow-lg hover:shadow-indigo-600/30 text-center"
          >
            Kategorileri Keşfet
          </Link>
          <Link 
            href="/tarifler" 
            className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium text-base md:text-lg hover:bg-white/20 transition-all hover:shadow-lg text-center"
          >
            Tüm Tarifler
          </Link>
        </div>
      </div>
    </div>
  );
} 