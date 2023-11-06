// Problem 37: XL shirt
console.log("******* Problem 37 *******");
function make_shirt2(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You have ordered a ".concat(size, " shirt with the message: \"").concat(message, "\"."));
}
make_shirt2();
make_shirt2("medium");
make_shirt2("small", "Hello, world!");
