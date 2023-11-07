// Problem 12: Greetings
console.log(`******* Problem 12 *******`);
const names = ['Ali', 'Esha', 'Saad', 'Munaf'];
console.log("Names:");
for (const name of names) {
    console.log(name);
}
console.log("\nGreetings:");
const commonMessage = "Hello, nice to meet you, ";
for (const name of names) {
    console.log(commonMessage + name + "!");
}
