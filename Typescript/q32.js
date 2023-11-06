// Problem 32: checking usernames
console.log("******* Problem 32 *******");
var current_users = ['yusra', 'bisma', 'ali', 'ulfat', 'razak'];
var new_users = ['yusra', 'usama', 'jabir', 'faiza', 'nafeesa'];
var _loop_1 = function (new_user) {
    var isUsernameTaken = current_users.some(function (username) {
        return username.toLowerCase() === new_user.toLowerCase();
    });
    if (isUsernameTaken) {
        console.log("The username '".concat(new_user, "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_user, "' is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
