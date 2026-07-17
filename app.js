// Sample recipe data
const recipes = [
    {
        title: "Chicken Tacos",
        ingredients: ["chicken", "tortillas", "onion", "cilantro"],
        steps: ["Cook chicken", "Warm tortillas", "Assemble tacos"]
    },
    {
        title: "Pasta Alfredo",
        ingredients: ["pasta", "cream", "parmesan"],
        steps: ["Boil pasta", "Make sauce", "Mix together"]
    }
];

// Display output to screen
function displayRecipes() {
    const container = document.getElementById("recipe-container");
    container.innerHTML = "";

    recipes.map(recipe => {
        const card = document.createElement("div");
        card.classList.add("recipe-card");

        card.innerHTML = `
            <h2>${recipe.title}</h2>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
            <p><strong>Steps:</strong> ${recipe.steps.join(", ")}</p>
        `;

        container.appendChild(card);
    });
}

// Recursion example
function countIngredients(list, index = 0) {
    if (index >= list.length) return 0;
    return 1 + countIngredients(list, index + 1);
}

// Using external library (lodash)
function getAllIngredients() {
    return _.flatten(recipes.map(r => r.ingredients));
}

// Run app
displayRecipes();
console.log("Total ingredients:", countIngredients(getAllIngredients()));
