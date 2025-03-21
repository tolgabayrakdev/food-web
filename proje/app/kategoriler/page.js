import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import { getAllCategories } from "@/lib/recipes";
import { motion } from "framer-motion";

export const metadata = {
  title: "Kategoriler - Lezzet Dünyası",
  description: "Türk mutfağının en lezzetli yemek tariflerini kategori kategoriye keşfedin.",
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-indigo-800 to-indigo-600 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center text-white">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium mb-6"
            >
              KATEGORİLER
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Yemek Kategorileri
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl max-w-3xl mx-auto text-indigo-100"
            >
              Türk mutfağının eşsiz kategorilerini keşfedin. Ana yemeklerden tatlılara, 
              çorbalardan salatalara kadar tüm lezzetler burada. Damak zevkinize göre size 
              uygun tarifleri bulun ve mutfakta harikalar yaratın.
            </motion.p>
          </div>
        </div>
        
        {/* Filter and Search */}
        <div className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <p className="text-gray-600 mb-4 md:mb-0">
                <span className="font-medium text-indigo-700">{categories.length}</span> kategori bulundu
              </p>
              
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Kategori ara..." 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full md:w-64"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Categories Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                <CategoryCard category={category} />
                <div className="mt-4 px-2">
                  <h3 className="text-xl font-semibold text-gray-800">{category.categoryName}</h3>
                  <p className="text-gray-600 mt-1">
                    {getCategoryDescription(category.category)}
                  </p>
                  <div className="flex items-center mt-3">
                    <span className="text-sm bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
                      {category.recipes.length} tarif
                    </span>
                    <span className="ml-auto text-indigo-600 text-sm font-medium cursor-pointer hover:text-indigo-800 transition-colors">
                      Tümünü gör →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Newsletter Section */}
        <div className="bg-indigo-50 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Yeni Tariflerden Haberdar Olun</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              E-posta listemize katılın ve her hafta yayınlanan yeni tariflerden, püf noktalarından ve 
              özel içeriklerden ilk siz haberdar olun.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                Abone Ol
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

// Helper function to get descriptions for each category
function getCategoryDescription(categorySlug) {
  const descriptions = {
    "ana-yemekler": "Türk mutfağının vazgeçilmez ana yemekleri, et ve sebze yemekleri, güveçler ve daha fazlası.",
    "corbalar": "İçinizi ısıtacak, geleneksel ve modern çorba tarifleri.",
    "tatlilar": "Şerbetlisinden sütlüsüne, hafifinden ağırına tüm tatlı tarifleri.",
    "salatalar": "Sağlıklı, hafif ve lezzetli salata çeşitleri.",
    "mezeler": "Sofralarınızı zenginleştirecek geleneksel ve modern mezeler.",
    "hamur-isleri": "Börekler, poğaçalar, çörekler ve daha fazla hamur işi tarifleri.",
    "kahvaltiliklar": "Güne güzel başlamak için kahvaltılık tarifler.",
    "atistirmaliklar": "Pratik ve lezzetli atıştırmalık tarifleri."
  };
  
  return descriptions[categorySlug] || "Birbirinden lezzetli tarif seçenekleri.";
} 