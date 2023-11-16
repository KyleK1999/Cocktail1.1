window.addEventListener("DOMContentLoaded", () => {
    renderRandomDrink();
});

// Fetch drinks data from local JSON file
function fetchDrinks() {
    return fetch("../../db.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => data.drinks)
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// Event listeners
const fetchButton = document.querySelector("button");
fetchButton.addEventListener("click", renderRandomDrink);

// Render functions
function renderRandomDrink() {
    fetchDrinks().then(drinksArray => {
        if (!drinksArray) return;
        const drink = getRandomDrink(drinksArray);
        updateDrinkDetails(drink);
    });
}

function getRandomDrink(drinksArray) {
    const randomIndex = Math.floor(Math.random() * drinksArray.length);
    return drinksArray[randomIndex];
}

function updateDrinkDetails(drink) {
    document.getElementById("DrinkImage").src = drink["Image URL"];
    document.getElementById("drinkDescription").textContent = drink["Description"];
    document.getElementById("strInstructions").textContent = "Ingredients: " + drink["List of ingredients"];
}
