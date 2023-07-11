"use strict";
/* More Guests: You just found a bigger
dinner table, so now more space is available.
Think of three more guests to invite to dinner. */
//Task 15
let guests_name = ["Aslam", "Akbar", "Usman", "Hassan"];
for (let i = 0; i < guests_name.length; i++) {
    console.log(`${guests_name[i]}, Would you like to join me on Dinner?`);
}
;
guests_name.splice(guests_name.length - 1, 1, "Kamaran");
console.log(guests_name);
for (let i = 0; i < guests_name.length; i++) {
    console.log(`${guests_name[i]}, Would you like to join me on Dinner?`);
}
//Task 16
console.log("I Found a bigger Table");
//Adding at start of Array
guests_name.splice(0, 0, "Jawad");
// console.log(guests_name);
//Adding in middle
var middle_index = (guests_name.length) / 2;
guests_name.splice(middle_index, 0, "Fahad");
// console.log(guests_name);
//Adding in Last
guests_name.push("Shehreyar");
// console.log(guests_name);
for (var i = 0; i < guests_name.length; i++) {
    console.log(`${guests_name[i]}, wolud you like to join dinner with me?`);
}
