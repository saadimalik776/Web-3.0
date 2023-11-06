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