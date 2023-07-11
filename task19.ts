/* Dinner Guests: Working with one of the 
programs from Exercises 14 through 18, 
print a message indicating the number of 
people you are inviting to dinner */

let guest_list : string[]= ["Aslam", "Akbar", "Usman", "Hassan"];
// for (let i = 0; i < guest_list.length; i++) {
//     console.log(`${guest_list[i]}, Would you like to join me on Dinner?`);
// }
guest_list.splice(guest_list.length - 1, 1, "Kamaran");
// console.log(guest_list);
// for (let i = 0; i < guest_list.length; i++) {
//     console.log(`${guest_list[i]}, Would you like to join me on Dinner?`);
// }
//Task 16
// console.log("I Found a bigger Table");
//Adding at start of Array
guest_list.splice(0, 0, "Jawad");
// console.log(guests_name);
//Adding in middle
var middle_index = (guest_list.length) / 2;
guest_list.splice(middle_index, 0, "Fahad");
// console.log(guests_name);
//Adding in Last
guest_list.push("Shehreyar");
// console.log(guests_name);
// for (var i = 0; i < guest_list.length; i++) {
//     console.log(`${guest_list[i]}, wolud you like to join dinner with me?`);
// }

console.log(`I have invited ${guest_list.length}, number of people for dinner`);
