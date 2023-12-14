const apiKey = "f479d71a3975454c9ecb1defe8311fd1";

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

function displayRecipes(recipes) {
  const recipeList = document.createElement("div");
  recipeList.classList.add("recipe-list");

  recipes.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    const recipeImage = document.createElement("img");
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.title;
    recipeImage.classList.add("recipe-image");

    const recipeDetails = document.createElement("div");
    recipeDetails.classList.add("recipe-details");

    const recipeTitle = document.createElement("h3");
    recipeTitle.classList.add("recipe-title");
    recipeTitle.textContent = recipe.title;

    const recipeDescription = document.createElement("p");
    recipeDescription.classList.add("recipe-description");
    recipeDescription.textContent = recipe.title; // Change this to the appropriate recipe property

    recipeDetails.appendChild(recipeTitle);
    recipeDetails.appendChild(recipeDescription);

    recipeCard.appendChild(recipeImage);
    recipeCard.appendChild(recipeDetails);

    recipeList.appendChild(recipeCard);
  });

  const mainContainer = document.querySelector(".container");
  mainContainer.appendChild(recipeList);
}

window.addEventListener("load", () => {
  fetchRecipes("pasta");
  fetchRecipes("salad");
  fetchRecipes("dessert");
  fetchRecipes("beef");
  fetchRecipes("veggie");
});
