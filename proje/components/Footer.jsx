import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-rose-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Lezzet Dünyası</h3>
            <p className="text-sm opacity-80">
              Türk mutfağının en leziz tarifleri ve geleneksel tatları bir arada. 
              Sizler için özenle seçilmiş yemek tariflerimizle damak zevkinize 
              hitap ediyoruz.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm opacity-80 hover:opacity-100">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/kategoriler" className="text-sm opacity-80 hover:opacity-100">
                  Kategoriler
                </Link>
              </li>
              <li>
                <Link href="/populer" className="text-sm opacity-80 hover:opacity-100">
                  Popüler Tarifler
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-sm opacity-80 hover:opacity-100">
                  Hakkımızda
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Email: iletisim@lezzetdunyasi.com</li>
              <li>Telefon: +90 (555) 123 45 67</li>
              <li>Adres: Lezzet Sokak, No: 42, İstanbul</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-rose-600 text-center text-sm opacity-80">
          <p>© {new Date().getFullYear()} Lezzet Dünyası. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
} 