// problem 3. Name Cases:
console.log(`******* Problem 3 *******`);
let personName: string = "Saad";

console.log("Lowercase Name: " + personName.toLowerCase());
console.log("Uppercase Name: " + personName.toUpperCase());
console.log("Titlecase Name: " + toTitleCase(personName));
function toTitleCase(str: string): string {
  return str.toLowerCase().replace(/(?:^|\s)\w/g, (match) => {
    return match.toUpperCase();
  });
}