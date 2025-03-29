# Lezzet Hazinesi - Türk Yemekleri Web Sitesi

## Veri Yapısı

### Kategoriler ve Tarifler

Tüm yemek tarifleri ve kategorileri `data/categories` dizininde ayrı JSON dosyaları olarak tutulmaktadır:

- `index.json` - Tüm kategorilerin listesi ve meta bilgileri
- `[KATEGORI_ADI].json` - Her kategori için özel dosya (örn: `tatlilar.json`, `corbalar.json`)

### Dosya Yapısı

```
data/
  categories/
    index.json                # Kategori indeksi
    ana-yemekler.json         # Ana yemekler kategorisi
    corbalar.json             # Çorbalar kategorisi
    tatlilar.json             # Tatlılar kategorisi
    ...
```

### Kategori Dosya Formatı

Her kategori dosyası aşağıdaki yapıdadır:

```json
{
  "id": "3",
  "category": "tatlilar",
  "categoryName": "Tatlılar",
  "recipes": [
    {
      "@context": "https://schema.org/",
      "@type": "Recipe",
      "id": "301",
      "name": "Baklava",
      "description": "...",
      ...
    },
    ...
  ]
}
```

## Veri İşlemleri

### Server ve Client Kullanımı

Veri işlemleri için iki farklı modül bulunmaktadır:

1. **Server-Side (lib/recipes.js)**: Server-side bileşenlerde kullanılır.
   - `'use server'` direktifi ile işaretlenmiştir
   - Dosya sistemi işlemleri yapabilir
   - Async fonksiyonlar içerir

2. **Client-Side (lib/client-recipes.js)**: Client-side bileşenlerde kullanılır.
   - Server fonksiyonlarını çağırır
   - Tarayıcıdan kullanılabilir
   - React Hook'larda kullanılabilir

### Kullanım Örneği

**Server Component'lerde:**
```jsx
import { getAllCategories } from "@/lib/recipes";

export default async function Page() {
  const categories = await getAllCategories();
  return (
    // ...
  );
}
```

**Client Component'lerde:**
```jsx
"use client";
import { useEffect, useState } from "react";
import { getAllCategories } from "@/lib/client-recipes";

export default function ClientPage() {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const loadData = async () => {
      const data = await getAllCategories();
      setCategories(data);
    };
    loadData();
  }, []);
  
  return (
    // ...
  );
}
```

### Kategorilerin Güncellenmesi

Yeni bir tarif veya kategori eklemek için ilgili JSON dosyasını düzenleyin. Eğer tüm veri yapısını güncellemek gerekirse:

1. `data/recipes.json` dosyasını güncelleyin
2. `scripts/split-recipes.js` betiğini çalıştırın:

```
node scripts/split-recipes.js
```

Bu komut, `recipes.json` dosyasını ayrı kategori dosyalarına böler ve indeks dosyasını günceller.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
