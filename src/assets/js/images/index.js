window.addEventListener("DOMContentLoaded", getAndRenderRandomDrink);

// URL definitions
const url = "https://www.thecocktaildb.com/api/json/v1/1/";
const randomDrinkURL = "random.php";
const alcoholicFilterURL = "filter.php?a=Alcoholic";
const nonAlcoholicFilterURL = "filter.php?a=Non_Alcoholic";

// Fetch functions
function fetchDrink(drinkURL) {
    return fetch(drinkURL)
      .then(response => response.json())
      .then(data => data.drinks[0]);
}

function getRandomDrink(){
  return fetchDrink(url + randomDrinkURL);
}

// Initial fetch and log
fetchDrink(url + randomDrinkURL).then(drinksArray => {
    console.log(drinksArray);
});

// DOM selectors
const fetchButton = document.querySelector("button");
const hoverButton = document.querySelector("button");
const drinkImage = document.getElementById("DrinkImage");
const drinkDescription = document.getElementById("drinkDescription");
const drinkInstructions = document.getElementById("strInstructions");

// Event listeners
hoverButton.addEventListener("mouseover", () => {
    hoverButton.style.color = "red";
});

hoverButton.addEventListener("mouseout", () => {
    hoverButton.style.color = "white";
});

fetchButton.addEventListener("click", () => {
    getRandomDrink().then(drinkObj => {
      renderRandomDrink(drinkObj);
    });
});

// Render functions
function renderRandomDrink(drinkObj) {
  console.log("Rendered Drink:", drinkObj);
  drinkImage.src = drinkObj.strDrinkThumb;
  drinkDescription.textContent = drinkObj.strDrink;
  drinkInstructions.textContent = drinkObj.strInstructions;
}

function getAndRenderRandomDrink() {
  getRandomDrink().then(drinkObj => {
    renderRandomDrink(drinkObj);
  });
}
