import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center p-4 bg-orange-50">
        <div className="text-center max-w-xl">
          <h1 className="text-6xl font-bold text-orange-600 mb-6">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Sayfa Bulunamadı</h2>
          <p className="text-gray-600 mb-8">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir. 
            Ana sayfaya dönerek diğer lezzetli tariflerimizi keşfedebilirsiniz.
          </p>
          <Link 
            href="/" 
            className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Ana Sayfaya Dön
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 