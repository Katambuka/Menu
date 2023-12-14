const appId = '22fda62c';
const apiKey = '1587722c51c833babab70451fc007053';

async function fetchRecipes(query) {
  const endpoint = 'https://api.edamam.com/search';

  try {
    const response = await fetch(`${endpoint}?q=${query}&app_id=${appId}&app_key=${apiKey}`);

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    displayRecipes(data.hits);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayRecipes(recipes) {
  const recipeList = document.createElement('div');
  recipeList.classList.add('recipe-list');

  recipes.forEach((recipeItem) => {
    const recipe = recipeItem.recipe;

    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    const recipeImage = document.createElement('img');
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.label;
    recipeImage.classList.add('recipe-image');

    const recipeDetails = document.createElement('div');
    recipeDetails.classList.add('recipe-details');

    const recipeTitle = document.createElement('h3');
    recipeTitle.classList.add('recipe-title');
    recipeTitle.textContent = recipe.label;

    const recipeDescription = document.createElement('p');
    recipeDescription.classList.add('recipe-description');
    recipeDescription.textContent = recipe.source;

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
  fetchRecipes('pasta');
  fetchRecipes('salad');
  fetchRecipes('dessert');
  fetchRecipes('beef');
  fetchRecipes('veggie');
});
