console.log(`******* Problem 20 *******`);
// Create an array of countries with their cities
const countriesWithCities: [string, string[]][] = [
    ["Saudia", ["Madina", "Makkah", "Riyadh"]],
    ["Pakistan", ["Kashmir", "Sargodha", "Bhera"]],
    ["India", ["Dehli", "Ajmar Shreeef", "Breali"]],
  ];
  console.log("List of Countries with Cities:");
  console.log("countries:  Cities \n ")
  for (const countryData of countriesWithCities) {
    const country: string = countryData[0];
    const cities: string[] = countryData[1];
  
    console.log(`${country}: ${cities.join(", ")}`);
  }
  
