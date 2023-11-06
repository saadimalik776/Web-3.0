// problem 3. Name Cases:
console.log("******* Problem 3 *******");
var personName = "Saad";
console.log("Lowercase Name: " + personName.toLowerCase());
console.log("Uppercase Name: " + personName.toUpperCase());
console.log("Titlecase Name: " + toTitleCase(personName));
function toTitleCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
        return match.toUpperCase();
    });
}
