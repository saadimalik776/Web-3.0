// Problem 41: Magicians
console.log("******* Problem 41 *******");
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magician_names = ["Pervaz", "Ustad", "kalu Ustad", "Molar"];
show_magicians(magician_names);
