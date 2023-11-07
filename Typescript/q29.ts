// Problem 29: Favorite Fruits
console.log(`******* Problem 29 *******`);
const favorite_fruits: string[] = ["bananas", "strawberries", "mangoes"];
for (const fruit of favorite_fruits) {
    switch (fruit) {
        case "bananas":
            console.log("You really like bananas!");
            break;
        case "strawberries":
            console.log("You really like strawberries!");
            break;
        case "mangoes":
            console.log("You really like mangoes!");
            break;
        case "apples":
            console.log("You really like apples!");
            break;
        case "kiwis":
            console.log("You really like kiwis!");
            break;
        default:
            console.log(`You don't seem to like ${fruit}.`);
            break;
    }
}
