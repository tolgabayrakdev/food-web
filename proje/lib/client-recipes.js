'use client';

import { 
  getAllCategories,
  getCategoryBySlug,
  getRecipeById,
  getRecipeBySlug,
  getPopularRecipes,
  searchRecipes,
  getAllRecipes,
  paginateRecipes
} from './recipes';

// Client-side implementation of createRecipeSlug to avoid server calls for this simple function
export function createRecipeSlug(title) {
  if (!title) return '';
  
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

// Re-export all functions for client components to use
export {
  getAllCategories,
  getCategoryBySlug,
  getRecipeById,
  getRecipeBySlug,
  getPopularRecipes,
  searchRecipes,
  getAllRecipes,
  paginateRecipes
}; 