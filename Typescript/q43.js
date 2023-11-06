var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Problem 43: Unchanged Magicians:
console.log("******* Problem 43 *******");
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
var great_magicians = make_great(__spreadArray([], magician_names, true));
show_magicians(magician_names);
show_magicians(great_magicians);
