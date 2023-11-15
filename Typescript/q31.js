 // Problem 31: No users
console.log(`******* Problem 31 *******`);
// Create a list of users
let users = ["Esha", "Saad", "Munaf"];

if (users.length > 0) {
    console.log("List of Users:");
    for (let user of users) {
        console.log(user );
     }
     console.log("\n")  
} else 
{
    console.log("We need to find some users!");
}

users = [];
if (users.length > 0) {
    // Print the list of users
    console.log("\nList of Users after removal:");
    for (let user of users) {
        console.log(user);
    }
} else {
console.log("after user remove  ")
    console.log("\nWe need to find some users!");
}
