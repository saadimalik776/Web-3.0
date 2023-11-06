// Problem 42: Great Magicians
console.log("******* Problem 42 *******");
function make_great(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magician_names = ["Pervaz", "Ustad", "kalu Ustad", "Molar"];
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
