'use server';

import fs from 'fs';
import path from 'path';
import { cache } from 'react';

// Path to categories directory
const categoriesDir = path.join(process.cwd(), 'data/categories');

// Function to get all categories from index file
export const getAllCategories = cache(async () => {
  try {
    const indexPath = path.join(categoriesDir, 'index.json');
    const categoriesData = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
    return categoriesData;
  } catch (error) {
    console.error('Error loading categories:', error);
    return [];
  }
});

// Function to get a specific category by slug
export const getCategoryBySlug = cache(async (slug) => {
  try {
    const categoryPath = path.join(categoriesDir, `${slug}.json`);
    const categoryData = JSON.parse(fs.readFileSync(categoryPath, 'utf8'));
    return categoryData;
  } catch (error) {
    console.error(`Error loading category ${slug}:`, error);
    return null;
  }
});

// Function to get a specific recipe by ID
export async function getRecipeById(categorySlug, recipeId) {
  const category = await getCategoryBySlug(categorySlug);
  if (!category) return null;
  
  return category.recipes.find(recipe => recipe.id === recipeId);
}

// Function to get a specific recipe by slug
export async function getRecipeBySlug(categorySlug, recipeSlug) {
  const category = await getCategoryBySlug(categorySlug);
  if (!category) return null;
  
  // We can't use async callbacks in array methods like find()
  // So we'll use a for...of loop instead
  for (const recipe of category.recipes) {
    const recipeTitle = recipe.name || recipe.title;
    const slug = await createRecipeSlug(recipeTitle);
    if (slug === recipeSlug) {
      return recipe;
    }
  }
  
  return null;
}

// Helper function to convert recipe titles to URL-friendly slugs
export async function createRecipeSlug(title) {
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

// Function to get popular recipes
export async function getPopularRecipes(limit = 6) {
  // In a real app, this could be based on user interactions or ratings
  // For now, we'll just get the first recipe from each category
  const categories = await getAllCategories();
  const popularRecipes = [];
  
  for (const categoryInfo of categories) {
    const category = await getCategoryBySlug(categoryInfo.category);
    if (category && category.recipes.length > 0) {
      const recipe = category.recipes[0];
      const slug = await createRecipeSlug(recipe.name || recipe.title);
      popularRecipes.push({
        ...recipe,
        categorySlug: category.category,
        slug
      });
      
      if (popularRecipes.length >= limit) break;
    }
  }
  
  return popularRecipes;
}

// Function to search recipes
export async function searchRecipes(query) {
  if (!query) return await getAllRecipes(); // Return all recipes when query is empty
  
  const normalizedQuery = query.toLowerCase().trim();
  const categories = await getAllCategories();
  const results = [];
  
  for (const categoryInfo of categories) {
    const category = await getCategoryBySlug(categoryInfo.category);
    if (!category) continue;
    
    const matchingRecipesPromises = category.recipes
      .filter(recipe => {
        const recipeTitle = recipe.name || recipe.title;
        const recipeDesc = recipe.description || '';
        return recipeTitle.toLowerCase().includes(normalizedQuery) || 
               recipeDesc.toLowerCase().includes(normalizedQuery);
      })
      .map(async recipe => {
        const slug = await createRecipeSlug(recipe.name || recipe.title);
        return {
          ...recipe,
          categorySlug: category.category,
          slug
        };
      });
    
    const matchingRecipes = await Promise.all(matchingRecipesPromises);
    results.push(...matchingRecipes);
  }
  
  return results;
}

// Function to get all recipes
export async function getAllRecipes(categorySlug = null) {
  const categoriesInfo = await getAllCategories();
  let categories;
  
  if (categorySlug) {
    const category = await getCategoryBySlug(categorySlug);
    categories = category ? [category] : [];
  } else {
    categories = await Promise.all(
      categoriesInfo.map(info => getCategoryBySlug(info.category))
    );
    categories = categories.filter(Boolean);
  }
  
  const allRecipesPromises = categories.flatMap(category => {
    return category.recipes.map(async recipe => {
      const slug = await createRecipeSlug(recipe.name || recipe.title);
      return {
        ...recipe,
        categoryName: category.categoryName,
        categorySlug: category.category,
        slug
      };
    });
  });
  
  const allRecipes = await Promise.all(allRecipesPromises);
  return allRecipes;
}

// Function to paginate recipes
export async function paginateRecipes(recipeList, page = 1, limit = 9) {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  return {
    recipes: recipeList.slice(startIndex, endIndex),
    totalPages: Math.ceil(recipeList.length / limit),
    currentPage: page,
    totalRecipes: recipeList.length
  };
} 