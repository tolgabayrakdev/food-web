import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hakkımızda - Lezzet Dünyası",
  description: "Lezzet Dünyası kimdir? Türk mutfağına tutkumuz ve misyonumuz hakkında bilgi edinin. En iyi yemek tariflerini ve püf noktalarını sizlerle paylaşıyoruz.",
  keywords: "türk mutfağı, lezzet dünyası, hakkımızda, yemek platformu, türk yemekleri, yemek tarifleri ekibi",
  alternates: {
    canonical: "https://lezzetdunyasi.com/hakkimizda",
  },
  openGraph: {
    title: "Hakkımızda - Lezzet Dünyası",
    description: "Lezzet Dünyası kimdir? Türk mutfağına tutkumuz ve misyonumuz hakkında bilgi edinin.",
    url: "https://lezzetdunyasi.com/hakkimizda",
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-red-50">
        <div className="bg-red-700 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hakkımızda</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Lezzet Dünyası'nın hikayesi ve Türk mutfağına olan tutkumuz.
            </p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-red-800 mb-6">Biz Kimiz?</h2>
            <p className="text-gray-700 mb-6">
              Lezzet Dünyası, Türk mutfağının zengin lezzetlerini ve geleneksel tariflerini 
              herkes için erişilebilir kılmak amacıyla kurulmuş bir yemek platformudur. 
              2023 yılında kurulan sitemiz, Türk mutfağının eşsiz tatlarını, püf noktalarını ve 
              geleneksel yöntemlerini modern bir yaklaşımla sunmayı hedeflemektedir.
            </p>
            
            <h2 className="text-3xl font-bold text-red-800 mb-6 mt-12">Misyonumuz</h2>
            <p className="text-gray-700 mb-6">
              Türk mutfağının zenginliğini ve çeşitliliğini tüm dünyaya tanıtmak, geleneksel 
              tarifleri koruyarak gelecek nesillere aktarmak ve herkesin kolayca uygulayabileceği 
              tarifleri paylaşarak mutfakta özgüven kazanmalarını sağlamaktır.
            </p>
            
            <h2 className="text-3xl font-bold text-red-800 mb-6 mt-12">Vizyonumuz</h2>
            <p className="text-gray-700 mb-6">
              Türk mutfağı denildiğinde akla ilk gelen, güvenilir ve kaliteli içeriklerle 
              dolu bir platform olmak. Yemek tutkunlarına ilham veren, yenilikçi ve geleneksel 
              tarifleri bir arada sunan, kullanıcı dostu bir deneyim sunmak.
            </p>
            
            <h2 className="text-3xl font-bold text-red-800 mb-6 mt-12">Ekibimiz</h2>
            <p className="text-gray-700 mb-6">
              Lezzet Dünyası ekibi, yemek tutkunu ve mutfakta deneyimli kişilerden oluşmaktadır. 
              Profesyonel şeflerden ev hanımlarına, gıda mühendislerinden yazılım geliştiricilere 
              kadar geniş bir yelpazede uzmanlara sahip ekibimiz, size en doğru ve kaliteli içerikleri 
              sunmak için çalışmaktadır.
            </p>
            
            <div className="bg-red-100 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-semibold text-red-800 mb-4">Bize Ulaşın</h3>
              <p className="text-gray-700 mb-4">
                Öneri, şikayet veya işbirliği için bizimle iletişime geçebilirsiniz.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email: iletisim@lezzetdunyasi.com</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Telefon: +90 (555) 123 45 67</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Adres: Lezzet Sokak, No: 42, İstanbul</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 