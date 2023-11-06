console.log("******* Problem 45 *******");
// Define a car_info function that takes an object as a parameter
function car_info(make, model, carDetails) {
    console.log("Company: ".concat(make));
    console.log("Model: ".concat(model));
    console.log("Color: ".concat(carDetails.color));
    console.log("Year: ".concat(carDetails.year));
    console.log("Features: ".concat(carDetails.features.join(', ')));
}
// Call the car_info function with an object as a parameter
var car = car_info("Toyota", "Camry", { color: "Blue", year: 2022, features: ["GPS", "Sunroof"] });
