/************************* Assignment # 1 ************************/
/************************* By: Saad Muanf ************************/
// Problem1: Install Javascript Done

// problem 2. Personal Message:
console.log(`******* Problem 2 *******`);
let PerName: string = "Saad Munaf";
let message: string = `Hello ${PerName}, would you like to learn some Python today?`;
console.log(message);


// problem 3. Name Cases:
console.log(`******* Problem 3 *******`);
let personName: string = "Saad";

console.log("Lowercase Name: " + personName.toLowerCase());
console.log("Uppercase Name: " + personName.toUpperCase());
console.log("Titlecase Name: " + toTitleCase(personName));
function toTitleCase(str: string): string {
  return str.toLowerCase().replace(/(?:^|\s)\w/g, (match) => {
    return match.toUpperCase();
  });
}


// problem 4. Famous Quote:
console.log(`******* Problem 4 *******`);
let famousQuote: string = "“Do not lose hope, nor be sad.” ";
let author: string = "Quran 3:139.";
console.log(`"${famousQuote}" - ${author}`);


// problem 5. Famous Quote 2:
console.log(`******* Problem 5 *******`);
let famous_person: string = " Prophet Muhammad (peace be upon him)";
let famousQuote: string = "Speak good or remain silent.”;
let message: string = `"${famousQuote}" - ${famous_person}`;
console.log(message);


// problem 6. Stripping Names
console.log(`******* Problem 6 *******`);
let new_person_name : string = `\t Easha Shaikh \n`;
console.log(new_person_name);
let message2 : string = new_person_name.trim();
console.log(message2);


// problem 7 & 8: Number Eight (he problem is almost same so done in one answer)
console.log(`******* Problem 7 & 8 *******`)
console.log(4 + 4); 
console.log(16 - 8); 
console.log(4 * 2); 
console.log(64 / 8); 


// Problem 9: Favorite number
console.log(`******* Problem 9 *******`)
let fav_Num: number = 11;
let message: string = `My favorite number is ${fav_Num}.`;
console.log(message);


//Problem 10: Adding Comments
console.log(`******* Problem 10 *******`);
// print my name 
let name: string = "Saad";
console.log(name);


// Problem 11: Names
console.log(`******* Problem 11 *******`);
let names: string[] = ["Saad", "Esha", "Sadia", "Majid", "Ali"];
for (let i = 0; i < names.length; i++)
 {
    console.log(names[i]);
}


// Problem 12: Greetings
console.log(`******* Problem 12 *******`);
console.log(`Good Morning ${friend_names[0]}!`);
console.log(`Good Morning ${friend_names[1]}!`);
console.log(`Good Morning ${friend_names[2]}!`);
console.log(`Good Morning ${friend_names[3]}!`);
console.log(`Good Morning ${friend_names[4]}!`);


// Problem 13: Your Own Array
console.log(`******* Problem 13 *******`);
let favoriteCars: string[] = ["Honda Civic", "Toyota Camry", "Ford Mustang", "Scooty", "Pajero"];
favoriteCars.forEach(car => {
console.log(`I would like to own a ${car}.`);
});


// Problem 14:  Guest List
console.log(`******* Problem 14 *******`);
let guest: string[] = ["Appi", "Nano ", "Mammo"];
guest.forEach(person => {
console.log(`Dear ${person}, I would be happiest if you come over to my place and have a dinner with us!`);
});


// Problem 15:  Guest List changing
console.log(`******* Problem 15 *******`);
let temp_guest = guest[2];
guest.splice(2,1);
guest.push('Nano');
guest.forEach((item) =>{
console.log(`${item}, I would be happiest if you come over to my place and have a dinner with us!`)
});
console.log(`${temp_guest} won't be able to make it.`);


// Problem 16: More Guests
console.log(`******* Problem 16 *******`);
guest.push('Mamo');
guest.unshift('sister');
let guest_size: number = guest.length;
let middle_of_list: number  = Math.floor(guest_size/2);
guest.splice(middle_of_list, 0, 'Dadi');
guest.forEach((item) =>{
console.log(`${item}, I would be happiest if you come over to my place and have a dinner with us!`)
});
console.log(`Since I found a bigger table, I'm inviting more guests and we'll have a bigger party!`);


