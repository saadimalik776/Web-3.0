console.log(`******* Problem 44 *******`);
function make_sandwich(ingredients: string[]) {
  const sandwich = ingredients.join(", ");
  console.log(`Sandwich Ingredients: ${sandwich}`);
}
make_sandwich(["Chicken", "Cheese", "Lettuce", "Tomato"]);
make_sandwich(["Peanut Butter", "Jam"]);
