import { getAllCategories, getCategoryBySlug, createRecipeSlug } from "@/lib/recipes";

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
  const categoriesInfo = await getAllCategories();
  const categoryPages = categoriesInfo.map((category) => ({
    url: `${baseUrl}/kategori/${category.category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Tarif sayfaları
  const recipePages = [];
  
  for (const categoryInfo of categoriesInfo) {
    const category = await getCategoryBySlug(categoryInfo.category);
    if (category && category.recipes) {
      for (const recipe of category.recipes) {
        const recipeName = recipe.name || recipe.title || '';
        const slug = await createRecipeSlug(recipeName);
        // Tarifin datePublished veya dateModified tarihini kullan
        const lastModified = recipe.dateModified ? new Date(recipe.dateModified) : 
                           recipe.datePublished ? new Date(recipe.datePublished) : 
                           new Date();
        
        recipePages.push({
          url: `${baseUrl}/kategori/${category.category}/${slug}`,
          lastModified: lastModified,
          changeFrequency: 'weekly',
          priority: 0.6,
        });
      }
    }
  }

  return [...staticPages, ...categoryPages, ...recipePages];
} 