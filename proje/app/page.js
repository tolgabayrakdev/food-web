import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import { getAllCategories } from "@/lib/recipes";

export default async function Home() {
  const categories = await getAllCategories();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Categories Section with new design */}
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8 sm:mb-16">
              <span className="text-indigo-600 text-sm font-semibold tracking-wider uppercase">KEŞFEDIN</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2 mb-4">Yemek Kategorileri</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                Türk mutfağının zengin kategorileri arasında gezinin ve damak zevkinize uygun tarifleri keşfedin
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {categories.map((category, index) => (
                <div key={category.id}>
                  <CategoryCard category={category} />
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href="/tarifler" 
                className="inline-flex items-center px-6 py-3 bg-indigo-50 text-indigo-700 rounded-full font-medium hover:bg-indigo-100 transition-colors"
              >
                <span className="block">Tüm Tarifleri Gör</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="text-center mb-8 sm:mb-16">
              <span className="text-indigo-600 text-sm font-semibold tracking-wider uppercase">ÖZELLİKLER</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2 mb-4">Mutfakta Profesyonel Ol</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                Lezzet Dünyası ile ev yemeklerinde profesyonel dokunuşlar. 
                Detaylı tarifler, püf noktaları ve geleneksel Türk lezzetleri 
                sizleri bekliyor.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Detaylı Tarifler</h3>
                <p className="text-gray-600">Adım adım anlatımlı, ölçülü ve detaylı tarifler.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Geleneksel Tatlar</h3>
                <p className="text-gray-600">Türk mutfağının en sevilen tarifleri ve geleneksel lezzetleri.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Püf Noktaları</h3>
                <p className="text-gray-600">Profesyonellerden öğrendiğimiz püf noktaları ve kolay çözümler.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="bg-indigo-50 py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8 sm:mb-16">
              <span className="text-indigo-600 text-sm font-semibold tracking-wider uppercase">YARDIM</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2 mb-4">Sık Sorulan Sorular</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                Kullanıcılarımızın en çok merak ettiği sorular ve yanıtları
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[1, 2, 3].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {index === 0 && "Tarifleriniz nasıl hazırlanıyor?"}
                    {index === 1 && "Farklı beslenme ihtiyaçlarına uygun tarifler var mı?"}
                    {index === 2 && "Tariflerin malzemeleri bulamazsam ne yapabilirim?"}
                  </h3>
                  <p className="text-gray-600">
                    {index === 0 && "Tüm tariflerimiz alanında uzman şefler tarafından test edilerek hazırlanmaktadır. Her tarif, ev mutfağında kolayca uygulanabilir olması için özenle düzenlenmektedir."}
                    {index === 1 && "Evet, vejetaryen, vegan, glütensiz ve düşük kalorili tarif kategorilerimiz de bulunmaktadır. Her damak zevkine ve beslenme tercihine uygun tarifler sunmaya çalışıyoruz."}
                    {index === 2 && "Her tarifimizin altında alternatif malzemeler ve öneriler sunuyoruz. Ayrıca, iletişim bölümünden bize ulaşarak spesifik tarifler için yardım alabilirsiniz."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Lezzet Yolculuğuna Hazır mısınız?</h2>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto opacity-90">
              Geleneksel Türk mutfağının zengin lezzetleri sizi bekliyor. Hemen kaydolun ve size özel tarifleri keşfedin.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/kategoriler" 
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-700 rounded-full font-bold text-base sm:text-lg hover:bg-opacity-90 transition-colors"
              >
                Kategorileri Keşfet
              </a>
              <a 
                href="/tarifler" 
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-indigo-700 transition-colors"
              >
                Tariflere Göz At
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
