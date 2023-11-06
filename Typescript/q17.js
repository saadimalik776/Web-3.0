// Problem 17: Shrinking Guest List
console.log("******* Problem 17 *******");
var guestList = ["Phopho", "Khala", "Cuzn", "Dado", "Nano"];
console.log("Sorry, we can only invite two people for dinner.");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ", you are invited to join us for dinner. "));
});
guestList.length = 0;
console.log("The guest list is now empty:", guestList);
