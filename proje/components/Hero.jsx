import Link from "next/link";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative bg-cover bg-center h-[80vh]" 
      style={{ 
        backgroundImage: "url('/images/hero-background.jpg')",
        backgroundAttachment: "fixed"
      }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-2"
        >
          <span className="inline-block px-4 py-1 bg-indigo-600 rounded-full text-sm font-medium mb-4">
            TÜRKİYE'NİN EN ZENGİN TARİF PLATFORMU
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Lezzet Dünyası'na <br className="hidden md:block" />
          <span className="text-indigo-400">Hoş Geldiniz</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xl md:text-2xl mb-10 max-w-3xl text-gray-200"
        >
          Türk mutfağının en lezzetli tarifleri ve yöresel lezzetleri bir tık uzağınızda.
          Kendi mutfağınızda profesyonel şef gibi yemekler hazırlayın.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="w-full max-w-xl mb-10"
        >
          <SearchBar />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link 
            href="/kategoriler" 
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-indigo-700 transition-all hover:shadow-lg hover:shadow-indigo-600/30"
          >
            Tarifleri Keşfet
          </Link>
          <Link 
            href="/populer" 
            className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-medium text-lg hover:bg-white/20 transition-all hover:shadow-lg"
          >
            Popüler Tarifler
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <div className="flex space-x-8">
            <div className="text-center">
              <span className="block text-3xl font-bold text-indigo-400">500+</span>
              <span className="text-sm text-gray-300">Tarif</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-indigo-400">8+</span>
              <span className="text-sm text-gray-300">Kategori</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-indigo-400">10K+</span>
              <span className="text-sm text-gray-300">Mutlu Aşçı</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 