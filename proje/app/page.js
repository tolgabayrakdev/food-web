import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import RecipeCard from "@/components/RecipeCard";
import { getAllCategories, getPopularRecipes } from "@/lib/recipes";

export const metadata = {
  title: "Lezzet Dünyası - Türk Mutfağının En Lezzetli Yemek Tarifleri",
  description: "En lezzetli yemek tarifleri ve geleneksel Türk mutfağının birbirinden özel tatları. Karnıyarık, mantı, mercimek çorbası ve daha fazla tarif için tıklayın!",
  keywords: "türk mutfağı, yemek tarifleri, ev yemekleri, karnıyarık, mantı, geleneksel tarifler, mercimek çorbası, ev yapımı",
  openGraph: {
    title: "Lezzet Dünyası - Türk Mutfağının En Lezzetli Yemek Tarifleri",
    description: "En lezzetli yemek tarifleri ve geleneksel Türk mutfağının birbirinden özel tatları. Karnıyarık, mantı, mercimek çorbası ve daha fazla tarif için tıklayın!"
  }
};

export default function Home() {
  const categories = getAllCategories();
  const popularRecipes = getPopularRecipes(3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-indigo-800 mb-8 text-center">Yemek Kategorileri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
        
        <section className="bg-indigo-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-indigo-800 mb-8 text-center">Popüler Tarifler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularRecipes.map((recipe) => (
                <RecipeCard 
                  key={recipe.id} 
                  recipe={recipe} 
                  categorySlug={recipe.categorySlug} 
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="/populer" 
                className="inline-block px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-medium rounded-md hover:bg-indigo-600 hover:text-white transition-colors"
              >
                Tüm Popüler Tarifleri Gör
              </a>
            </div>
          </div>
        </section>
        
        <section className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">Mutfakta Profesyonel Ol</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Lezzet Dünyası ile ev yemeklerinde profesyonel dokunuşlar. 
            Detaylı tarifler, püf noktaları ve geleneksel Türk lezzetleri 
            sizleri bekliyor.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Detaylı Tarifler</h3>
              <p className="text-gray-600">Adım adım anlatımlı, ölçülü ve detaylı tarifler.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Geleneksel Tatlar</h3>
              <p className="text-gray-600">Türk mutfağının en sevilen tarifleri ve geleneksel lezzetleri.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Püf Noktaları</h3>
              <p className="text-gray-600">Profesyonellerden öğrendiğimiz püf noktaları ve kolay çözümler.</p>
            </div>
          </div>
        </section>
        
        <section className="bg-indigo-50 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-indigo-800 mb-8">Sık Sorulan Sorular</h2>
            <div className="max-w-3xl mx-auto text-left space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Tarifleriniz nasıl hazırlanıyor?</h3>
                <p className="text-gray-600">Tüm tariflerimiz alanında uzman şefler tarafından test edilerek hazırlanmaktadır. Her tarif, ev mutfağında kolayca uygulanabilir olması için özenle düzenlenmektedir.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Farklı beslenme ihtiyaçlarına uygun tarifler var mı?</h3>
                <p className="text-gray-600">Evet, vejetaryen, vegan, glütensiz ve düşük kalorili tarif kategorilerimiz de bulunmaktadır. Her damak zevkine ve beslenme tercihine uygun tarifler sunmaya çalışıyoruz.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tariflerin malzemeleri bulamazsam ne yapabilirim?</h3>
                <p className="text-gray-600">Her tarifimizin altında alternatif malzemeler ve öneriler sunuyoruz. Ayrıca, iletişim bölümünden bize ulaşarak spesifik tarifler için yardım alabilirsiniz.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
