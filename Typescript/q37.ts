// Problem 37: XL shirt
console.log(`******* Problem 37 *******`);
function make_shirt2(size: string = "large", message: string = "I love TypeScript"): void
 {
    console.log(`You have ordered a ${size} shirt with the message: "${message}".`);
  }
  make_shirt2();
  make_shirt2("medium");
  make_shirt2("small", "Hello, world!");