window.addEventListener("DOMContentLoaded", getAndRenderRandomDrink);

//fetch function

const url = "https://www.thecocktaildb.com/api/json/v1/1/";
const randomDrinkURL = "/random.php"
const alcoholic = "/filter.php?a=Alcoholic"
const nonalcoholic = "/filter.php?a=Non_Alcoholic"

function allDrinks(drinkURL) {
    return fetch(drinkURL)
      .then(response => response.json())
      .then(data => data.drinks[0].strDrinkThumb); //extract img src 
}
function getRandomDrink(){
  return fetch(url + randomDrinkURL)
  .then(response => response.json())
  .then(data => data.drinks[0]);
}

//initializers

allDrinks(url + randomDrinkURL).then((drinksArray) => {
    //render all drinks)
console.log(drinksArray)
});

//dom selectors
const fetchButton = document.querySelector("button")
const hoverButton = document.querySelector("button")
const drinkImage = document.getElementById("DrinkImage");
const drinkDescription = document.getElementById("drinkDescription");
const drinkInstructions = document.getElementById("strInstructions")


//event listeners
hoverButton.addEventListener("mouseover", (event) => {
    hoverButton.style.color = "red";
  });

  hoverButton.addEventListener("mouseout", (event) => {
    hoverButton.style.color = "white";
  });

  fetchButton.addEventListener("click", () => {
    getRandomDrink().then(drinkObj => {
      renderRandomDrink(drinkObj);
    });
  });







//render functions
function renderRandomDrink(drinkObj) {
  console.log(" ~ file: index.js:56 ~ renderRandomDrink ~ drinkObj:", drinkObj)
  drinkImage.src = drinkObj.strDrinkThumb;
  drinkDescription.textContent = drinkObj.strDrink;
  drinkInstructions.textContent = drinkObj.strInstructions;
}

function getAndRenderRandomDrink() {
  getRandomDrink().then(drinkObj => {
    renderRandomDrink(drinkObj);
  })
}
//{
//    "ID": 2,
//   "Drink Name": "Old Fashioned",
//   "Image URL": "https://www.knobcreek.com/sites/default/files/2018-06/thumb__0010_8909_KC_Classic_Old_Fashioned-4474.jpg",
//  "Description": "An Old Fashioned is a classic sweet whiskey cocktail",
 //   "List of ingredients": "bourbon, bitters, raw sugar, cherry garnish"
  //},`