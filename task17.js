"use strict";
/* Shrinking Guest List: You just found
out that your new dinner table won’t
arrive in time for the dinner, and you
have space for only two guests. */
//Task 16
let guest_names = ["Aslam", "Akbar", "Usman", "Hassan"];
for (let i = 0; i < guest_names.length; i++) {
    console.log(`${guest_names[i]}, Would you like to join me on Dinner?`);
}
;
guest_names.splice(guest_names.length - 1, 1, "Kamaran");
console.log(guest_names);
for (let i = 0; i < guest_names.length; i++) {
    console.log(`${guest_names[i]}, Would you like to join me on Dinner?`);
}
console.log("I Found a bigger Table");
//Adding at start of Array
guest_names.splice(0, 0, "Jawad");
// console.log(guest_names);
//Adding in middle
var middle_index = (guest_names.length) / 2;
guest_names.splice(middle_index, 0, "Fahad");
// console.log(guest_names);
//Adding in Last
guest_names.push("Shehreyar");
// console.log(guest_names);
for (var i = 0; i < guest_names.length; i++) {
    console.log(`${guest_names[i]}, wolud you like to join dinner with me?`);
}
//Task 17
console.log("I only have space for two persons");
for (var i = guest_names.length - 1; i >= 2; i--) {
    console.log(`${guest_names[i]}, Sorry I can't invite you in the dinner`);
    guest_names.pop();
}
for (var i = 0; i < guest_names.length; i++) {
    console.log(`${guest_names[i]}, you are still invited in the dinner`);
}
for (var i = guest_names.length - 1; i >= 0; i++) {
    guest_names.pop();
}
console.log(guest_names);
