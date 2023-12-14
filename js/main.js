/*const apiKey = "f479d71a3975454c9ecb1defe8311fd1";


async function fetchRecipes(query) {
  const endpoint = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${query}`;

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();
    displayRecipes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
*/



const appId = '22fda62c';
const apiKey = '1587722c51c833babab70451fc007053'; // Use one of the keys

// Function to fetch recipes from the API
async function fetchRecipes(query) {
  const endpoint = 'https://api.edamam.com/search'; // Edamam API endpoint for recipe search

  try {
    const response = await fetch(`${endpoint}?q=${query}&app_id=${appId}&app_key=${apiKey}`);

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    displayRecipes(data.hits); // Call function to display recipes from the 'hits' array
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayRecipes(recipes) {
  const recipeList = document.createElement('div');
  recipeList.classList.add('recipe-list');

  recipes.forEach((recipeItem) => {
    const recipe = recipeItem.recipe; // Access the 'recipe' object within each item

    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    const recipeImage = document.createElement('img');
    recipeImage.src = recipe.image; // Access the 'image' property from the 'recipe' object
    recipeImage.alt = recipe.label; // Use 'label' for alt text
    recipeImage.classList.add('recipe-image');

    const recipeDetails = document.createElement('div');
    recipeDetails.classList.add('recipe-details');

    const recipeTitle = document.createElement('h3');
    recipeTitle.classList.add('recipe-title');
    recipeTitle.textContent = recipe.label; // Use 'label' property for title

    const recipeDescription = document.createElement('p');
    recipeDescription.classList.add('recipe-description');
    recipeDescription.textContent = recipe.source; // Use 'source' property for description

    recipeDetails.appendChild(recipeTitle);
    recipeDetails.appendChild(recipeDescription);

    recipeCard.appendChild(recipeImage);
    recipeCard.appendChild(recipeDetails);

    recipeList.appendChild(recipeCard);
  });

  const mainContainer = document.querySelector('.container');
  mainContainer.appendChild(recipeList);
}

window.addEventListener('load', () => {
  // Fetch recipes for different queries and display them in the recipe container
  fetchRecipes('pasta');
  fetchRecipes('salad');
  fetchRecipes('dessert');
  fetchRecipes('beef');
  fetchRecipes('veggie');
});