// Problem 17: Shrinking Guest List
console.log(`******* Problem 17 *******`);
let guestList: string[] = ["Phopho", "Khala", "Cuzn", "Dado", "Nano"];
console.log("Sorry, we can only invite two people for dinner.");
while (guestList.length > 2) {
let removedGuest = guestList.pop();
console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
guestList.forEach(person => {
console.log(`Dear ${person}, you are invited to join us for dinner. `);
});
guestList.length = 0;
console.log("The guest list is now empty:", guestList);


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


// Problem 19: Dinner Guests
console.log(`******* Problem 19 *******`);
let guestList: number = locations.length;
console.log(`I am inviting guests to the dinner tonight!: ${guestList.length}`);


// Problem 20: 
console.log(`******* Problem 20 *******`);
let rivers: string[] =  ['Jehlum', 'Chenab', 'Setluj', 'Ravies', 'Sawat river'];
console.log("List of Famous Rivers:");
rivers.forEach((river, index) => {
console.log(`${index + 1}. ${river}`);
});


// Problem 21: 
console.log(`******* Problem 21 *******`);
let object: { [key: string]: string[] } = {};

for (let item of list_of_things) {
  object[item] = [];
}


// Problem 22: Intentional error
console.log(`******* Problem 22 *******`);
const list_for_error: number[] = [1,4,3,6];
console.log(list_for_error[4]);
console.log(list_for_error[3]);


// Problem 23: Conditional Tests
console.log(`******* Problem 23 *******`);
let car = 'subaru';
let age = 25;
let fruit = 'apple';
let isSunny = true;
let number = 7;
// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// Test 2
console.log("Is age > 18? I predict True.");
console.log(age > 18);
// Test 3
console.log("Is fruit == 'banana'? I predict False.");
console.log(fruit == 'banana');
// Test 4
console.log("Is isSunny == true? I predict True.");
console.log(isSunny == true);
// Test 5
console.log("Is age < 18? I predict False.");
console.log(age < 18);
// Test 6
console.log("Is number > 10? I predict False.");
console.log(number > 10);
// Test 7
console.log("Is car != 'ford'? I predict True.");
console.log(car != 'ford');
// Test 8
console.log("Is fruit == 'cherry'? I predict False.");
console.log(fruit == 'cherry');
// Test 9
console.log("Is isSunny == false? I predict False.");
console.log(isSunny == false);
// Test 10
console.log("Is age >= 25? I predict True.");
console.log(age >= 25);


//Problem 24: More Conditional Tests
console.log(`******* Problem 24 *******`);
let string1 = 'apple';
let string2 = 'banana';
let num1 = 10;
let num2 = 20;
let fruits = ['apple', 'banana', 'cherry'];
let colors = ['red', 'green', 'blue'];
console.log("Equality Test with Strings: I predict False.");
console.log(string1 == string2);
console.log("Inequality Test with Strings: I predict True.");
console.log(string1 != string2);
console.log("Lowercase Test: I predict True.");
console.log(string1.toLowerCase() === 'apple');
console.log("Equality Test with Numbers: I predict False.");
console.log(num1 == num2);
console.log("Inequality Test with Numbers: I predict True.");
console.log(num1 != num2);
console.log("Greater Than Test: I predict False.");
console.log(num1 > num2);
console.log("Less Than Test: I predict True.");
console.log(num1 < num2);
console.log("Greater Than or Equal To Test: I predict False.");
console.log(num1 >= num2);
console.log("Less Than or Equal To Test: I predict True.");
console.log(num1 <= num2);
console.log("And Operator Test: I predict True.");
console.log(num1 > 5 && num2 > 15);
console.log("Or Operator Test: I predict True.");
console.log(num1 > 5 || num2 > 15);
console.log("Array Inclusion Test: I predict True.");
console.log(fruits.includes('apple'));
console.log("Array Exclusion Test: I predict True.");
console.log(!fruits.includes('cherry'));
console.log("Combination Test: I predict True.");
console.log(string1 === 'apple' && num1 === 10 && fruits.includes('apple'));





// Problem 26,27 & 28 : Alien Colors#3
console.log(`******* Problem 27,28 & 28 *******`); 
var alien_color;
if (alien_color === 'Green')
{
    console.log("The player has earned 5 points");
}
 else if(alien_color === 'Orange')
{
    console.log("The player has earned 10 points");
}
else (alien_color === 'red')
{
    console.log("The player has earned 15 points");
}


// Problem 28: Stages of Life
console.log(`******* Problem 28 *******`);
let age = 25;

if (age < 2)
 {
    console.log("The person is a baby.");
}
 else if (age < 4) 
{
    console.log("The person is a toddler.");
}
 else if (age < 13) 
{
    console.log("The person is a kid.");
}
 else if (age < 20) 
{
    console.log("The person is a teenager.");
}
 else if (age < 65) 
{
    console.log("The person is an adult.");
}
 else
{
    console.log("The person is an elder.");
}


// Problem 29: Favorite Fruits
console.log(`******* Problem 29 *******`);
let favorite_fruits: string[] = ["apple", "banana", "strawberry", "kiwi", "mango"];
if (favorite_fruits.includes("apple"))
{
    console.log("You really like apples!");
}

if (favorite_fruits.includes("banana")) 
{
    console.log("You really like bananas!");
}

if (favorite_fruits.includes("strawberry")) 
{
    console.log("You really like strawberries!");
}

if (favorite_fruits.includes("kiwi")) 
{
    console.log("You really like kiwis!");
}
if (favorite_fruits.includes("mango")) 
{
    console.log("You really like mangoes!");
}


// Problem 30: Hello Admin
console.log(`******* Problem 30 *******`);
let usernames: string[] = ["admin", "Esha", "Saad", "Zoya", "DaD"];
for (let username of usernames) 
{
    if (username === "admin") 
{
    console.log("Hello admin, would you like to see a status report?");
}
 else 
{
    console.log(`Hello ${username}, thank you for logging in again.`);
}
}


// Problem 31: No users
console.log(`******* Problem 31 *******`);
let usernames: string[] = ["admin", "Eric", "John", "Alice", "Bob"];

if (usernames.length === 0)
{
    console.log("We need to find some users!");
} else
 {
    for (let username of usernames) 
 {
        if (username === "admin") 
{
      console.log("Hello admin, would you like to see a status report?");
} else 
{
      console.log(`Hello ${username}, thank you for logging in again.`);
 }
 }
}

// Remove all usernames from the array
usernames = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
}


