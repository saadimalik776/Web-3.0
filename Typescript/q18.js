var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Problem 18: Seeing the world
console.log("******* Problem 18 *******");
var placesToVisit = ["Makah", "Madina", "Kashmir", "Istanbul", "India"];
console.log("Original Order:", placesToVisit);
console.log("Alphabetical Order:", __spreadArray([], placesToVisit, true).sort());
console.log("Original Order:", placesToVisit);
console.log("Reverse Alphabetical Order:", __spreadArray([], placesToVisit, true).sort().reverse());
console.log("Original Order:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
placesToVisit.reverse();
console.log("Original Order:", placesToVisit);
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
