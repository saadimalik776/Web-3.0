// Problem 18: Seeing the world
console.log(`******* Problem 18 *******`);
let placesToVisit: string[] = ["Makah", "Madina", "Kashmir", "Istanbul", "India"];
console.log("Original Order:", placesToVisit);
console.log("Alphabetical Order:", [...placesToVisit].sort());
console.log("Original Order:", placesToVisit);
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());
console.log("Original Order:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
placesToVisit.reverse();
console.log("Original Order:", placesToVisit);
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);