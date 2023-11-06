// Problem 17: Shrinking Guest List
console.log(`******* Problem 17 *******`);
let guestList: string[] = ["Phopho", "Khala", "Cuzn", "Dado", "Nano"];
console.log("Sorry, we can only invite two people for dinner.");
while (guestList.length > 2) {
let removedGuest = guestList.pop();
console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
guestList.forEach(person => {
console.log(`Dear ${person}, you are invited to join us for dinner. `);
});
guestList.length = 0;
console.log("The guest list is now empty:", guestList);