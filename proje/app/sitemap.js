import { getAllCategories } from "@/lib/recipes";

export default async function sitemap() {
  const baseUrl = "https://lezzetdunyasi.com";
  
  // Ana sayfalar
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/tarifler`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kategoriler`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Kategori sayfaları
  const categories = await getAllCategories();
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/kategori/${category.category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Tarif sayfaları
  const recipePages = categories.flatMap((category) =>
    category.recipes.map((recipe) => ({
      url: `${baseUrl}/kategori/${category.category}/${recipe.slug || recipe.name.toLowerCase().replace(/\s+/g, '-')}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    }))
  );

  return [...staticPages, ...categoryPages, ...recipePages];
} 