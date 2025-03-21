import recipes from '../data/recipes.json';

export function getAllCategories() {
  return recipes.map(category => ({
    id: category.id,
    category: category.category,
    categoryName: category.categoryName,
    recipes: category.recipes,
  }));
}

export function getCategoryBySlug(slug) {
  return recipes.find(category => category.category === slug);
}

export function getRecipeById(categorySlug, recipeId) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;
  
  return category.recipes.find(recipe => recipe.id === recipeId);
}

export function getRecipeBySlug(categorySlug, recipeSlug) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;
  
  return category.recipes.find(recipe => createRecipeSlug(recipe.title) === recipeSlug);
}

// Helper function to convert recipe titles to URL-friendly slugs
export function createRecipeSlug(title) {
  return title
    .toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getPopularRecipes(limit = 6) {
  // In a real app, this could be based on user interactions or ratings
  // For now, we'll just get the first recipe from each category
  return recipes.flatMap(category => 
    category.recipes.slice(0, 1).map(recipe => ({
      ...recipe,
      categorySlug: category.category,
      slug: createRecipeSlug(recipe.title)
    }))
  ).slice(0, limit);
}

export function searchRecipes(query) {
  if (!query) return getAllRecipes(); // Return all recipes when query is empty
  
  const normalizedQuery = query.toLowerCase().trim();
  
  return recipes.flatMap(category => 
    category.recipes
      .filter(recipe => 
        recipe.title.toLowerCase().includes(normalizedQuery) || 
        recipe.description.toLowerCase().includes(normalizedQuery)
      )
      .map(recipe => ({
        ...recipe,
        categorySlug: category.category,
        slug: createRecipeSlug(recipe.title)
      }))
  );
}

export function getAllRecipes(categorySlug = null) {
  // Get all recipes from all categories or filter by categorySlug if provided
  const allRecipes = recipes.flatMap(category => {
    // Skip categories that don't match if categorySlug is provided
    if (categorySlug && category.category !== categorySlug) {
      return [];
    }
    
    return category.recipes.map(recipe => ({
      ...recipe,
      categoryName: category.categoryName,
      categorySlug: category.category,
      slug: createRecipeSlug(recipe.title)
    }));
  });
  
  return allRecipes;
}

export function paginateRecipes(recipeList, page = 1, limit = 9) {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  return {
    recipes: recipeList.slice(startIndex, endIndex),
    totalPages: Math.ceil(recipeList.length / limit),
    currentPage: page,
    totalRecipes: recipeList.length
  };
} 