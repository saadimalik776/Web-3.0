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