// Problem 32: checking usernames
console.log(`******* Problem 32 *******`);
 let current_users : string[] = ['yusra', 'bisma', 'ali', 'ulfat', 'razak'];
 let new_users : string[] = ['yusra', 'usama', 'jabir', 'faiza', 'nafeesa'];
 for (let new_user of new_users)
 {
    let isUsernameTaken: boolean = current_users.some(function(username) 
{
        return username.toLowerCase() === new_user.toLowerCase();
 });
 if (isUsernameTaken) 
{
   console.log(`The username '${new_user}' is not available. Please enter a new username.`);
} else 
{
   console.log(`The username '${new_user}' is available.`);
}
  }
 

// Problem 33: ordinal numbers
console.log(`******* Problem 33 *******`);
 let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) 
{
  let ordinalEnding: string;
  if (number === 1) 
{
    ordinalEnding = "st";
} else if (number === 2) 
{
    ordinalEnding = "nd";
}
 else if (number === 3) 
{
   ordinalEnding = "rd";
} else 
{
  ordinalEnding = "th";
}
  console.log(number + ordinalEnding);
}


// Problem 34: Pizzas
console.log(`******* Problem 34 *******`);
let favoritePizzas: string[] = ['Afghani', 'Margherita', 'Fajita'];
for (let pizza of favoritePizzas)
 {
  console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");


// Problem 35: Animals
console.log(`******* Problem 35 *******`);
let animals: string[] = ['Goat', 'Cat', 'Rabbit'];
for (let animal of animals) 
{
  console.log(animal);
}
for (let animal of animals) 
{
  console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");


// Problem 36: T-shirt
console.log(`******* Problem 36 *******`);
function make_shirt(size: string, message: string): void
{
    console.log(`You have ordered a ${size} shirt with the message: "${message}".`);
}
make_shirt("s", "I love coding!");

// Problem 37: XL shirt
console.log(`******* Problem 37 *******`);
function make_shirt2(size: string = "large", message: string = "I love TypeScript"): void
 {
    console.log(`You have ordered a ${size} shirt with the message: "${message}".`);
  }
  make_shirt2();
  make_shirt2("medium");
  make_shirt2("small", "Hello, world!");
 

  // Problem 38: Cities
console.log(`******* Problem 38*******`);
  function describe_city(city: string, country: string = "United States"): void
 {
    console.log(`${city} is in ${country}.`);
  }
  describe_city("Karachi", "Pakistan");
  describe_city("Lahore", "Pakistan");


// Problem 39: City Names
console.log(`******* Problem 39 *******`);
function city_country(city: string, country: string): string
 {
    return `${city}, ${country}`;
}
let location1 = city_country("Lahore", "Pakistan");
let location2 = city_country("Karach", "Pakistan");
let location3 = city_country("Paris", "France");
console.log(location1);
console.log(location2);
console.log(location3);

 // Problem 40: Album

console.log(`******* Problem 40 *******`);

function make_album(artist: string, title: string, tracks?: number): any 
{
let album = 
{
        artist,
        title,
        tracks
};
    return album;
}
let album1 = make_album("Artist1", "Album 1");
let album2 = make_album("Artist2", "Album 2", 12);
let album3 = make_album("Artist3", "Album 3", 15);
console.log(album1);
console.log(album2);
console.log(album3);



// Problem 41: Magicians
console.log(`******* Problem 41 *******`);
function show_magicians(magicians: string[]): void 
{
for (let magician of magicians) 
    {
        console.log(magician);
    }
}
let magician_names: string[] = ["Pervaz", "Ustad", "kalu Ustad", "Molar"];
show_magicians(magician_names);

      
// Problem 42: Great Magicians
console.log(`******* Problem 42 *******`);
function make_great(magicians: string[]): string[] 
{
  return magicians.map(magician => `${magician} the Great`);
}

function show_magicians(magicians: string[]): void
   {
    for (let magician of magicians) 
{
        console.log(magician);
    }
}

let magician_names: string[] = ["Pervaz", "Ustad", "kalu Ustad", "Molar"];

let great_magicians = make_great(magician_names);

show_magicians(great_magicians);


// Problem 43: Unchanged Magicians:
console.log(`******* Problem 43 *******`);
function make_great(magicians: string[]): string[] 
{
  return magicians.map(magician => `${magician} the Great`);
}
function show_magicians(magicians: string[]): void 
{
 for (let magician of magicians) 
{
   console.log(magician);
 }
}
let magician_names: string[] = ["Pervaz", "Ustad", "kalu Ustad", "Molar"];
let great_magicians = make_great([...magician_names]);
show_magicians(magician_names);
show_magicians(great_magicians); 


// Problem 44: Sandwiches
console.log(`******* Problem 44 *******`);

function make_sandwich(...items: string[]): void
 {
  console.log("Sandwich Order:");
  for (let item of items) 
{
  console.log("- " + item);
}
 console.log("Enjoy your sandwich!\n");
}
make_sandwich(["Chicken", "Cheese", "Lettuce", "Tomato"]);
make_sandwich("Turkey", "Swiss");
make_sandwich(["Peanut Butter", "Jam"]);

       
// Problem 45: Cars
console.log(`******* Problem 45 *******`);
function car_info(manufacturer: string, model: string, ...details: { [key: string]: any }[]): any
 {
    let car = 
{
    manufacturer,
    model,
};
for (let detail of details) 
    {
        for (let key in detail) 
        {
            car[key] = detail[key];
        }
    }

    return car;
}

let car = car_info("Toyota", "Camry", color: "Blue", year: 2022, features: ["GPS", "Sunroof"]);

console.log(car);
