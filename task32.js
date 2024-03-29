"use strict";
/* Checking Usernames: Do the following to create a program that simulates
how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or
two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already
been used. If it has, print a message that the person will need to enter
a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */
let current_users = ["Rot", "Micheal", "Steve", "Smith", "Lara"];
let new_users = ["James", "Alex", "Joe", "Ben", "STEVE"];
for (var i = 0; i < new_users.length; i++) {
    let newuserToLower = new_users[i].toLowerCase();
    let newuserToUpper = new_users[i].toUpperCase();
    if ((current_users.includes(new_users[i])) ||
        (current_users.includes(newuserToLower)) ||
        (current_users.includes(newuserToUpper)) ||
        (current_users.includes(ToTitleCase(new_users[i])))) {
        console.log(`${new_users[i]}, has already been used.`);
    }
    else {
        console.log(`${new_users[i]}, is availabe`);
    }
}
function ToTitleCase(myName) {
    return myName.toLowerCase().split(" ").map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(" ");
}
;
