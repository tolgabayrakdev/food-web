const fs = require('fs');
const path = require('path');

// Read the main recipes.json file
const recipesData = require('../../data/recipes.json');

// Create directories if they don't exist
const categoryDir = path.join(process.cwd(), 'data/categories');
if (!fs.existsSync(categoryDir)) {
  fs.mkdirSync(categoryDir, { recursive: true });
}

// Split recipes by category and save as separate files
recipesData.forEach(category => {
  const fileName = `${category.category}.json`;
  const filePath = path.join(categoryDir, fileName);
  
  // Write the category data to its own file
  fs.writeFileSync(filePath, JSON.stringify(category, null, 2), 'utf8');
  console.log(`Created: ${fileName}`);
});

// Create an index file for all categories
const categoriesIndex = recipesData.map(category => ({
  id: category.id,
  category: category.category,
  categoryName: category.categoryName,
  recipeCount: category.recipes.length
}));

fs.writeFileSync(
  path.join(categoryDir, 'index.json'),
  JSON.stringify(categoriesIndex, null, 2),
  'utf8'
);

console.log('Created: index.json');
console.log('Done! All category files have been created.'); 