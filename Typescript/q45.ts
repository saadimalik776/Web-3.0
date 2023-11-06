console.log(`******* Problem 45 *******`);

// Define a car_info function that takes an object as a parameter
function car_info(make: string, model: string, carDetails: { color: string, year: number, features: string[] }) {
 console.log(`Company: ${make}`);
  console.log(`Model: ${model}`);
  console.log(`Color: ${carDetails.color}`);
  console.log(`Year: ${carDetails.year}`);
  console.log(`Features: ${carDetails.features.join(', ')}`);
}

// Call the car_info function with an object as a parameter
let car = car_info("Toyota", "Camry", { color: "Blue", year: 2022, features: ["GPS", "Sunroof"] });
