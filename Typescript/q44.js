console.log("******* Problem 44 *******");
// Define a function make_sandwich that takes an array of ingredients
function make_sandwich(ingredients) {
    // Join the array of ingredients into a single string
    var sandwich = ingredients.join(", ");
    console.log("Sandwich Ingredients: ".concat(sandwich));
}
// Call the make_sandwich function with an array of ingredients
make_sandwich(["Chicken", "Cheese", "Lettuce", "Tomato"]);
make_sandwich(["Peanut Butter", "Jam"]);
